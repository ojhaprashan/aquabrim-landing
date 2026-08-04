// Central blog data source.
// Each blog carries structured, block-based content so the detail page can render
// headings, paragraphs, lists, tables, callouts and FAQs from a single source.

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface Faq {
  question: string;
  answer: string;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  category: string;
  categoryId: string;
  date: string;
  readTime: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
  content: ContentBlock[];
  faqs: Faq[];
}

// The site-wide blog categories (fixed order requested by the business).
export const blogCategories = [
  { id: "automation", name: "Water Automation" },
  { id: "conservation", name: "Water Conservation" },
  { id: "guides", name: "Tips & Guides" },
  { id: "insights", name: "Industry Insights" },
  { id: "updates", name: "Product Updates" },
];

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "fed-up-waking-early-municipal-water-supply-delhi",
    title: "Fed Up of Waking Up Early Just to Catch the Water Supply in Delhi?",
    category: "Water Automation",
    categoryId: "automation",
    date: "10 Jul 2026",
    readTime: "5 min read",
    author: "Aquabrim Team",
    metaTitle:
      "Fed Up of Waking Up Early for Delhi's Water Supply? Read This | Aquabrim",
    metaDescription:
      "Tired of catching Delhi's irregular DJB municipal water supply by hand? Discover how a smart automatic water level controller solves this problem permanently, no more missed supply, no more overflows.",
    excerpt:
      "If you live in Delhi, you know the drill: wake up before sunrise to catch the DJB supply, or wait another 24 hours. Here's the permanent, low-effort fix thousands of homeowners have already switched to.",
    image: "/assets/blogs/blogs1.png",
    imageAlt:
      "Delhi apartment building with water tank - smart automatic water level controller solution by Aquabrim",
    tags: [
      "Water Supply Delhi",
      "DJB",
      "Automatic Controller",
      "Smart Home",
      "Water Tank",
    ],
    content: [
      {
        type: "p",
        text: "If you live in Delhi, whether it's Nangloi, Dwarka, Rohini, Uttam Nagar, or Mustafabad, you know the drill. The alarm goes off at 5:30 AM, not because you have somewhere to be, but because the DJB water supply might arrive anytime between now and 8 AM, and if you miss it, your overhead tank stays half-empty for another 24 hours.",
      },
      {
        type: "p",
        text: "You fill the tank manually, keep an ear out for the motor, worry about overflow, and then do the whole thing again the next morning. It is exhausting, and honestly, it should not work this way in 2025.",
      },
      {
        type: "p",
        text: "The good news? There is a straightforward, permanent fix that thousands of Delhi homeowners have already switched to. And no, it is not a bigger tank or a more complicated plumbing setup. It is a smart automatic water level controller, and once it is installed, you will genuinely forget that managing water supply was ever a daily task.",
      },
      { type: "h2", text: "Why Delhi's Water Supply Problem Is So Hard to Manage" },
      {
        type: "p",
        text: "Delhi's municipal water supply, distributed by the Delhi Jal Board (DJB), is notorious for being unpredictable. Supply timings vary by colony and season, pressure fluctuates, and in many areas, particularly in South and West Delhi, the daily supply window can be as short as 30 to 45 minutes.",
      },
      {
        type: "p",
        text: "The result is a city full of residents who have structured their entire mornings around catching water rather than getting on with their day. Here is what most Delhi households deal with every single day:",
      },
      {
        type: "list",
        items: [
          "Waking up before sunrise just to manually start the motor when supply arrives",
          "Running upstairs to check tank levels and stop the motor before it overflows",
          "Missing the supply window entirely when the DJB timing shifts without warning",
          "Motor damage from dry running when the municipal supply cuts out mid-fill",
          "Water bills climbing because of overflow wastage nobody noticed in time",
          "Women and elderly residents bearing the invisible daily burden of water management",
        ],
      },
      {
        type: "p",
        text: "It is not a minor inconvenience. For families with working parents, elderly residents, or anyone living alone, managing this manually every day is a real and growing problem.",
      },
      { type: "h2", text: "What Happens When You Miss the Municipal Water Supply" },
      {
        type: "p",
        text: "Missing even one DJB supply window can cascade into a difficult day. If your overhead tank is more than 60% empty when the supply is missed, you are likely short on water for cooking, bathing, and household use by evening.",
      },
      {
        type: "p",
        text: "And the more you try to compensate, running the motor on a borewell backup, filling from private tanker deliveries, or rationing usage, the more time and money it costs. In many Delhi colonies, a private water tanker delivering 1,000 litres can cost ₹500 to ₹1,500 during peak summer months.",
      },
      {
        type: "callout",
        title: "Quick fact",
        text: "In many Delhi colonies, DJB water supply arrives for less than 1 hour per day. Missing it once often means waiting 24 hours for the next supply window.",
      },
      {
        type: "p",
        text: "The real cost of managing municipal water supply manually in Delhi is not just the water you waste, it is the sleep you lose, the mornings you waste, and the low-level anxiety of never being quite sure whether your tank is full enough.",
      },
      { type: "h2", text: "A Smart Automatic Water Level Controller" },
      {
        type: "p",
        text: "An automatic water level controller does exactly what the name says, it monitors your municipal supply line and your overhead tank continuously, without any input from you.",
      },
      {
        type: "p",
        text: "When DJB water supply arrives at your inlet pipe, the controller detects it automatically, within minutes of the supply reaching your line, even if the water pressure is low or the supply point is up to 50 metres from your motor installation. It then starts your motor, fills your tank, and cuts the motor off the moment your tank is full.",
      },
      {
        type: "p",
        text: "No alarm. No manual switch. No overflow. No dry run. Just a full tank every morning.",
      },
      { type: "h3", text: "How It Works" },
      { type: "p", text: "The system has three main components working together:" },
      {
        type: "list",
        items: [
          "A water supply sensor (PRSR transmitter) connected to your municipal inlet pipe, detects when DJB water supply is flowing, even at low pressure",
          "A wireless tank level transmitter installed in your overhead tank, monitors the water level in real time and communicates wirelessly to the controller",
          "The controller unit mounted on your wall, receives signals from both sensors and automatically controls your motor with no manual input",
        ],
      },
      {
        type: "p",
        text: "All three components communicate wirelessly, no wiring needed between your roof tank and the controller, which makes installation clean and simple even in older Delhi buildings and multi-storey apartments.",
      },
      { type: "h2", text: "What the Controller Protects You From" },
      {
        type: "p",
        text: "A smart water level controller goes beyond convenience. It actively protects your home and your motor from four common problems that cost Delhi residents money every year:",
      },
      {
        type: "table",
        headers: ["Protection Feature", "What It Does For You"],
        rows: [
          [
            "Dry Run Protection",
            "If municipal supply cuts out while your motor is running, the controller detects the interrupted flow instantly and stops the motor, preventing burnout. A motor replacement in Delhi costs ₹3,000-₹15,000. This alone pays for the controller.",
          ],
          [
            "Overflow Prevention",
            "Once your overhead tank reaches full capacity, the motor is cut off immediately, no water spilling over the roof, no ceiling seepage, no wasted water and no surprise water bill spikes.",
          ],
          [
            "Voltage Protection",
            "The system monitors power supply quality and stops the motor if voltage becomes unsafe, protecting against spikes and fluctuations common in Delhi's residential colonies.",
          ],
          [
            "Missed Supply Prevention",
            "Even if DJB water arrives at 4 AM while you're asleep, the controller detects it and fills your tank automatically. You wake up to a full tank, every single morning.",
          ],
        ],
      },
      { type: "h2", text: "Is This Suitable for Delhi's Municipal Supply Setup?" },
      {
        type: "p",
        text: "Yes, and it has specifically been designed for exactly this type of setup. Aquabrim's Trigger, for example, is built for homes and apartments that draw water directly from a municipal corporation supply line.",
      },
      {
        type: "p",
        text: "It handles the specific challenges of Delhi's water infrastructure:",
      },
      {
        type: "list",
        items: [
          "Works even when supply pressure is low, the sensor can detect water availability up to 50 metres from the motor",
          "Handles irregular DJB timings, because it monitors the supply line continuously, not at a fixed schedule",
          "Suitable for apartments and independent houses, the controller mounts on any wall and sensors require no permanent plumbing changes",
          "Supports multiple tanks, if your building or house has more than one overhead tank, additional sensors can be added",
        ],
      },
      {
        type: "p",
        text: "If your home draws from a borewell or underground tank as a backup, there are separate controller models designed for that configuration as well.",
      },
      { type: "h2", text: "Is Installation Complicated?" },
      {
        type: "p",
        text: "Not at all. A complete automatic water level controller kit comes with everything needed for a standard installation, the controller unit, transmitters for the tank and inlet pipe, mounting hardware, and all connectors.",
      },
      { type: "p", text: "Installation typically involves:" },
      {
        type: "list",
        items: [
          "Mounting the controller unit on a wall near your motor or electrical panel",
          "Fixing the water supply sensor (PRSR transmitter) to your municipal inlet pipe",
          "Attaching the tank level transmitter to your overhead tank's existing pipe or wall",
          "Connecting the controller to your motor's electrical supply",
        ],
      },
      {
        type: "p",
        text: "No civil work, no tank drilling, no permanent changes to your plumbing. The entire setup can be completed in a few hours, including in multi-storey apartment buildings across Delhi NCR.",
      },
      { type: "h2", text: "How Much Does It Cost And Is It Worth It?" },
      {
        type: "p",
        text: "A smart automatic water level controller for a standard Delhi home is a one-time investment. When you weigh it against the daily effort of managing supply manually, the wasted water from overflow, and the potential cost of motor repair from dry run damage, the payback is typically within the first few months of use.",
      },
      {
        type: "p",
        text: "Think about it this way: a motor burnout from dry running can cost between ₹3,000 and ₹15,000 in repairs or replacement. A single prevention of that alone covers the cost of the controller and you've still got a lifetime of uninterrupted sleep ahead of you.",
      },
      {
        type: "p",
        text: "A smart water level controller is not an expense, it is the cost of never thinking about your water supply again.",
      },
      { type: "h2", text: "The Bottom Line" },
      {
        type: "p",
        text: "Waking up early to catch Delhi's municipal water supply is a problem that has a permanent, affordable, and low-effort solution. An automatic water level controller removes the daily stress entirely, detecting DJB supply, filling your tank, and protecting your motor around the clock, without any manual input from you.",
      },
      {
        type: "p",
        text: "It is one of those home upgrades that, once installed, you wonder how you ever managed without it. Whether you're in Rohini, Dwarka, Nangloi, or anywhere else across Delhi NCR, the answer to your water problem is already available.",
      },
      {
        type: "p",
        text: "If you are in Delhi NCR and want to know which Aquabrim controller is right for your home setup, borewell, municipal, multi-tank, or a combination, our team is happy to help you find the right fit.",
      },
    ],
    faqs: [
      {
        question:
          "Is an automatic water level controller compatible with Delhi's DJB municipal supply?",
        answer:
          "Yes. Controllers like Aquabrim's Trigger are specifically designed for homes connected to a municipal corporation supply line. The PRSR sensor detects DJB water supply in your inlet pipe and starts the motor automatically when supply arrives.",
      },
      {
        question:
          "What if the DJB water supply arrives at night or in the early hours?",
        answer:
          "The controller monitors your supply line continuously, 24 hours a day. It will detect the supply and fill your tank automatically regardless of what time it arrives, even if you are asleep at 4 AM.",
      },
      {
        question: "Will the motor run dry if the DJB supply cuts out mid-fill?",
        answer:
          "No. Dry run protection stops the motor automatically if water flow is interrupted. This prevents motor damage from running without water, protecting an appliance that can cost ₹3,000-₹15,000 to repair or replace.",
      },
      {
        question: "Does the controller work in apartments or only independent houses?",
        answer:
          "It works in both. The controller mounts on any wall, and the sensors are wireless, no major modifications to the building's plumbing are needed. It is suitable for apartments, independent houses, and small commercial properties across Delhi NCR.",
      },
      {
        question:
          "How quickly does the controller detect that DJB water supply has arrived?",
        answer:
          "The PRSR sensor detects water availability within minutes of supply reaching your inlet pipe, even if the water supply point is up to 50 metres away from where the motor is installed.",
      },
    ],
  },
  {
    id: 2,
    slug: "why-every-home-needs-a-smart-water-level-controller",
    title: "Why Every Home Needs a Smart Water Level Controller",
    category: "Tips & Guides",
    categoryId: "guides",
    date: "18 Jul 2026",
    readTime: "4 min read",
    author: "Aquabrim Team",
    metaTitle: "Why Every Home Needs a Smart Water Level Controller | Aquabrim",
    metaDescription:
      "Tank overflow, dry motors, and manual switching are avoidable. Here's what a smart water level controller does, its advantages, and the main types.",
    excerpt:
      "Most homes still manage water the way they did twenty years ago. A smart water level controller removes tank checking, overflow and dry-run worries from your daily routine, here's what it is and the types you'll come across.",
    image: "/assets/blogs/blogs2.png",
    imageAlt: "Smart water level controller installed above a home overhead tank",
    tags: ["Smart Water Level Controller", "Home Automation", "Water Management"],
    content: [
      {
        type: "callout",
        title: "Quick Answer",
        text: "A smart water level controller automatically monitors your tank and switches the motor on or off, so it never overflows and never runs dry. It replaces manual checking and old float switches with a wireless sensor system, preventing water waste, motor damage, and the daily habit of remembering to check the tank.",
      },
      {
        type: "p",
        text: "Most homes still manage water the same way they did twenty years ago: someone checks the tank, someone remembers to switch the motor off, and when that doesn't happen, water overflows onto the terrace or the motor runs dry and burns out. A smart water level controller removes all of that from your daily routine. Here's what it actually is, why it matters, and the different types you'll come across.",
      },
      { type: "h2", text: "What Is a Smart Water Level Controller?" },
      {
        type: "p",
        text: "It's a small automated system that checks your tank's water level continuously using a sensor, and controls the motor based on what it finds. When the tank runs low, it switches the motor on. When the tank is full, it switches the motor off. No one has to check, remember, or manually operate a switch. Most modern versions use wireless sensors, so there's no cabling running between the tank and the controller, just a sensor in the tank and a control unit near the motor, talking to each other over radio signal.",
      },
      { type: "h2", text: "How Does It Actually Work?" },
      {
        type: "p",
        text: "A sensor sits inside the tank and measures the water level in real time. That reading is sent wirelessly to a controller unit connected to your motor's power supply. Based on the level it receives, the controller decides whether the motor should be running or not, and acts on it immediately, without waiting for a person to notice or respond.",
      },
      { type: "h2", text: "Advantages of a Smart Water Level Controller" },
      {
        type: "list",
        items: [
          "No more overflow: the motor shuts off automatically the moment the tank is full, so water doesn't spill onto your roof or floor",
          "No more dry-run motor damage: the system protects the pump by stopping it if the water source runs too low, preventing burnout",
          "Saves water and electricity: automated shutoff means the motor only runs exactly as long as it needs to",
          "No manual checking: you stop needing to physically check tank levels or remember to switch the motor on or off",
          "Works even when you're away: the system keeps managing the tank whether you're home or not",
          "Simple installation: wireless systems avoid rewiring or cutting into walls between the tank and the motor panel",
        ],
      },
      { type: "h2", text: "Types of Smart Water Level Controllers" },
      {
        type: "p",
        text: "Not every home has the same water setup, so the right type depends on where your water actually comes from:",
      },
      {
        type: "list",
        items: [
          "Municipal supply homes: need a controller built to catch water the moment it arrives on an unpredictable supply schedule",
          "Borewell or submersible pump homes: need a controller that protects the motor by monitoring the source itself, not just the tank",
          "Homes or societies with multiple tanks: need a system that can manage several tanks from one central controller instead of one unit per tank",
          "Homes that just want alerts: some systems focus purely on monitoring and alarms rather than full motor automation",
        ],
      },
      {
        type: "p",
        text: "For a full breakdown of each type and how to pick between them, our team can help you match the right controller to your exact water setup.",
      },
      { type: "h2", text: "Who Actually Needs This the Most?" },
      {
        type: "p",
        text: "Anyone who has ever forgotten to switch off a motor, dealt with a dry-run pump failure, or simply wants one less thing to manage at home. It matters even more for households relying on a borewell, since motor damage from dry-running is one of the most common and most avoidable repair costs in Indian homes.",
      },
    ],
    faqs: [
      {
        question: "What does a smart water level controller actually do?",
        answer:
          "It automatically monitors your tank's water level and switches the motor on or off accordingly, preventing overflow and dry-run motor damage without needing anyone to check or operate it manually.",
      },
      {
        question:
          "Is a smart water level controller different from a regular float switch?",
        answer:
          "Yes. A float switch is a basic mechanical device that can get stuck or wear out over time. A smart water level controller uses electronic sensors, is more reliable, and often adds features like dry-run protection, multi-tank support, and alerts.",
      },
      {
        question: "Do I need special wiring to install one?",
        answer:
          "Most modern systems are wireless, meaning the sensor and controller communicate over radio signal, avoiding the need to run cables between the tank and the motor.",
      },
      {
        question: "Can it prevent my motor from burning out?",
        answer:
          "Yes, for borewell and submersible pump setups, this is one of its main jobs, it stops the motor automatically if the water source runs too low, which is the most common cause of motor burnout.",
      },
      {
        question: "Is one type of controller suitable for every home?",
        answer:
          "No. The right type depends on your water source, municipal supply, borewell, or multiple tanks each need a system built around that specific setup rather than one generic controller.",
      },
    ],
  },
];

// Helpers
export const getBlogBySlug = (slug: string): Blog | undefined =>
  blogs.find((b) => b.slug === slug);

// Category list with live post counts derived from the blogs above.
export const categoriesWithCounts = () => [
  { id: "all", name: "All Posts", count: blogs.length },
  ...blogCategories.map((c) => ({
    ...c,
    count: blogs.filter((b) => b.categoryId === c.id).length,
  })),
];

export default blogs;
