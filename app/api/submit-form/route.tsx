import { verifyRecaptcha } from "@/app/utilities/VerifyCaptcha";
import { NextRequest, NextResponse } from "next/server";
import { saveFormToDb } from "@/app/utilities/SaveFormToDb";
import {
  sendContactEmailToHelios,
  sendApplicationEmailToHelios,
  sendEmailToUser,
} from "@/app/utilities/SendEmail";
import { contactFormSchema, applicationFormSchema } from "@/app/lib/zod";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    // Get the form data and the token from the request body
    const { formData, token, formType } = await request.json();
    //Check if the form data matches one of the Zod form schemas we have
    let isFormValid = false;
    try {
      if (formType === "contact") {
        contactFormSchema.parse(formData);
        isFormValid = true;
      } else if (formType === "application") {
        applicationFormSchema.parse(formData);
        isFormValid = true;
      }
    } catch (error) {
      console.log(error);
      return new NextResponse(
        JSON.stringify({
          message: "Invalid form schema/data",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    
    if (formData && token && formType) {
      // 1.verify captcha
      const isCaptchaValid = await verifyRecaptcha(token);
      console.log("captcha is ", isCaptchaValid);
      if (!isCaptchaValid) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to verify captcha",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      // 2. save form data to db
      const isFormSaved = await saveFormToDb(formData, formType);
      console.log("Form saved?: ", isFormSaved);
      if (!isFormSaved) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to save form data to database",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      // 3.a. send form data email to admin b. send "form received email" to the user
      // 3a
      let isEmailSentToAdmin;
      if (formType === "contact") {
        isEmailSentToAdmin = await sendContactEmailToHelios(formData);
      } else if (formType === "application") {
        isEmailSentToAdmin = await sendApplicationEmailToHelios(formData);
      }
      if (!isEmailSentToAdmin) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to send email to admin",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      //3b

      const isEmailSentToUser = await sendEmailToUser(formData, formType);
      if (!isEmailSentToUser) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to send email to user",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new NextResponse(
        JSON.stringify({
          message: "Form submitted successfully",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
}
