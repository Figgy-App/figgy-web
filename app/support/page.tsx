
import ContactForm from "../components/contact-form";
import CtaEmailBanner from "../components/cta-email-banner";
import FaqAccordion from "../components/faq-accordion";

const faqItems = [
  {
    question: "What is Figgy?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
  },
  {
    question: "How do I use Figgy to get advice?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
  },
  {
    question: "What types of plants can Figgy help me with?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
  },
  {
    question: "How accurate is Figgy's advice?",
    answer: "Figgy's advice is generated from a massive database of verified horticultural data, academic care guides, and common best practices. We strive for high accuracy and precision in every answer. However, since the AI can't physically see your plant, we always recommend providing as much detail as possible in your question to get the best diagnostic results!",
  },
  {
    question: "What is the Monthly Photo Check-up feature?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
  },
  {
    question: "How do the calendar of reminders work?",
    answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
  },
];

export default function SupportPage() {
  return (
    <main>
      <ContactForm />
      <FaqAccordion items={faqItems} />
      <CtaEmailBanner />
    </main>
  );
}