import JsonLd from "./json-ld";

type Faq = { question: string; answer: string };

export default function FaqSection({
  faqs,
  title = "Domande frequenti",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="container-site py-16 sm:py-20">
      <JsonLd data={data} />
      <div className="max-w-3xl">
        <p className="eyebrow">Risposte rapide</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-sage-900">
          {title}
        </h2>
      </div>
      <dl className="mt-8 max-w-3xl divide-y divide-sage-900/5">
        {faqs.map((f) => (
          <div key={f.question} className="py-5">
            <dt className="font-semibold text-ink">{f.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">
              {f.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
