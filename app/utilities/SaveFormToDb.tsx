import { ApplicationFormData, ContactFormData } from "../lib/zod";
import { ApplicationFormEntity } from "../entities/AplicationFormDDB";
import { ContactFormEntity } from "../entities/ContactFormDDB";

export async function saveFormToDb(
  formData: ApplicationFormData | ContactFormData,
  formType: "application" | "contact"
): Promise<boolean> {
  try {
    let data;
    if (formType === "application" && "package" in formData) {
      data = {
        package: formData.package,
        programType: formData.programType,
        whyUSA: formData.whyUSA,
        academicInterests: formData.academicInterests,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        citizenship: formData.citizenship,
        university: formData.university,
        major: formData.major,
        gpa: formData.gpa,
        extracurricular: formData.extracurricular,
        workExperience: formData.workExperience,
        englishProficiency: formData.englishProficiency,
        toeflIelts: formData.toeflIelts,
        gre: formData.gre,
      };
      const form = await ApplicationFormEntity.put(data);
      console.log(form);
    } else if (formType === "contact" && "question" in formData) {
      data = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        question: formData.question,
      };
      const form = await ContactFormEntity.put(data);
      console.log(form);
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error saving form to database");
  }
  return true;
}
