import ServicePlan from "../components/ServicePlan";
import Footnotes from "../components/Footnotes";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";

export const metadata = {
  title: "Lorem | Ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit | Lorem ipsum dolor sit amet, consectetur adipiscing elit (TR)",
};

export default function Services() {
  const PAGE_INTRO_DATA = {
    title: {
      en: "Lorem Ipsum Services",
      tr: "Lorem Ipsum Hizmetleri",
    },
    description: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. (TR)",
    },
  };

  const footnotes = [
    {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. (TR)",
    },
  ];

  const SERVICE_PLANS = [
    {
      name: {
        en: "Lorem Basic",
        tr: "Lorem Temel",
      },
      price: "XAmount",
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (TR)",
      },
      features: [
        {
          en: "Lorem ipsum dolor sit amet",
          tr: "Lorem ipsum dolor sit amet (TR)",
        },
        {
          en: "Consectetur adipiscing elit",
          tr: "Consectetur adipiscing elit (TR)",
        },
        {
          en: "Sed do eiusmod tempor",
          tr: "Sed do eiusmod tempor (TR)",
        },
        {
          en: "Incididunt ut labore et dolore",
          tr: "Incididunt ut labore et dolore (TR)",
        },
        {
          en: "Magna aliqua",
          tr: "Magna aliqua (TR)",
        },
        {
          en: "Ut enim ad minim veniam",
          tr: "Ut enim ad minim veniam (TR)",
        },
      ],
    },
    {
      name: {
        en: "Lorem Plus",
        tr: "Lorem Standart",
      },
      price: "YAmount",
      description: {
        en: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        tr: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. (TR)",
      },
      features: [
        {
          en: "Quis nostrud exercitation ullamco",
          tr: "Quis nostrud exercitation ullamco (TR)",
        },
        {
          en: "Laboris nisi ut aliquip",
          tr: "Laboris nisi ut aliquip (TR)",
        },
        {
          en: "Ex ea commodo consequat",
          tr: "Ex ea commodo consequat (TR)",
        },
        {
          en: "Duis aute irure dolor",
          tr: "Duis aute irure dolor (TR)",
        },
        {
          en: "In reprehenderit in voluptate",
          tr: "In reprehenderit in voluptate (TR)",
        },
        {
          en: "Velit esse cillum dolore",
          tr: "Velit esse cillum dolore (TR)",
        },
        {
          en: "Eu fugiat nulla pariatur",
          tr: "Eu fugiat nulla pariatur (TR)",
        },
      ],
    },
    {
      name: {
        en: "Lorem Max",
        tr: "Lorem Full",
      },
      price: "ZAmount",
      description: {
        en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        tr: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. (TR)",
      },
      features: [
        {
          en: "Sunt in culpa qui officia",
          tr: "Sunt in culpa qui officia (TR)",
        },
        {
          en: "Deserunt mollit anim id est laborum",
          tr: "Deserunt mollit anim id est laborum (TR)",
        },
        {
          en: "Occaecat cupidatat non proident",
          tr: "Occaecat cupidatat non proident (TR)",
        },
        {
          en: "Sed ut perspiciatis unde omnis",
          tr: "Sed ut perspiciatis unde omnis (TR)",
        },
      ],
    },
  ];

  return (
    <PageStyler>
      <main className="flex flex-col transition-colors ease-linear duration-200">
        <div className="px-4 mx-auto lg:px-6">
          <PageIntroduction title={PAGE_INTRO_DATA.title} description={PAGE_INTRO_DATA.description} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            {SERVICE_PLANS.map((plan, index) => (
              <ServicePlan key={index} name={plan.name} description={plan.description} price={plan.price} features={plan.features} />
            ))}
          </div>
          <div className="col-span-1 max-w-sm lg:max-w-full mx-auto lg:mx-0 lg:col-span-3 pt-5 lg:pt-8">
            <Footnotes footnotes={footnotes} />
          </div>
        </div>
      </main>
    </PageStyler>
  );
}
