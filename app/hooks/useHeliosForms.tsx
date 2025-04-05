import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef, useLayoutEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
  ApplicationFormData,
  ContactFormData,
  applicationFormSchema,
  contactFormSchema,
} from "../lib/zod";
import { gsap } from "gsap";
import { useLanguageContext } from "./useLanguageContext";

export function useHeliosForms(formType: "application" | "contact") {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useLanguageContext().language;
  const formRef = useRef<HTMLFormElement>(null);

  const customFormSchema =
    formType === "application" ? applicationFormSchema : contactFormSchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData & ContactFormData>({
    resolver: zodResolver(customFormSchema),
    mode: "onTouched",
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Get the reCAPTCHA token by executing it with an action name

  const onSubmit = async (formData: ApplicationFormData | ContactFormData) => {
    if (!executeRecaptcha) {
      console.log("executeRecaptcha not yet available");
      throw new Error("executeRecaptcha not yet available");
    }
    const token = await executeRecaptcha("submit");
    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData, token, formType }),
    });

    return response;
  };

  async function handleMutationSubmit(
    formData: ApplicationFormData | ContactFormData
  ) {
    await formSubmissionMutation.mutateAsync(formData);
  }

  const formSubmissionMutation = useMutation(onSubmit, {
    onSuccess: (response) => {
      const data = response.json(); //for future debugging
      setIsModalOpen(true);
      if (response.status === 200) {
        reset();
      }
    },
    onError: (error) => {
      console.log(error);
      throw new Error(error as string);
    },
  });

  useLayoutEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  return {
    register,
    handleMutationSubmit,
    handleSubmit,
    errors,
    isModalOpen,
    setIsModalOpen,
    language,
    formSubmissionMutation,
    formRef,
  };
}
