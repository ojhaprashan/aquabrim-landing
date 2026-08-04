import React from 'react';
import { PolicySection, PolicyP, PolicyList, PolicyContact } from '../common/PolicyKit';

export const nav = [
  { href: '#overview', label: '1. Overview' },
  { href: '#pricing-structure', label: '2. Custom Pricing' },
  { href: '#quotes', label: '3. Quotations' },
  { href: '#taxes', label: '4. Taxes & Charges' },
  { href: '#payments', label: '5. Payment Terms' },
  { href: '#offers', label: '6. Promotional Offers' },
  { href: '#accuracy', label: '7. Pricing Accuracy' },
  { href: '#refunds', label: '8. Refunds & Adjusts' },
  { href: '#updates', label: '9. Policy Updates' },
  { href: '#contact', label: '10. Contact Us' },
];

export const fallbackBody = (
  <>
      <PolicySection id="overview" title="1. Overview">
        <PolicyP>
          Aquabrim provides customized water automation and smart water management solutions for residential, commercial, and industrial applications. As most solutions depend on project requirements, installation scope, and system configuration, product pricing is generally shared upon inquiry or consultation.
        </PolicyP>
        <PolicyP className="mt-3">
          By interacting with Aquabrim for products or services, customers agree to the terms outlined in this Pricing Policy.
        </PolicyP>
      </PolicySection>

      <PolicySection id="pricing-structure" title="2. Custom Pricing Structure">
        <PolicyP className="mb-3">Pricing for Aquabrim products and solutions may vary based on:</PolicyP>
        <PolicyList items={[
          'Product model and configuration',
          'Site requirements',
          'Number of tanks or motors',
          'Automation scope',
          'Installation complexity',
          'Add-on features and integrations',
        ]} />
        <PolicyP className="mt-4">
          For this reason, pricing may not always be displayed directly on the website. Customers can request product quotations, consultation support, and solution recommendations through Aquabrim&rsquo;s sales or support team.
        </PolicyP>
      </PolicySection>

      <PolicySection id="quotes" title="3. Quotations & Validity">
        <PolicyP>Official quotations shared by Aquabrim:</PolicyP>
        <PolicyList icon="bi-check-lg" items={[
          'Are valid only for the specified duration mentioned in the quotation',
          'May vary depending on project scope or technical requirements',
          'Are subject to stock availability and operational conditions',
        ]} />
        <PolicyP className="mt-3">Aquabrim reserves the right to revise quotations if there are changes in:</PolicyP>
        <PolicyList icon="bi-arrow-right" items={[
          'Product specifications',
          'Site conditions',
          'Taxes or logistics costs',
          'Market pricing',
        ]} />
      </PolicySection>

      <PolicySection id="taxes" title="4. Taxes & Additional Charges">
        <PolicyP>Applicable charges may include:</PolicyP>
        <PolicyList icon="bi-plus-circle" items={[
          'GST and government taxes',
          'Shipping or logistics charges',
          'Installation and setup costs',
          'AMC or service-related charges',
          'Custom integration costs',
        ]} />
        <PolicyP className="mt-3">
          Final pricing details will be communicated during quotation sharing, consultation, or order confirmation.
        </PolicyP>
      </PolicySection>

      <PolicySection id="payments" title="5. Payment Terms">
        <PolicyP>Orders and services may be processed only after:</PolicyP>
        <PolicyList icon="bi-shield-check" items={[
          'Payment confirmation',
          'Advance payment (if applicable)',
          'Completion of required documentation',
        ]} />
        <PolicyP className="mt-3">
          Aquabrim reserves the right to hold or cancel orders in case of payment issues, revise pricing before final confirmation, or decline services in case of incomplete payment compliance.
        </PolicyP>
      </PolicySection>

      <PolicySection id="offers" title="6. Promotional Offers">
        <PolicyP className="mb-3">
          From time to time, Aquabrim may offer promotional campaigns, limited-time offers, bundle solutions, or service benefits.
        </PolicyP>
        <PolicyP>Such offers:</PolicyP>
        <PolicyList icon="bi-tags" items={[
          'Are subject to specific terms and timelines',
          'May be withdrawn or modified without prior notice',
          'Cannot be combined unless explicitly mentioned',
        ]} />
      </PolicySection>

      <PolicySection id="accuracy" title="7. Pricing Accuracy">
        <PolicyP className="mb-3">
          While Aquabrim strives to maintain accurate information, occasional pricing or quotation errors may occur.
        </PolicyP>
        <PolicyP>Aquabrim reserves the right to:</PolicyP>
        <PolicyList icon="bi-arrow-right" items={[
          'Correct pricing inaccuracies',
          'Update quotations',
          'Modify product or service details without prior notice',
        ]} />
        <PolicyP className="mt-3">
          Customers will be informed in case any correction affects an active inquiry or order.
        </PolicyP>
      </PolicySection>

      <PolicySection id="refunds" title="8. Refunds & Adjustments">
        <PolicyP className="mb-3">
          Refund-related matters shall be governed by Aquabrim&rsquo;s Refund Policy.
        </PolicyP>
        <PolicyP>Aquabrim does not guarantee:</PolicyP>
        <PolicyList icon="bi-x-circle" danger items={[
          'Retroactive discounts',
          'Price matching',
          'Adjustments based on future pricing revisions',
        ]} />
      </PolicySection>

      <PolicySection id="updates" title="9. Policy Updates">
        <PolicyP>
          Aquabrim reserves the right to update or modify this Pricing Policy at any time without prior notice. Updated versions will be published on this page.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="10. Contact Us">
        <PolicyP className="mb-4">
          For quotations, pricing inquiries, or consultation requests, please contact:
        </PolicyP>
        <PolicyContact />
      </PolicySection>
  </>
);
