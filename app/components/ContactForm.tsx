"use client";
import React from "react";
import BasicModal from "./BasicModal";
import PrimaryButton from "./PrimaryButton";
import Spinner from "./Spinner";
import { useHeliosForms } from "../hooks/useHeliosForms";

export default function ContactForm() {
  const {
    register,
    handleMutationSubmit,
    handleSubmit,
    errors,
    isModalOpen,
    setIsModalOpen,
    formSubmissionMutation,
    language,
    formRef,
  } = useHeliosForms("contact");

  return (
    <form
      onSubmit={handleSubmit(handleMutationSubmit)}
      className="bg-LIGHT_PRIMARY_BG_COLOR dark:bg-DARK_PRIMARY_BG_COLOR dark:text-white text-gray-700 rounded flex flex-col p-5 pt-0 gap-5 mx-auto md:grid md:grid-cols-2 md:w-2/3"
      ref={formRef}
      method="POST"
    >
      <div className="col-span-2">
        <label
          htmlFor="fullName"
          className="block tracking-wide text-grey-darker mb-2 after:content-['*']"
        >
          {language === "en" ? "Full Name" : "Adınız Soyadınız"}
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4  dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
        />
        {errors.fullName && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "Your full name cannot be blank and cannot contain any numeric characters"
              : "Bu alan boş bırakılamaz ve herhangi bir numerik karakter içeremez"}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block tracking-wide text-grey-darker mb-2 after:content-['*']"
        >
          {language === "en" ? "Email" : "Email Adresiniz"}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4  dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
        />
        {errors.email && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en" ? errors.email.message : "Geçersiz email"}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block tracking-wide text-grey-darker mb-2 after:content-['*']"
        >
          {language === "en" ? "Phone Number" : "Telefon Numaranız"}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")} // Register the input with React Hook Form
          className="appearance-none block w-full bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4  dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
        />
        {errors.phone && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "Your contact number must contain a minimum of 10 digits. Only numeric characters, and (+) symbol are allowed"
              : "Telefon numaraniz en az 10 haneden oluşmalıdır. Sadece rakamlara ve (+) sembolüne izin verilir"}
          </p>
        )}
      </div>
      <div className="col-span-2">
        <label
          htmlFor="question"
          className="block tracking-wide text-grey-darker mb-2 after:content-['*']"
        >
          {language === "en" ? "Question" : "Sorunuz"}
        </label>
        <textarea
          id="question"
          {...register("question")} // Register the input with React Hook Form
          className="appearance-none block w-full h-48 bg-grey-lighter text-grey-darker outline-none border-none  rounded py-3 px-4  dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
        />
        {errors.question && ( // Show the error message if any
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? errors.question.message?.replace(
                  "String",
                  "Your question/inquiry"
                )
              : "Sorunuz/talebiniz en az 50 karakter uzunluğunda olmalı"}
          </p>
        )}
      </div>
      <div className="col-span-2">
        {formSubmissionMutation.isLoading ? (
          <Spinner />
        ) : (
          <PrimaryButton
            type="submit"
            label={{ en: "Submit", tr: "Gönder" }}
            className="w-full"
          />
        )}
      </div>
      <BasicModal
        open={isModalOpen}
        header={{ success: "🥳", failure: "😞" }}
        onClose={() => setIsModalOpen(false)}
        formStatus={formSubmissionMutation.data?.status}
        output={
          language === "en"
            ? {
                success:
                  "Your form has been submitted succesfully!\nWe will be in touch shortly.",
                failure:
                  "There was an error submitting your form.\nPlease try again later...",
              }
            : {
                success:
                  "Formunuz bize ulaştı!\nEn kısa sürede size geri dönüş sağlayacağız.",
                failure:
                  "Maalesef formunuzu gönderirken bir hata oluştu.\nLütfen daha sonra tekrar deneyiniz...",
              }
        }
      />
    </form>
  );
}
