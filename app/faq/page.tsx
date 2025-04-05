import QA from "../components/QA";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | SSS",
  description: "Frequently Asked Questions | Sıkça Sorulan Sorular",
};

export default function FAQ() {
  const FAQ_PAGE_INTRO = {
    title: {
      en: "Lorem Ipsum Dolor Sit Amet",
      tr: "Lorem Ipsum Dolor Sit Amet (TR)",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (TR)",
    },
  };

  const FAQ_DATA = [
    {
      question: {
        en: "Lorem ipsum dolor sit amet?",
        tr: "Lorem ipsum dolor sit amet? (TR)",
      },
      answer: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.",
        tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor. (TR)",
      },
    },
    {
      question: {
        en: "Sed ut perspiciatis unde omnis iste natus error sit?",
        tr: "Sed ut perspiciatis unde omnis iste natus error sit? (TR)",
      },
      answer: {
        en: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        tr: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. (TR)",
      },
    },
    {
      question: {
        en: "Ut enim ad minima veniam, quis nostrum exercitationem?",
        tr: "Ut enim ad minima veniam, quis nostrum exercitationem? (TR)",
      },
      answer: {
        en: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Contact us via email: lorem@ipsum`,
        tr: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Bize şu adresten ulaşabilirsiniz: lorem@ipsum`,
      },
    },
  ];

  return (
    <PageStyler>
      <main className="flex flex-col items-center">
        <PageIntroduction title={FAQ_PAGE_INTRO.title} description={FAQ_PAGE_INTRO.description} />
        <div className="w-full lg:max-w-5xl max-w-2xl pb-5">
          {FAQ_DATA.map((faq, index) => (
            <QA key={index + 1} question={faq.question} answer={faq.answer} order={index + 1} />
          ))}
        </div>
      </main>
    </PageStyler>
  );
}
