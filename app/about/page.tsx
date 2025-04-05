import Cofounder from "../components/Cofounder";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hakkımızda",
  description: "About us | Hakkımızda",
};

export default function About() {
  const COFOUNDERS = [
    {
      name: "Lorem Ipsum",
      title: {
        en: "Co-founder",
        tr: "Kurucu",
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      },
      imagePath: "/placeholder1.webp",
      imageAlt: "Placeholder image of a co-founder",
    },
    {
      name: "Dolor Sit",
      title: "Co-founder",
      description: {
        en: "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi.",
        tr: "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi.",
      },
      imagePath: "/placeholder2.webp",
      imageAlt: "Placeholder image of a co-founder",
    },
  ];

  const ABOUT_PAGE_INTRODUCTION = {
    title: {
      en: "Our Team",
      tr: "Ekibimiz",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    },
  };

  return (
    <PageStyler>
      <section id="our-team" className="h-full px-5 lg:pb-8 pb-5 min-h-[calc(100svh-12rem)]">
        <PageIntroduction title={ABOUT_PAGE_INTRODUCTION.title} description={ABOUT_PAGE_INTRODUCTION.description} />
        <div className="flex flex-col justify-center gap-5 lg:gap-10">
          {COFOUNDERS.map((cofounder, index) => (
            <Cofounder key={cofounder.name} name={cofounder.name} description={cofounder.description} imagePath={cofounder.imagePath} imageAlt={cofounder.imageAlt} index={index} />
          ))}
        </div>
      </section>
    </PageStyler>
  );
}
