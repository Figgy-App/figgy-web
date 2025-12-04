
import ContactForm from "../components/contact-form";
import CtaEmailBanner from "../components/cta-email-banner";
import FaqAccordion from "../components/faq-accordion";

const faqItems = [
  {
    question: "What is Figgy?",
    answer: "Figgy is a simple, easy-to-use plant care app designed to help you look after both indoor and outdoor plants. It works like a smart plant care guide, giving clear steps for watering, lighting, fertilizing, and overall plant health. Whether you’re starting with an all in one house plant starter kit, a plant care kit or managing a full garden, Figgy makes care easier. With built-in identification tools similar to the best plant identification app options, Figgy helps every plant parent understand exactly what their plant needs.",
  },
  {
    question: "How do I use Figgy to get advice?",
    answer: "Take a photo of your plant and Figgy will analyze it to give tailored tips. It can help with common issues, basic sick plant diagnosis, and everyday house plant care needs.",
  },
  {
    question: "What types of plants can Figgy help me with?",
    answer: "Figgy supports most indoor and outdoor plants — from beginner plants in a houseplant starter kit to specific varieties like pothos plant care indoor, monstera plant care indoor, jade plant care indoor, and even hibiscus plant care outdoor.",
  },
  {
    question: "How accurate is Figgy's advice?",
    answer: "Figgy combines plant identification with health checks to give reliable suggestions. While no plant health app is perfect, it offers accurate guidance similar to the best plant care app options available today.",
  },
  {
    question: "How do the calendar reminders work?",
    answer: "Figgy sends simple care reminders based on your plant’s needs, helping you stay consistent with watering, repotting, and seasonal indoor plant care.",
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