import React from 'react';
import { PolicySection, PolicyP, PolicyList, PolicyContact } from '../common/PolicyKit';

export const nav = [
  { href: '#overview', label: '1. Overview' },
  { href: '#processing', label: '2. Order Processing' },
  { href: '#shipping', label: '3. Shipping & Delivery' },
  { href: '#timelines', label: '4. Delivery Timelines' },
  { href: '#charges', label: '5. Shipping Charges' },
  { href: '#tracking', label: '6. Tracking & Support' },
  { href: '#incorrect-info', label: '7. Incorrect Address' },
  { href: '#updates', label: '8. Policy Updates' },
  { href: '#contact', label: '9. Contact Us' },
];

export const fallbackBody = (
  <>
      <PolicySection id="overview" title="1. Overview">
        <PolicyP>
          Aquabrim is committed to delivering products safely and efficiently across India. All orders are processed and shipped through trusted courier partners and postal services to ensure timely delivery.
        </PolicyP>
        <PolicyP className="mt-3">Please review our shipping policy carefully before placing an order.</PolicyP>
      </PolicySection>

      <PolicySection id="processing" title="2. Order Processing">
        <PolicyP className="mb-3">Orders are generally processed and dispatched within 7 business days from:</PolicyP>
        <PolicyList items={[
          'Order confirmation, or',
          'Successful payment completion',
        ]} className="mb-4" />
        <PolicyP>Delivery timelines may vary depending on:</PolicyP>
        <PolicyList icon="bi-box-seam" items={[
          'Product availability',
          'Delivery location',
          'Courier partner operations',
          'Public holidays or unforeseen circumstances',
        ]} />
      </PolicySection>

      <PolicySection id="shipping" title="3. Shipping & Delivery">
        <PolicyP className="mb-3">
          All orders are shipped through registered domestic courier companies and/or speed post services.
        </PolicyP>
        <PolicyP className="mb-3">
          Products will be delivered to the shipping address provided by the customer during checkout. Customers are requested to ensure that all shipping details entered are accurate and complete.
        </PolicyP>
        <PolicyP>Once the order is shipped, delivery updates and confirmations may be shared through:</PolicyP>
        <PolicyList icon="bi-envelope" items={[
          'Email',
          'SMS',
          'Phone communication',
        ]} />
      </PolicySection>

      <PolicySection id="timelines" title="4. Delivery Timelines">
        <PolicyP className="mb-3">Estimated delivery timelines may vary based on:</PolicyP>
        <PolicyList icon="bi-arrow-right" items={[
          'City or region',
          'Courier partner serviceability',
          'Operational or logistical delays',
        ]} className="mb-4" />
        <PolicyP>While Aquabrim strives for timely delivery, we are not responsible for delays caused by:</PolicyP>
        <PolicyList icon="bi-x-circle" danger items={[
          'Courier companies',
          'Postal authorities',
          'Weather conditions',
          'Natural events or unforeseen disruptions',
        ]} />
      </PolicySection>

      <PolicySection id="charges" title="5. Shipping Charges">
        <PolicyP className="mb-3">
          Shipping charges, if applicable, will be displayed during checkout or order confirmation.
        </PolicyP>
        <PolicyP>Unless otherwise specified:</PolicyP>
        <PolicyList icon="bi-exclamation-triangle" warning items={[
          'Shipping and handling charges are non-refundable',
          'Additional delivery charges for remote locations may apply',
        ]} />
      </PolicySection>

      <PolicySection id="tracking" title="6. Order Tracking & Support">
        <PolicyP className="mb-4">
          For order tracking or shipping-related assistance, customers may contact our support team with their order details.
        </PolicyP>
        <div className="rounded-2xl bg-[#f0f7ff] p-4">
          <h6 className="mb-3 font-bold text-[#212529]"><i className="bi bi-headset mr-2 text-[#006CD0]"></i> Contact Support</h6>
          <p className="mb-2 text-[#6c757d]"><strong>Phone:</strong> +91 9560088791</p>
          <p className="mb-0 text-[#6c757d]"><strong>Email:</strong> <a href="mailto:save.water@aquabrim.com" className="text-[#006CD0] no-underline">save.water@aquabrim.com</a></p>
        </div>
      </PolicySection>

      <PolicySection id="incorrect-info" title="7. Incorrect Shipping Information">
        <PolicyP className="mb-3">Aquabrim shall not be responsible for delivery issues arising due to:</PolicyP>
        <PolicyList icon="bi-x-circle" danger items={[
          'Incorrect address details',
          'Incomplete contact information',
          'Customer unavailability during delivery',
        ]} className="mb-4" />
        <PolicyP>Customers are advised to verify shipping information before confirming the order.</PolicyP>
      </PolicySection>

      <PolicySection id="updates" title="8. Policy Updates">
        <PolicyP>
          Aquabrim reserves the right to modify or update this Shipping Policy at any time without prior notice. Updated versions will be available on this page.
        </PolicyP>
      </PolicySection>

      <PolicySection id="contact" title="9. Contact Us">
        <PolicyP className="mb-4">For shipping-related queries or support, please contact:</PolicyP>
        <PolicyContact />
      </PolicySection>
  </>
);
