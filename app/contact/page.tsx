import PageStyler from "../components/PageStyler";
import ContactForm from "../components/ContactForm";
import PageIntroduction from "../components/PageIntroduction";
import RecaptchaProvider from "../contexts/RecaptchaProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | İletişim",
  description: "Contact us | Bize ulaşın",
};

export default function Contact() {
  const CONTACT_INTRODUCTION_DATA = {
    title: {
      en: "Contact Form",
      tr: "İletişim Formu",
    },
    description: {
      en: "Please fill out the form below and we will get back to you as soon as possible.",
      tr: "Aşağıdaki formu doldurup bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.",
    },
  };
  return (
    <RecaptchaProvider>
      <PageStyler>
        <main className="max-h-[calc(100dvh - 220px)]">
          <PageIntroduction
            title={CONTACT_INTRODUCTION_DATA.title}
            description={CONTACT_INTRODUCTION_DATA.description}
          />
          <ContactForm />
        </main>
      </PageStyler>
    </RecaptchaProvider>
  );
}
