import PageStyler from "../components/PageStyler";
import ApplicationForm from "../components/ApplicationForm";
import RecaptchaProvider from "../contexts/RecaptchaProvider";
import PageIntroduction from "../components/PageIntroduction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | Başvur",
  description: "Apply | Başvur",
};

export default function Apply() {
  return (
    <RecaptchaProvider>
      <PageStyler>
        <main>
          <PageIntroduction
            title={{
              en: "Application Form",
              tr: "Başvuru Formu",
            }}
            description={{
              en: "Please fill out the form below. It consists of 5 parts and will take approximately 10 minutes.",
              tr: "Lütfen aşağıdaki formu doldurunuz. Form 5 kısımdan oluşmakta olup, yaklaşık 10 dakikanızı alacaktır.",
            }}
          />
          <ApplicationForm />
        </main>
      </PageStyler>
    </RecaptchaProvider>
  );
}
