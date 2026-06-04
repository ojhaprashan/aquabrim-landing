import React from 'react';
import { PolicyArea, PolicySection, PolicyP, PolicyList, PolicyContact } from '../common/PolicyKit';

const nav = [
  { href: '#overview', label: '1. Overview' },
  { href: '#acceptance', label: '2. Acceptance' },
  { href: '#company', label: '3. Company Info' },
  { href: '#website-use', label: '4. Use of Website' },
  { href: '#product-info', label: '5. Product Info' },
  { href: '#pricing-payments', label: '6. Pricing & Payments' },
  { href: '#intellectual-property', label: '7. Intellectual Property' },
  { href: '#links', label: '8. Third-Party Links' },
  { href: '#liability', label: '9. Liability Limit' },
  { href: '#responsibilities', label: '10. User Conduct' },
  { href: '#force-majeure', label: '11. Force Majeure' },
  { href: '#governing-law', label: '12. Governing Law' },
  { href: '#changes', label: '13. Changes to Terms' },
  { href: '#contact', label: '14. Contact Us' },
];

const TermsConditionArea = () => {
  return (
    <PolicyArea lastUpdated="20 May 2026" nav={nav}>
      <PolicySection id="overview" title="1. Overview">
        <PolicyP>
          Welcome to Aquabrim. By accessing or using our website, products, services, or platform, you agree to comply with and be bound by the following Terms &amp; Conditions.
        </PolicyP>
        <PolicyP className="mt-3">
          These terms govern your use of the Aquabrim website and all related services, products, content, and communications provided by Aquabrim Home Appliance Pvt. Ltd.
        </PolicyP>
        <PolicyP className="mt-3">Please read these terms carefully before using the platform.</PolicyP>
      </PolicySection>

      <PolicySection id="acceptance" title="2. Acceptance of Terms">
        <PolicyP className="mb-3">By accessing, browsing, or using this website, you acknowledge that:</PolicyP>
        <PolicyList items={[
          'You have read and understood these Terms & Conditions',
          'You agree to comply with all applicable policies and guidelines',
          'You are legally authorized to enter into this agreement',
        ]} className="mb-4" />
        <PolicyP>
          If you do not agree with any part of these terms, please discontinue use of the website and services.
        </PolicyP>
      </PolicySection>

      <PolicySection id="company" title="3. Company Information">
        <PolicyP className="mb-3">This platform is owned and operated by:</PolicyP>
        <div className="rounded-2xl bg-[#f0f7ff] p-4">
          <h6 className="mb-2 font-bold text-[#212529]">AQUABRIM HOME APPLIANCE PVT. LTD.</h6>
          <p className="mb-0 text-[#6c757d]">
            <strong>Registered Office:</strong> 1st Floor, Khasra No. 369, 370, 371 &amp; 382, 100 Feet Road, MG Road, Ghitorni Village, New Delhi – 110030, India
          </p>
        </div>
      </PolicySection>

      <PolicySection id="website-use" title="4. Use of Website & Services">
        <PolicyP className="mb-3">Users agree to:</PolicyP>
        <PolicyList icon="bi-check-lg" items={[
          'Provide accurate and complete information when submitting forms or inquiries',
          'Use the website and services only for lawful purposes',
          'Avoid any misuse, unauthorized access, or disruption of the platform',
          'Not attempt to copy, reproduce, or exploit website content without permission',
        ]} />
        <PolicyP className="mt-3">
          Aquabrim reserves the right to restrict or terminate access if misuse or violation of terms is detected.
        </PolicyP>
      </PolicySection>

      <PolicySection id="product-info" title="5. Product & Service Information">
        <PolicyP className="mb-3">
          Aquabrim strives to ensure that all product, service, and technical information displayed on the website is accurate and updated.
        </PolicyP>
        <PolicyP>However:</PolicyP>
        <PolicyList icon="bi-arrow-right" items={[
          'Information may occasionally contain errors or inaccuracies',
          'Product specifications and availability may change without prior notice',
          'Visuals, diagrams, and representations are for reference purposes only',
        ]} />
        <PolicyP className="mt-3">
          Users are advised to independently verify product suitability for their specific requirements.
        </PolicyP>
      </PolicySection>

      <PolicySection id="pricing-payments" title="6. Pricing & Payments">
        <PolicyP className="mb-3">
          All pricing, quotations, and service charges displayed or communicated by Aquabrim are subject to change without prior notice.
        </PolicyP>
        <PolicyP>By placing an order or availing services, users agree to:</PolicyP>
        <PolicyList icon="bi-wallet2" items={[
          'Pay applicable charges',
          'Provide valid payment information',
          'Comply with applicable payment terms',
        ]} />
      </PolicySection>

      <PolicySection id="intellectual-property" title="7. Intellectual Property Rights">
        <PolicyP className="mb-3">All content available on this platform, including:</PolicyP>
        <PolicyList items={[
          'Website design',
          'Graphics and product content',
          'Logos and branding elements',
          'Images and technical materials',
        ]} className="mb-4" />
        <PolicyP className="mb-3">are the intellectual property of Aquabrim unless otherwise stated.</PolicyP>
        <PolicyP>Unauthorized use, reproduction, or distribution of website content is strictly prohibited.</PolicyP>
      </PolicySection>

      <PolicySection id="links" title="8. Third-Party Links">
        <PolicyP className="mb-3">
          The website may contain links to external or third-party websites for informational purposes.
        </PolicyP>
        <PolicyP>Aquabrim is not responsible for:</PolicyP>
        <PolicyList icon="bi-x-circle" danger items={[
          'Third-party content',
          'Website availability',
          'Privacy practices and external policies',
        ]} />
        <PolicyP className="mt-3">Users accessing third-party links do so at their own discretion and risk.</PolicyP>
      </PolicySection>

      <PolicySection id="liability" title="9. Limitation of Liability">
        <PolicyP className="mb-3">Aquabrim shall not be held liable for:</PolicyP>
        <PolicyList icon="bi-exclamation-octagon" warning items={[
          'Direct or indirect damages',
          'Service interruptions or technical errors',
          'Data loss or logistical delays',
          'Misuse of products or services',
        ]} className="mb-4" />
        <PolicyP>Use of the website and services is entirely at the user&rsquo;s own risk.</PolicyP>
      </PolicySection>

      <PolicySection id="responsibilities" title="10. User Responsibilities">
        <PolicyP className="mb-3">Users agree not to:</PolicyP>
        <PolicyList icon="bi-shield-slash" danger items={[
          'Use the platform for unlawful activities',
          'Attempt unauthorized access to systems or data',
          'Interfere with website functionality or security',
          'Upload malicious software or harmful content',
        ]} />
        <PolicyP className="mt-3">Violation of these conditions may result in legal action or restricted access.</PolicyP>
      </PolicySection>

      <PolicySection id="force-majeure" title="11. Force Majeure">
        <PolicyP>
          Aquabrim shall not be held responsible for delays or failure in performance caused by circumstances beyond reasonable control, including natural disasters, power failures, government restrictions, network disruptions, technical failures, or acts of God.
        </PolicyP>
      </PolicySection>

      <PolicySection id="governing-law" title="12. Governing Law & Jurisdiction">
        <PolicyP className="mb-3">
          These Terms &amp; Conditions shall be governed and interpreted in accordance with the laws of India.
        </PolicyP>
        <PolicyP>
          Any disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
        </PolicyP>
      </PolicySection>

      <PolicySection id="changes" title="13. Changes to Terms">
        <PolicyP className="mb-3">
          Aquabrim reserves the right to update, modify, or revise these Terms &amp; Conditions at any time without prior notice.
        </PolicyP>
        <PolicyP>Users are encouraged to review this page periodically for updates.</PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="14. Contact Us">
        <PolicyP className="mb-4">
          For any questions, concerns, or legal communications regarding these Terms &amp; Conditions, please contact:
        </PolicyP>
        <PolicyContact />
      </PolicySection>
    </PolicyArea>
  );
};

export default TermsConditionArea;
