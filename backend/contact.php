<?php
/**
 * contact.php — receives a JSON POST from the website contact form and stores it
 * in the CFDB7 (Contact Form DB 7) table `ipt_db7_forms` in the exact serialized
 * format the WordPress CFDB7 dashboard expects.
 *
 * Table columns: form_post_id, form_value (PHP serialize()'d assoc array), form_date.
 *
 * ---- CONFIGURE THESE FOR YOUR SERVER ----------------------------------------
 */
const DB_HOST = 'localhost';
const DB_NAME = 'YOUR_DB_NAME';
const DB_USER = 'YOUR_DB_USER';
const DB_PASS = 'YOUR_DB_PASSWORD';
const DB_TABLE = 'ipt_db7_forms';        // table prefix is `ipt_`

// The WordPress post ID of the CF7/CFDB7 form these submissions belong to.
// Find it under Contact > Contact Forms (the `post` column / edit URL `post=NN`).
const CFDB7_FORM_POST_ID = 0;            // <-- set to your form's post ID

// Exact origin of the website making the request (scheme + host, no trailing slash).
// Must be a specific origin, NOT '*', because the request is sent with credentials.
const ALLOWED_ORIGIN = 'https://aquabrim.com';
// -----------------------------------------------------------------------------

// ---- CORS (request is cross-origin with credentials: 'include') -------------
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if ($origin === ALLOWED_ORIGIN) {
    header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
    header('Access-Control-Allow-Credentials: true');
}
header('Vary: Origin');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Preflight: respond and stop.
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

/** Send a JSON error and stop. */
function fail($status, $message) {
    http_response_code($status);
    echo json_encode(['error' => $message]);
    exit;
}

// ---- 1. Read + default the JSON body ----------------------------------------
$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) {
    fail(400, 'Invalid JSON body.');
}

/** Fetch a key as a trimmed string, defaulting to $default when missing/empty-ish. */
function field($body, $key, $default = '') {
    if (!isset($body[$key]) || $body[$key] === null) return $default;
    $val = is_string($body[$key]) ? trim($body[$key]) : (string) $body[$key];
    return $val === '' ? $default : $val;
}

$name         = field($body, 'name');
$email        = field($body, 'email');
$phone        = field($body, 'phone');
$product      = field($body, 'product');
$source       = field($body, 'source', 'Website');
$queryType    = field($body, 'queryType', 'Query Type');
$message      = field($body, 'message');
$utm_campaign = field($body, 'utm_campaign');
$utm_adgroup  = field($body, 'utm_adgroup');
$utm_keyword  = field($body, 'utm_keyword');
$device       = field($body, 'device');
$gclid        = field($body, 'gclid');

// ---- 2. Validate ------------------------------------------------------------
if ($name === '') {
    fail(400, 'Name is required.');
}
if ($email === '') {
    fail(400, 'Email is required.');
}

// ---- 3. Build the CFDB7 array IN EXACT ORDER, then serialize ----------------
// Order matters: CFDB7 renders dashboard columns in array order.
$form_value = serialize([
    'cfdb7_status' => 'unread',        // string
    'product'      => [$product],      // array of 1
    'source'       => [$source],       // array of 1
    'your-name'    => $name,           // string
    'your-email'   => $email,          // string
    'tel-553'      => $phone,          // string
    'menu-175'     => [$queryType],    // array of 1
    'utm_campaign' => $utm_campaign,   // plain string
    'utm_adgroup'  => $utm_adgroup,    // plain string
    'utm_keyword'  => $utm_keyword,    // plain string
    'device'       => $device,         // plain string
    'gclid'        => $gclid,          // plain string
    'your-message' => $message,        // string
]); // => a:13:{...}

// ---- 4. Timestamp in IST (server is UTC; do NOT use MySQL NOW()) ------------
$tz = new DateTimeZone('Asia/Kolkata');
$form_date = (new DateTime('now', $tz))->format('Y-m-d H:i:s');

// ---- 5. Insert via PDO prepared statement -----------------------------------
try {
    $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4';
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);

    $sql = 'INSERT INTO `' . DB_TABLE . '` (form_post_id, form_value, form_date)
            VALUES (:form_post_id, :form_value, :form_date)';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':form_post_id' => CFDB7_FORM_POST_ID,
        ':form_value'   => $form_value,
        ':form_date'    => $form_date,
    ]);

    $id = (int) $pdo->lastInsertId();
    http_response_code(200);
    echo json_encode(['success' => true, 'id' => $id]);
} catch (PDOException $e) {
    // Log the real error server-side; don't leak DB details to the client.
    error_log('contact.php DB error: ' . $e->getMessage());
    fail(500, 'Could not save your submission. Please try again later.');
}
