import { z } from "zod";

//ApplicationForm
export const applicationFormSchema = z.object({
  package: z.enum(["Standard Package", "Full Package", "Undecided"]),
  programType: z.enum(["Language School", "MA/MS", "PhD"]),
  whyUSA: z
    .string()
    .min(1)
    .max(1000)
    .refine((value) => value.trim().length > 0),
  academicInterests: z
    .string()
    .min(1)
    .max(1000)
    .refine((value) => value.trim().length > 0),
  fullName: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]*$/)
    .refine((value) => value.trim().length > 0),
  email: z.string().email(),
  phone: z
    .string()
    .min(10)
    .regex(/^[0-9\+]+$/),
  citizenship: z
    .string()
    .min(1)
    .max(100)
    .refine((value) => value.trim().length > 0),
  university: z
    .string()
    .min(1)
    .max(100)
    .refine((value) => value.trim().length > 0),
  major: z
    .string()
    .min(1)
    .max(100)
    .refine((value) => value.trim().length > 0),
  gpa: z.string().refine((value) => {
    const gpa = parseFloat(value);
    return gpa >= 1.8 && gpa <= 4.0;
  }),
  extracurricular: z
    .string()
    .min(1)
    .max(1000)
    .refine((value) => value.trim().length > 0),
  workExperience: z
    .string()
    .min(1)
    .max(1000)
    .refine((value) => value.trim().length > 0),
  englishProficiency: z.enum([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]),
  toeflIelts: z
    .string()
    .min(1)
    .max(1000)
    .refine((value) => value.trim().length > 0),
  gre: z.enum(["Yes", "No"]),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;

//Contact Form
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]*$/)
    .refine((value) => value.trim().length > 0),
  email: z.string().email(),
  phone: z
    .string()
    .min(10)
    .regex(/^[0-9\+]+$/),
  question: z.string().min(50).max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
