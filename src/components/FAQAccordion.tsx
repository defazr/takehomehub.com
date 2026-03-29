import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { FAQ } from "@/lib/markdown";

export default function FAQAccordion({ faq }: { faq: FAQ[] }) {
  if (faq.length === 0) return null;

  return (
    <div className="not-prose mt-10 mb-8">
      <h2 className="text-2xl font-semibold tracking-tight mb-5">Frequently Asked Questions</h2>
      <Accordion>
        {faq.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
