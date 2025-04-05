import sgMail from "@sendgrid/mail";
import { ApplicationFormData, ContactFormData } from "../lib/zod";

// Confirmation email to user for Both Contact and Application Forms
export async function sendEmailToUser(
  formData: ContactFormData,
  formType: "contact" | "application"
): Promise<boolean> {
  let emailWithoutSpaces;
  let capitalizedFirstName;
  try {
    const firstName = formData.fullName.trim().split(" ")[0]; // Extract the first name
    capitalizedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    emailWithoutSpaces = formData.email.replace(/\s/g, "");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to handle user's name and email");
  }

  const msg_to_user = {
    to: emailWithoutSpaces, // Change to your recipient
    from: "no-reply@heliosadmissions.com", // Change to your verified sender
    subject: `${
      formType.charAt(0).toUpperCase() + formType.slice(1)
    } Form Submission`,
    text: `Merhaba ${capitalizedFirstName},\n\n${
      formType === "contact" ? "Mesajınızı" : "Başvurunuzu"
    } aldık. En kısa sürede size geri dönüş yapacağız!\n\nSevgiler,\nHelios Admissions\n\nEnglish Translation:Hello ${capitalizedFirstName},\n\nWe have received your ${
      formType === "contact" ? "message" : "application"
    }. We will get back to you as soon as possible!\n\nBest,\nHelios Admissions\n\n`,
    html: `<div style="border border-bottom:2px solid #FF0000; padding-bottom: 10px;">
      <p>Merhaba ${capitalizedFirstName},</p>
      <p style="margin-bottom: 10px;">${
        formType === "contact" ? "Mesajınızı" : "Başvurunuzu"
      } aldık. En kısa sürede size geri dönüş yapacağız!</p>
      <p style="margin-bottom: 10px;">Sevgiler,<br>Helios Admissions</p>
    </div>
    <div style="padding-top: 5px;">
      <p>Hello,</p>
      <p>We have received your ${
        formType === "contact" ? "message" : "application"
      }. We will get back to you as soon as possible!</p>
      <p>Best,<br>Helios Admissions</p>
    </div>
    <br>`,
  };

  return sendEmail(msg_to_user, "user");
}

// Confirmation Email to Helios Team with full form details for Contact Form only
export async function sendContactEmailToHelios(
  formData: ContactFormData
): Promise<boolean> {
  //send the user's form details to Helios Admissions team.
  const msg_to_helios_team = {
    to: "info@heliosadmissions.com",
    from: "no-reply@heliosadmissions.com",
    subject: `${formData.fullName} - Helios Admissions İletişim Formu`,
    text: `Selamlar Helios Admissions Ekibi,\n\nYeni bir öğrenci iletişim formunu doldurdu. Kullanıcının form bilgileri aşagidaki gibidir;\n\n
      Adı: ${formData.fullName}\n\n
      Emaili: ${formData.email}\n\n
      Telefonu: ${formData.phone}\n\n
      Mesajı: ${formData.question}\n\n
      Bu formun doldurulmasiyla birlikte kullaniciya otomatik olarak bir email gönderildi ve aynı zamanda form veri tabanına da kaydedildi`,
    html:
      `<div>Selamlar Helios Admissions Ekibi, <br><br> Yeni bir öğrenci iletişim formunu doldurdu. Kullanicinin form bilgileri aşagidaki gibidir;<br><br> </div>` +
      `Adi: ${formData.fullName} <br><br>` +
      `Emaili: ${formData.email} <br><br>` +
      `Telefonu: ${formData.phone} <br><br>` +
      `Mesaji: ${formData.question} <br><br>` +
      `Bu formun doldurulmasiyla birlikte kullaniciya otomatik olarak bir email gönderildi ve aynı zamanda form veri tabanına da kaydedildi.</div>`,
  };

  return sendEmail(msg_to_helios_team, "helios");
}

// Confirmation Email to Helios Team with full form details for Application Form only
export async function sendApplicationEmailToHelios(
  formData: ApplicationFormData
): Promise<boolean> {
  const msg_to_helios_team = {
    to: "info@heliosadmissions.com",
    from: "no-reply@heliosadmissions.com",
    subject: `${formData.fullName} - Helios Admissions Başvuru Formu`,
    text: `Selamlar Helios Admissions Ekibi,\n\nYeni bir öğrenci başvuru formunu doldurdu. Kullanıcının form bilgileri aşagidaki gibidir;\n\n
      Adı: ${formData.fullName}\n\n
      Emaili: ${formData.email}\n\n
      Telefonu: ${formData.phone}\n\n
      Vatandasligi: ${formData.citizenship}\n\n
      Universitesi: ${formData.university}\n\n
      Bolumu: ${formData.major}\n\n
      GPA: ${formData.gpa}\n\n
      Ekstra Aktiviteleri: ${formData.extracurricular}\n\n
      Ingilizce Seviyesi: ${formData.englishProficiency}\n\n
      TOEFL/IELTS: ${formData.toeflIelts}\n\n
      GRE: ${formData.gre}\n\n
      Ilgilendigi Paket: ${formData.package}\n\n
      Program Tipi: ${formData.programType}\n\n
      ABD Motivasyonu: ${formData.whyUSA}\n\n
      Akademik olarak Ilgi Alanlari: ${formData.academicInterests}\n\n

      Bu formun doldurulmasiyla birlikte kullaniciya otomatik olarak bir email gönderildi ve aynı zamanda form veri tabanına da kaydedildi`,
    html:
      `<div>Selamlar Helios Admissions Ekibi, <br><br> Yeni bir öğrenci başvuru formunu doldurdu. Kullanicinin form bilgileri aşagidaki gibidir;<br><br> </div>` +
      `Adi: ${formData.fullName} <br><br>` +
      `Emaili: ${formData.email} <br><br>` +
      `Telefonu: ${formData.phone} <br><br>` +
      `Vatandasligi: ${formData.citizenship} <br><br>` +
      `Universitesi: ${formData.university} <br><br>` +
      `Bolumu: ${formData.major} <br><br>` +
      `GPA: ${formData.gpa} <br><br>` +
      `Ekstra Aktiviteleri: ${formData.extracurricular} <br><br>` +
      `Ingilizce Seviyesi: ${formData.englishProficiency} <br><br>` +
      `TOEFL/IELTS: ${formData.toeflIelts} <br><br>` +
      `GRE: ${formData.gre} <br><br>` +
      `Ilgilendigi Paket: ${formData.package} <br><br>` +
      `Program Tipi: ${formData.programType} <br><br>` +
      `ABD Motivasyonu: ${formData.whyUSA} <br><br>` +
      `Akademik olarak Ilgi Alanlari: ${formData.academicInterests} <br><br>` +
      `Bu formun doldurulmasiyla birlikte kullaniciya otomatik olarak bir email gönderildi ve aynı zamanda form veri tabanına da kaydedildi.</div>`,
  };

  return sendEmail(msg_to_helios_team, "helios");
}

// helper function to send emails
async function sendEmail(
  msg: {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
  },
  to: "user" | "helios"
): Promise<boolean> {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
    await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);
    throw new Error(
      `Error sending email to ${to}! Error message: ${error.message}`
    );
  }
  return true;
}
