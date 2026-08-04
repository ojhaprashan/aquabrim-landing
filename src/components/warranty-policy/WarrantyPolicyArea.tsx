import React from 'react';
import { PolicySection, PolicyP, PolicyList, PolicyContact } from '../common/PolicyKit';

export const nav = [
  { href: '#overview', label: '1. Overview' },
  { href: '#coverage', label: '2. Coverage' },
  { href: '#process', label: '3. Service Process' },
  { href: '#warranty-terms', label: '4. Warranty Terms' },
  { href: '#amc-terms', label: '5. AMC Terms' },
  { href: '#exclusions', label: '6. Exclusions' },
  { href: '#relocation', label: '7. Relocation' },
  { href: '#liability', label: '8. Liability Limits' },
  { href: '#spares', label: '9. Spares & Service' },
  { href: '#updates', label: '10. Policy Updates' },
  { href: '#contact', label: '11. Contact Us' },
];

export const fallbackBody = (
  <>
      <PolicySection id="overview" title="1. Overview">
        <PolicyP>
          Aquabrim products are designed and manufactured to deliver reliable performance and long-term operational efficiency. Our Warranty and Annual Maintenance Contract (AMC) policies are intended to ensure smooth service support and customer assistance throughout the product lifecycle.
        </PolicyP>
        <PolicyP className="mt-3">
          Please review the terms and conditions carefully before requesting warranty or AMC support.
        </PolicyP>
      </PolicySection>

      <PolicySection id="coverage" title="2. Warranty & AMC Coverage">
        <PolicyList icon="bi-shield-check" items={[
          'Warranty and AMC benefits are applicable only to the original purchaser of the product',
          'Coverage is non-transferable unless approved by Aquabrim',
          'Services under warranty or AMC will be carried out only by authorized Aquabrim service personnel',
        ]} className="mb-4" />
        <PolicyP>For support assistance, customers may contact:</PolicyP>
        <PolicyList icon="bi-check-lg" items={[
          'Authorized service centers',
          'Aquabrim support team',
          'Official customer helpline',
        ]} />
      </PolicySection>

      <PolicySection id="process" title="3. Service & Support Process">
        <PolicyP className="mb-3">
          Customers can request support through authorized service centers, official support channels, or our customer helpline.
        </PolicyP>
        <div className="mb-4 rounded-2xl bg-[#f0f7ff] p-4">
          <h6 className="mb-3 font-bold text-[#212529]"><i className="bi bi-headset mr-2 text-[#006CD0]"></i> Support Contact</h6>
          <p className="mb-2 text-[#6c757d]"><strong>Phone:</strong> +91 9560088791</p>
          <p className="mb-0 text-[#6c757d]"><strong>Email:</strong> <a href="mailto:save.water@aquabrim.com" className="text-[#006CD0] no-underline">save.water@aquabrim.com</a></p>
        </div>
        <PolicyP>
          For installations located outside municipal limits or serviceable areas, customers may be required to coordinate with the nearest authorized service center at their own cost and risk.
        </PolicyP>
      </PolicySection>

      <PolicySection id="warranty-terms" title="4. Warranty Terms">
        <PolicyP className="mb-3">
          Warranty support includes repair or replacement of defective components subject to inspection and approval by Aquabrim.
        </PolicyP>
        <PolicyP>Please note:</PolicyP>
        <PolicyList icon="bi-arrow-right" items={[
          'Warranty remains valid only for the original warranty period',
          'Repair or transit time does not extend the warranty duration',
          'Product inspection may be required before warranty approval',
          'Warranty applies only for intended product usage and recommended operating conditions',
        ]} />
      </PolicySection>

      <PolicySection id="amc-terms" title="5. AMC Terms & Conditions">
        <PolicyP className="mb-3">
          Annual Maintenance Contract (AMC) services cover maintenance support as defined in the selected AMC plan.
        </PolicyP>
        <PolicyP>AMC services may include:</PolicyP>
        <PolicyList icon="bi-check-lg" items={[
          'System inspection',
          'Product servicing',
          'Technical assistance',
          'Operational support',
        ]} />
        <PolicyP className="mt-3">
          Specific AMC inclusions may vary depending on the product and service agreement.
        </PolicyP>
      </PolicySection>

      <PolicySection id="exclusions" title="6. Conditions Where Warranty / AMC May Not Apply">
        <PolicyP className="mb-3">
          Warranty or AMC support may not be applicable under the following conditions:
        </PolicyP>
        <PolicyList icon="bi-x-square-fill" danger items={[
          'Product purchased from unauthorized sources',
          'Physical damage, mishandling, or misuse',
          'Unauthorized repair, modification, or relocation',
          'Product overload beyond rated capacity',
          'Missing invoice, warranty card, or AMC documentation',
          'Altered or removed serial number',
          'Damage caused by improper installation or unsuitable site conditions',
          'Electrical issues such as abnormal voltage, lightning, or power fluctuations',
          'Damage caused by pets, insects, rodents, or external environmental factors',
          'Product used for purposes other than intended applications',
        ]} className="mb-4" />
        <PolicyP>
          Any such repairs may be treated as chargeable services subject to inspection and spare availability.
        </PolicyP>
      </PolicySection>

      <PolicySection id="relocation" title="7. Product Relocation & Address Changes">
        <PolicyP className="mb-3">
          If the installed product is relocated or the customer address changes, the customer must inform Aquabrim or the authorized service center in advance.
        </PolicyP>
        <PolicyP>
          Warranty or AMC continuation will be subject to inspection and approval by authorized personnel.
        </PolicyP>
      </PolicySection>

      <PolicySection id="liability" title="8. Limitation of Liability">
        <PolicyP className="mb-3">Aquabrim&rsquo;s responsibility under warranty or AMC shall be limited to:</PolicyP>
        <PolicyList icon="bi-arrow-right-short" items={[
          'Repair of defective components, or',
          'Replacement of eligible parts',
        ]} />
        <PolicyP className="mt-3">
          The company&rsquo;s liability shall not exceed the original purchase value or the maximum retail price of the product, whichever is lower.
        </PolicyP>
      </PolicySection>

      <PolicySection id="spares" title="9. Spare Parts & Service Availability">
        <PolicyP>
          In rare cases where specific spare parts are unavailable or discontinued, Aquabrim may provide commercially reasonable alternatives based on prevailing service and depreciation policies.
        </PolicyP>
      </PolicySection>

      <PolicySection id="updates" title="10. Policy Updates">
        <PolicyP>
          Aquabrim reserves the right to modify, update, or revise these Warranty and AMC Terms at any time without prior notice. Updated policies will be available on this page.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="11. Contact Us">
        <PolicyP className="mb-4">
          For warranty support, AMC assistance, or service-related queries, please contact:
        </PolicyP>
        <PolicyContact />
      </PolicySection>
  </>
);
