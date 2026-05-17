export interface FaqItem {
  id: number;
  category: 'products' | 'installation' | 'usage' | 'troubleshooting' | 'warranty';
  categoryLabel: string;
  question: string;
  answer: string;
}

export const faq_data: FaqItem[] = [
  {
    id: 1,
    category: 'products',
    categoryLabel: 'Products',
    question: 'What is Aquabrim and what does it do?',
    answer: 'Aquabrim provides smart water level controllers that automatically manage water in your tanks, prevent overflow, protect motors from dry-run, and help save water and electricity.'
  },
  {
    id: 2,
    category: 'products',
    categoryLabel: 'Products',
    question: 'How does Aquabrim water level controller work?',
    answer: 'The system uses magnetic float sensors placed in the overhead tank and underground sump to continuously track water levels. It turns the pump motor ON automatically when the overhead tank is low (and sump has water) and switches it OFF when the tank is full, preventing overflow.'
  },
  {
    id: 3,
    category: 'products',
    categoryLabel: 'Products',
    question: 'Which tanks are compatible with Aquabrim controllers?',
    answer: 'Aquabrim controllers are compatible with all types of tanks, including plastic (Sinthex), concrete, stainless steel, and underground sumps or open wells.'
  },
  {
    id: 4,
    category: 'products',
    categoryLabel: 'Products',
    question: 'Is Aquabrim suitable for both residential and commercial use?',
    answer: 'Yes! We offer optimized domestic systems for homes/apartments, and heavy-duty three-phase industrial controllers for factories, commercial complexes, and community buildings.'
  },
  {
    id: 5,
    category: 'usage',
    categoryLabel: 'Usage',
    question: 'Does it work during power cuts?',
    answer: 'The controller itself runs on standard power. In case of a power cut, it safely turns off the motor. Once power is restored, it resumes its automatic monitoring cycle and starts/stops based on tank sensor readings.'
  },
  {
    id: 6,
    category: 'products',
    categoryLabel: 'Products',
    question: 'Will it protect my motor from dry-run and single phasing?',
    answer: 'Yes, absolutely. Aquabrim controllers feature built-in dry-run protection that shuts down the pump instantly if the sump runs out of water. Our industrial models also include single-phasing and overload protection.'
  },
  {
    id: 7,
    category: 'installation',
    categoryLabel: 'Installation',
    question: 'How is the controller installed?',
    answer: 'Installation is handled by our certified technicians. It involves mounting the wall unit near your pump starter, running sensor wires to the overhead tank and underground sump, and placing our non-corrosive magnetic float sensors inside the tanks.'
  },
  {
    id: 8,
    category: 'warranty',
    categoryLabel: 'Warranty & Support',
    question: 'What is the warranty on Aquabrim products?',
    answer: 'All Aquabrim controllers come with a 1-year manufacturer warranty covering any functional defects. We also offer extended maintenance plans for hassle-free operations.'
  },
  {
    id: 9,
    category: 'warranty',
    categoryLabel: 'Warranty & Support',
    question: 'How can I get technical support?',
    answer: 'You can contact our support team via telephone at +91 95600 88791, email us, or raise a ticket on our Contact Support portal. Our standard response time is under 24 hours.'
  },
  {
    id: 10,
    category: 'installation',
    categoryLabel: 'Installation',
    question: 'Is any special plumbing needed for installation?',
    answer: 'No special plumbing is required. The system works with your existing piping. The sensors are placed inside the tanks without disrupting any piping structure.'
  },
  {
    id: 11,
    category: 'troubleshooting',
    categoryLabel: 'Troubleshooting',
    question: 'What should I do if the motor does not turn ON automatically?',
    answer: 'First, check if the sump water level is sufficient (the dry-run protection might be active). Next, ensure the system is set to Auto Mode rather than Manual or Off. If the problem persists, reach out to our service line.'
  },
  {
    id: 12,
    category: 'usage',
    categoryLabel: 'Usage',
    question: 'How much electricity does the Aquabrim controller consume?',
    answer: 'Our controllers run on extremely low power (typically less than 2-3 Watts in standby state). By preventing pump overflow and optimizing running hours, it actually saves up to 20-30% on your monthly pump electricity bill.'
  }
];
