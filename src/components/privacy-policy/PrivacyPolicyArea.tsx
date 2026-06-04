import React from 'react';
import { PolicyArea, PolicySection, PolicyP, PolicySubheading, PolicyList, PolicyContact } from '../common/PolicyKit';

const nav = [
  { href: '#overview', label: '1. Overview' },
  { href: '#collect', label: '2. Information We Collect' },
  { href: '#use', label: '3. How We Use Information' },
  { href: '#sharing', label: '4. Data Sharing & Disclosure' },
  { href: '#cookies', label: '5. Cookies & Tracking' },
  { href: '#security', label: '6. Data Security' },
  { href: '#rights', label: '7. Your Rights' },
  { href: '#links', label: '8. Third-Party Links' },
  { href: '#children', label: '9. Children’s Privacy' },
  { href: '#updates', label: '10. Policy Updates' },
  { href: '#contact', label: '11. Contact Us' },
];

const PrivacyPolicyArea = () => {
  return (
    <PolicyArea lastUpdated="20 May 2026" nav={nav}>
      <PolicySection id="overview" title="1. Overview">
        <PolicyP>
          At Aquabrim, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, interact with our services, or use our products.
        </PolicyP>
      </PolicySection>

      <PolicySection id="collect" title="2. Information We Collect">
        <PolicyP className="mb-4">
          We may collect personal and non-personal information when you interact with our website or services.
        </PolicyP>
        <PolicySubheading>Personal Information</PolicySubheading>
        <PolicyP className="mb-3">This may include:</PolicyP>
        <PolicyList items={[
          'Name',
          'Email address',
          'Phone number',
          'Billing or mailing address',
          'Company details',
          'Payment information',
          'Information submitted through contact or inquiry forms',
        ]} />
        <PolicySubheading>Non-Personal Information</PolicySubheading>
        <PolicyP className="mb-3">This may include:</PolicyP>
        <PolicyList items={[
          'Browser and device information',
          'IP address',
          'Website usage data',
          'Pages visited and session activity',
          'Cookies and analytics data',
        ]} />
      </PolicySection>

      <PolicySection id="use" title="3. How We Use Your Information">
        <PolicyP className="mb-3">The information collected may be used to:</PolicyP>
        <PolicyList icon="bi-check-lg" items={[
          'Process inquiries, orders, and service requests',
          'Provide customer support and communication',
          'Improve website functionality and user experience',
          'Personalize content and services',
          'Share product updates, offers, or important notifications',
          'Maintain website security and prevent fraudulent activity',
          'Comply with legal and regulatory obligations',
        ]} />
      </PolicySection>

      <PolicySection id="sharing" title="4. Data Sharing & Disclosure">
        <PolicyP className="mb-3">
          Aquabrim does not sell, rent, or trade your personal information to third parties.
        </PolicyP>
        <PolicyP className="mb-3">
          We may share information with trusted service providers and partners who assist us in:
        </PolicyP>
        <PolicyList icon="bi-arrow-right-short" items={[
          'Payment processing',
          'Product delivery',
          'Website operations',
          'Technical support and analytics',
        ]} />
        <PolicyP className="mt-3">
          These partners are required to maintain confidentiality and use information only for authorized purposes.
        </PolicyP>
        <PolicyP className="mt-3">
          We may also disclose information if required by law or to protect our legal rights, users, or services.
        </PolicyP>
      </PolicySection>

      <PolicySection id="cookies" title="5. Cookies & Tracking Technologies">
        <PolicyP className="mb-3">
          Our website may use cookies and similar technologies to improve browsing experience, analyze website traffic, and enhance platform performance.
        </PolicyP>
        <PolicyP>
          You may choose to disable cookies through your browser settings. However, certain website features may not function properly if cookies are disabled.
        </PolicyP>
      </PolicySection>

      <PolicySection id="security" title="6. Data Security">
        <PolicyP className="mb-3">
          We implement reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.
        </PolicyP>
        <PolicyP>
          While we strive to maintain secure systems and processes, no online transmission or storage system can be guaranteed as completely secure.
        </PolicyP>
      </PolicySection>

      <PolicySection id="rights" title="7. Your Rights & Choices">
        <PolicyP className="mb-3">You may have the right to:</PolicyP>
        <PolicyList icon="bi-shield-check" items={[
          'Access the personal information we hold about you',
          'Request correction or update of your information',
          'Request deletion of your personal data, subject to applicable legal obligations',
          'Opt out of marketing communications at any time',
        ]} />
        <PolicyP className="mt-3">
          For such requests, you may contact us directly using the details below.
        </PolicyP>
      </PolicySection>

      <PolicySection id="links" title="8. Third-Party Links">
        <PolicyP className="mb-3">
          Our website may contain links to third-party websites or services. Aquabrim is not responsible for the privacy practices, content, or policies of external websites.
        </PolicyP>
        <PolicyP>
          We encourage users to review the privacy policies of third-party platforms before sharing personal information.
        </PolicyP>
      </PolicySection>

      <PolicySection id="children" title="9. Children’s Privacy">
        <PolicyP>
          Aquabrim does not knowingly collect personal information from children below the age of 13. If such information is identified, appropriate steps will be taken to remove it from our systems.
        </PolicyP>
      </PolicySection>

      <PolicySection id="updates" title="10. Policy Updates">
        <PolicyP className="mb-3">
          Aquabrim reserves the right to modify or update this Privacy Policy at any time. Updated versions will be published on this page along with the revised effective date.
        </PolicyP>
        <PolicyP>We encourage users to review this page periodically for updates.</PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="11. Contact Us">
        <PolicyP className="mb-4">
          For any questions, concerns, or requests related to this Privacy Policy, please contact:
        </PolicyP>
        <PolicyContact />
      </PolicySection>
    </PolicyArea>
  );
};

export default PrivacyPolicyArea;
