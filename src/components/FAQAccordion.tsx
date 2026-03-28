// FAQAccordion — placeholder component
// Will be connected in Phase 4 when FAQ data is extracted from markdown

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <details key={i} className="mb-4">
          <summary className="cursor-pointer font-semibold">
            {item.question}
          </summary>
          <p className="mt-2 text-sm">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
