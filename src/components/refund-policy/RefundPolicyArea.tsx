import React from 'react';
import { PolicySection, PolicyP, PolicyList, PolicyContact } from '../common/PolicyKit';

export const nav = [
  { href: '#overview', label: '1. Overview' },
  { href: '#eligibility', label: '2. Refund Eligibility' },
  { href: '#request', label: '3. How to Request' },
  { href: '#process', label: '4. Approval Process' },
  { href: '#timeline', label: '5. Refund Timeline' },
  { href: '#non-refundable', label: '6. Non-Refundable' },
  { href: '#damaged', label: '7. Damaged/Defective' },
  { href: '#updates', label: '8. Policy Updates' },
  { href: '#contact', label: '9. Contact Us' },
];

export const fallbackBody = (
  <>
      <PolicySection id="overview" title="1. Overview">
        <PolicyP>
          At Aquabrim, customer satisfaction is important to us. If you experience any issue with your purchase, we offer a transparent and hassle-free refund process subject to the terms outlined below.
        </PolicyP>
        <PolicyP className="mt-3">Please review our refund policy carefully before initiating a request.</PolicyP>
      </PolicySection>

      <PolicySection id="eligibility" title="2. Refund Eligibility">
        <PolicyP className="mb-4">Refund requests may be considered under the following conditions:</PolicyP>
        <PolicyList icon="bi-check-circle-fill" items={[
          'The product must be returned in its original condition',
          'The item should be unused and free from physical damage',
          'Original packaging, accessories, and documents must be included',
          'Refund requests must be raised within 7 days of product delivery',
          'Refund approval is subject to product inspection and verification by Aquabrim',
        ]} />
        <PolicyP className="mt-4">Products that do not meet these conditions may not qualify for a refund.</PolicyP>
      </PolicySection>

      <PolicySection id="request" title="3. How to Request a Refund">
        <PolicyP className="mb-4">
          To initiate a refund request, customers can contact our support team with the following details:
        </PolicyP>
        <PolicyList icon="bi-arrow-right" items={[
          'Order number',
          'Reason for refund request',
          'Supporting images or videos (if applicable)',
        ]} className="mb-4" />

        <div className="rounded-2xl bg-[#f0f7ff] p-4">
          <h6 className="mb-3 font-bold text-[#212529]"><i className="bi bi-headset mr-2 text-[#006CD0]"></i> Contact Support</h6>
          <p className="mb-2 text-[#6c757d]"><strong>Phone:</strong> +91 9560088791</p>
          <p className="mb-2 text-[#6c757d]"><strong>Email:</strong> <a href="mailto:save.water@aquabrim.com" className="text-[#006CD0] no-underline">save.water@aquabrim.com</a></p>
          <p className="mb-0 text-[15px] text-[#6c757d]">Once the request is received, our team will review the details and provide an update on the approval status within a reasonable timeframe.</p>
        </div>
      </PolicySection>

      <PolicySection id="process" title="4. Refund Approval Process">
        <PolicyP className="mb-3">
          Refunds are processed only after the returned product successfully passes inspection and meets the eligibility criteria mentioned above.
        </PolicyP>
        <PolicyP>If approved:</PolicyP>
        <PolicyList icon="bi-check-lg" items={[
          'The refund amount will be credited to the original payment method used during purchase',
          'Customers will receive confirmation once the refund has been initiated',
        ]} />
      </PolicySection>

      <PolicySection id="timeline" title="5. Refund Timeline">
        <PolicyP className="mb-3">Approved refunds are generally processed within 7 business days.</PolicyP>
        <PolicyP>The final credit timeline may vary depending on:</PolicyP>
        <PolicyList icon="bi-calendar-event" items={[
          'Bank processing time',
          'Payment gateway policies',
          'Original payment method used',
        ]} />
      </PolicySection>

      <PolicySection id="non-refundable" title="6. Non-Refundable Conditions">
        <PolicyP className="mb-3">Refunds may not be applicable in the following situations:</PolicyP>
        <PolicyList icon="bi-x-circle" danger items={[
          'Products returned in damaged or used condition',
          'Missing packaging, accessories, or components',
          'Customized or special-order products',
          'Physical damage caused after delivery',
          'Requests raised beyond the eligible return period',
        ]} />
        <PolicyP className="mt-4">
          Shipping charges, handling fees, or processing charges are non-refundable unless the product received is damaged or defective.
        </PolicyP>
      </PolicySection>

      <PolicySection id="damaged" title="7. Damaged or Defective Products">
        <PolicyP className="mb-3">
          If you receive a damaged, defective, or incorrect product, please contact our support team immediately with supporting photos or videos.
        </PolicyP>
        <PolicyP>Our team will review the issue and provide an appropriate resolution, which may include:</PolicyP>
        <PolicyList icon="bi-arrow-right-circle" items={[
          'Replacement',
          'Repair support',
          'Refund approval',
        ]} />
      </PolicySection>

      <PolicySection id="updates" title="8. Policy Updates">
        <PolicyP>
          Aquabrim reserves the right to modify, update, or revise this Refund Policy at any time without prior notice. Updated versions will be published on this page.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="9. Contact Us">
        <PolicyP className="mb-4">For any refund-related queries or assistance, please contact:</PolicyP>
        <PolicyContact />
      </PolicySection>
  </>
);
