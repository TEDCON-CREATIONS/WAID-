import { motion } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does WAID know how busy a place is?",
    answer: "We use a combination of real-time user check-ins, location data (with permission), and venue partner integrations to provide accurate, live crowd levels."
  },
  {
    question: "Is WAID free to use?",
    answer: "Yes, the core WAID app is completely free for users. We may introduce premium features in the future, but discovering where the night is happening will always be free."
  },
  {
    question: "What cities is WAID currently in?",
    answer: "We are currently in beta in New York, Miami, and Los Angeles. We're expanding rapidly, so join the waitlist to be notified when we launch in your city."
  },
  {
    question: "I own a venue. How can I get listed?",
    answer: "We'd love to partner with you. Fill out the 'Request a Demo' form in the For Venues section, and our team will reach out to get you set up with a premium listing."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index}`} className="glass-panel rounded-2xl overflow-hidden border border-white/10">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-white/5 transition-colors group [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                  <ChevronDown className="text-white/50 transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-white/60 px-6 pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
