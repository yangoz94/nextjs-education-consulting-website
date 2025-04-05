// TO-DO: Refactor the component by creating new components for the form fields
"use client";
import Spinner from "./Spinner";
import PrimaryButton from "./PrimaryButton";
import BasicModal from "./BasicModal";
import { useHeliosForms } from "../hooks/useHeliosForms";

export default function ApplicationForm() {
  const { register, handleMutationSubmit, handleSubmit, errors, isModalOpen, setIsModalOpen, language, formSubmissionMutation, formRef } = useHeliosForms("application");

  return (
    <form
      className="bg-LIGHT_PRIMARY_BG_COLOR dark:bg-DARK_PRIMARY_BG_COLOR dark:text-white text-gray-700  rounded p-5 pt-0 flex flex-col gap-5 xl:grid xl:grid-cols-2 mx-auto md:w-2/3"
      onSubmit={handleSubmit(handleMutationSubmit)}
      ref={formRef}
      method="POST"
    >
      <div className="md:col-span-2 ">
        <h1 className="text-2xl  text-center xl:text-left font-bold first-letter:tracking-wide before:content-['①'] before:pr-2">
          {language === "en" ? "PROGRAM INTERESTS" : "PROGRAM TERCİHLERİNİZ"}
        </h1>
      </div>

      <div className="md:col-span-2">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="package">
          {language === "en"
            ? "We offer two different service packages for students who want to study in the US. Which service package interests you?"
            : "Amerika'da eğitim almak isteyen öğrenciler için iki farklı hizmet paketi sunuyoruz. Hangi hizmet paketi ilginizi çekiyor?"}
        </label>
        <select
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("package")}
          defaultValue={language === "en" ? "Select a package" : "Hizmet paketi seçiniz"}
        >
          <option disabled>{language === "en" ? "Select a package" : "Hizmet paketi seçiniz"}</option>
          <option value="Standard Package">{language === "en" ? "Standard Package" : "Standart Paket"}</option>
          <option value="Full Package">{language === "en" ? "Full Package" : "Full Paket"}</option>
          <option value="Undecided">{language === "en" ? "Undecided" : "Kararsızım"}</option>
        </select>
        {errors.package && (
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "You must pick one of the three options: Standard Package, Full Package or Undecided"
              : "Mevcut seçeneklerden birini seçmelisiniz: Standart Paket, Full Paket veya Kararsızım."}
          </p>
        )}
      </div>
      <div className="md:col-span-2  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="programType">
          {language === "en" ? "What level of education are you interested in pursuing in the US?" : "Amerika'da hangi düzeyde eğitim almak istiyorsunuz?"}
        </label>
        <select
          className="appearance-none block w-full  text-grey-darker outline-none   border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("programType")}
          defaultValue={language === "en" ? "Select a program type" : "Program tipi seçiniz"}
        >
          <option disabled>{language === "en" ? "Select a program type" : "Program tipi seçiniz"}</option>
          <option value="Language School">{language === "en" ? "Language School" : "Dil Okulu"}</option>
          <option value="MA/MS">{language === "en" ? "Master's Degree (MA/MS)" : "Yüksek Lisans (MA/MS)"}</option>
          <option value="PhD">{language === "en" ? "PhD" : "Doktora"}</option>
        </select>
        {errors.programType && (
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "You must pick one of the three options: Language School, Master's Degree (MA/MS) or PhD"
              : "Mevcut seçeneklerden birini seçmelisiniz: Dil Okulu, Yüksek Lisans (MA/MS) veya Doktora"}
          </p>
        )}
      </div>

      <div className="md:col-span-2  ">
        <label className="block   text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="whyUSA">
          {language === "en"
            ? "Tell us why you want to study in the US and what you expect from the US education system."
            : "Neden Amerika'da eğitim almak istiyorsunuz? Amerika'daki eğitim sistemiyle ilgili beklentileriniz nelerdir?"}
        </label>
        <textarea
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 h-48 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("whyUSA")}
          placeholder={
            language === "en"
              ? "The primary reason why I want to study in the US is that I want to have a global perspective. I want to study in a diverse environment and meet people from different cultures. It is very important for me to have a competitive education on a global level."
              : "Amerika'da eğitim almak istememin temel sebebi, küresel bir bakış açısına sahip olmak istemem. Farklı kültürlerden insanlarla tanışmak ve çeşitlilik içeren bir ortamda okumak istiyorum. Küresel düzeyde rekabetçi bir eğitim almak benim için çok önemli."
          }
        />
        {errors.whyUSA && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>

      <div className="md:col-span-2  ">
        <label className="block   text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="academicInterests">
          {language === "en"
            ? "Tell us about your academic interests and career goals. What are your expectations from the university you will attend?"
            : "Akademik ilgi alanlarınız ve kariyer hedefleriniz nelerdir? Okumak istediğiniz üniversiteyle ilgili beklentileriniz nelerdir?"}
        </label>
        <textarea
          className="appearance-none block w-full text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 h-48 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("academicInterests")}
          placeholder={
            language === "en"
              ? "I am interested in pursuing a master's degree in economics. I want to work in the financial sector in the future. I want to study in a university that is is located in an urban area, has a strong alumni network and a good career center."
              : "Ekonomi alanında yüksek lisans yapmak istiyorum. Gelecekte finans sektöründe çalışmak istiyorum. Şehir merkezinde bulunan, güçlü bir mezun ağına ve kariyer merkezine sahip bir üniversitede okumak istiyorum."
          }
        />
        {errors.academicInterests && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>
      <div className="md:col-span-2">
        <h1 className="text-2xl text-center xl:text-left  font-bold   tracking-wide before:content-['②'] before:pr-2">
          {language === "en" ? "PERSONAL INFORMATION" : "KİŞİSEL BİLGİLER"}
        </h1>
      </div>
      <div className="md:w-full">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*'] " htmlFor="fullName">
          {language === "en" ? "Full name" : "Adınız Soyadınız"}
        </label>
        <input
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("fullName")}
          type="text"
          placeholder="John Doe"
        />
        {errors.fullName && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>

      <div className="md:w-full  ">
        <label className="block   text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="email">
          {language === "en" ? "Email address" : "Email Adresiniz"}
        </label>
        <input
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("email")}
          type="text"
          placeholder="johndoe@gmail.com"
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{language === "en" ? errors.email.message : "Geçersiz email"}</p>}
      </div>

      <div className="md:w-full  ">
        <label className="block   text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="phone">
          {language === "en" ? "Phone number" : "Telefon Numaranız"}
        </label>
        <input
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3  bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("phone")}
          type="text"
          placeholder="5301234567"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">
            {language === "en"
              ? "This field must contain a minimum of 10 digits. Only numeric characters, and (+) symbol are allowed"
              : "Bu alan en az 10 haneden oluşmalıdır. Sadece rakamlara ve (+) sembolüne izin verilir"}
          </p>
        )}
      </div>

      <div className="md:w-full  ">
        <label className="block   text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="citizenship">
          {language === "en" ? "Country of citizenship" : "Vatandaşı Olduğunuz Ülke "}
        </label>
        <input
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("citizenship")}
          type="text"
          placeholder={language === "en" ? "Turkey" : "Türkiye"}
        />
        {errors.citizenship && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>

      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold text-center xl:text-left tracking-wide before:content-['③'] before:pr-2">
          {language === "en" ? "EDUCATION AND WORK EXPERIENCE" : "AKADEMİK VE MESLEKİ GEÇMİŞ"}
        </h1>
      </div>
      <div className="md:col-span-2">
        <label className="block   text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="university">
          {language === "en"
            ? "The university you graduated from (If you are a student, please write the university you are currently attending)"
            : "Mezun olduğunuz üniversite (Eğer öğrenci iseniz lütfen şu an okuduğunuz üniversiteyi yazınız) "}
        </label>
        <input
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("university")}
          type="text"
          placeholder={language === "en" ? "Yildiz Technical University" : "Yıldız Teknik Üniversitesi"}
        />
        {errors.university && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>
      <div className="md:w-full  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="major">
          {language === "en" ? "Major(s) you have studied" : "Okuduğunuz bölüm(ler)"}
        </label>
        <input
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("major")}
          type="text"
          placeholder={language === "en" ? "Economics" : "Ekonomi"}
        />
        {errors.major && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>

      <div className="md:w-full  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="gpa">
          {language === "en" ? "GPA out of 4.0" : "Not ortalamanız (4.0 üzerinden)"}
        </label>
        <input
          className="appearance-none outline-none border-none block w-full  text-grey-darker border border-red rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("gpa")}
          type="number"
          step={0.01}
          min={1.8}
          max={4.0}
          placeholder={language === "en" ? "3.63" : "3.63"}
        />
        {errors.gpa && <p className="text-sm text-red-500 mt-1">{language === "en" ? "Invalid GPA" : "Geçersiz Not Ortalaması"}</p>}
      </div>

      <div className="md:col-span-2  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 :content-['*']" htmlFor="extracurricular">
          {language === "en"
            ? "Any extracurricular activities you have participated in during your education"
            : "Eğitim sürecinizde katıldığınız ders-dışı faaliyetler/programlar/projeler"}
        </label>
        <textarea
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 h-48 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("extracurricular")}
          placeholder={
            language === "en"
              ? "I was the president of Athletics Club in my university for two semesters. I also studied abroad with Erasmus exchange program in Berlin for 5 months and attended work and travel program in Denver,Colorado for 4 months... "
              : "Üniversitemde Spor kulubü külübü başkanıydım. Aynı zamanda, Erasmus öğrenci programı kapsamında Berlin'de 5 ay öğrenim gördüm. Ayrıca, Work and Travel programı ile Denver,Colorado'da 3 ay bulundum..."
          }
        />
        {errors.extracurricular && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>
      <div className="md:col-span-2  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 :content-['*']" htmlFor="workExperience">
          {language === "en"
            ? "A brief summary of your professional experience (If you do not have any professional experience, please write N/A)"
            : "İş deneyiminizin kısa bir özeti (Eğer mesleki tecrübeniz yoksa lütfen N/A yazınız)"}
        </label>
        <textarea
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 h-48 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("workExperience")}
          placeholder={
            language === "en"
              ? "Following my graduation from university, I worked as a junior software engineer in a medium-sized company for three years. Thereafter, I made a seamless transition to a multinational corporation where, for the past two years, I have continued to excel as a ..."
              : "Üniversiteden mezun olduktan sonra, üç yıl boyunca orta büyüklükte bir şirkette birinci seviye yazılım mühendisi olarak çalıştım. Ardından, çok uluslu bir şirkete katıldım ve son iki yıldır  ... "
          }
        />
        {errors.workExperience && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>

      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold text-center xl:text-left tracking-wide before:content-['④'] before:pr-2">
          {language === "en" ? "ENGLISH PROFICIENCY" : "İNGİLİZCE SEVİYENİZ"}
        </h1>
      </div>

      <div className="md:col-span-2  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="englishProficiency">
          {language === "en"
            ? "How would you rate your English proficiency on a scale of 1 to 10? (1-LOWEST, 10-HIGHEST)"
            : "İngilizcenizi 1-10 arasında nasıl değerlendirirsiniz? (1-EN DÜŞÜK, 10-EN YÜKSEK)"}
        </label>
        <select
          {...register("englishProficiency")}
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          defaultValue={language === "en" ? "Select a score out of 10" : "10 üzerinden bir sayı seçiniz"}
        >
          <option disabled>{language === "en" ? "Select a score out of 10" : "10 üzerinden bir sayı seçiniz"}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        {errors.englishProficiency && (
          <p className="text-sm text-red-500 mt-1">{language === "en" ? "You must pick a value from 1 to 10" : "1 ile 10 arasında bir değer seçmelisiniz"}</p>
        )}
      </div>

      <div className="md:col-span-2  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="toeflOrIelts">
          {language === "en"
            ? "Do you have a TOEFL or IELTS test result that is less than 2 years old? If so, please indicate the test and your score. If not, please write N/A"
            : "2 yıldan daha eski olmayan bir TOEFL veya IELTS testi sonucunuz var mı? Eğer varsa, lütfen testi ve puanınızı belirtiniz. Eğer yoksa, lütfen N/A yazınız"}
        </label>
        <textarea
          className="appearance-none block w-full  text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 h-48 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("toeflIelts")}
          placeholder={language === "en" ? "TOEFL - Reading:23, Listening: 18, Speaking:20, Writing: 21" : "TOEFL - Okuma:23, Dinleme: 18, Konuşma:20, Yazma: 21"}
        />
        {errors.toeflIelts && <p className="text-sm text-red-500 mt-1">{language === "en" ? "This field cannot be left blank" : "Bu kısım boş bırakılamaz"}</p>}
      </div>

      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold text-center xl:text-left  tracking-wide before:content-['⑤'] before:pr-2">GRE/GMAT</h1>
      </div>

      <div className="md:col-span-2  ">
        <label className="block text-justify tracking-wide text-grey-darker   mb-2 after:content-['*']" htmlFor="gre">
          {language === "en"
            ? "Are you familiar with GRE/GMAT exams? If not, don't worry, we will inform you."
            : "GRE/GMAT sınavları hakkında bilginiz var mı? Eğer yoksa, endişelenmeyin, size bilgi vereceğiz"}
        </label>
        <select
          className="appearance-none block w-full text-grey-darker outline-none border-none  rounded py-3 px-4 mb-3 bg-white dark:bg-LIGHT_SECONDARY_BG_COLOR dark:text-black"
          {...register("gre")}
          defaultValue={language === "en" ? "Select one of the options" : "Seçeneklerden birini seçiniz"}
        >
          <option disabled>{language === "en" ? "Select one of the options" : "Seçeneklerden birini seçiniz"}</option>
          <option value="Yes">{language === "en" ? "Yes" : "Evet"}</option>
          <option value="No">{language === "en" ? "No" : "Hayır"}</option>
        </select>
        {errors.gre && (
          <p className="text-sm text-red-500 mt-1">
            {language === "en" ? "You must pick one of the two options: Yes or No" : "İki seçenekten birini seçmelisiniz: Evet veya Hayır"}
          </p>
        )}
      </div>
      {formSubmissionMutation.isLoading ? (
        <div className="col-span-2">
          <Spinner />
        </div>
      ) : (
        <div className="col-span-2">
          <PrimaryButton type="submit" label={{ en: "Submit", tr: "Gönder" }} className="w-full" />
        </div>
      )}
      <BasicModal
        open={isModalOpen}
        header={{ success: "🥳", failure: "😞" }}
        onClose={() => setIsModalOpen(false)}
        formStatus={formSubmissionMutation.data?.status}
        output={
          language === "en"
            ? {
                success: "Your application has been submitted succesfully!\nWe will be in touch shortly.",
                failure: "There was an error submitting your application.\nPlease try again later...",
              }
            : {
                success: "Başvurunuz bize ulaştı!\nEn kısa sürede başvurunuzu inceleyip sizinle iletişime geçeceğiz.",
                failure: "Maalesef başvurunuzu gönderirken bir hata oluştu.\nLütfen daha sonra tekrar deneyiniz...",
              }
        }
      />
    </form>
  );
}
