"use server";
import { ContactFormDDB, ContactFormEntity } from "../entities/ContactFormDDB";
import { ApplicationFormDDB, ApplicationFormEntity } from "../entities/AplicationFormDDB";
// server actions - removing use server will throw an error
export async function fetchContactForms() {
  const contactForms = (await  ContactFormEntity.query('ContactForm',{
    reverse:true
  }
  )).Items
  
  return contactForms as ContactFormDDB[]
}

export async function fetchApplicationForms() {
  const applicationForms =  (await ApplicationFormEntity.query('ApplicationForm',{
    reverse:true,
  })).Items

  return applicationForms as ApplicationFormDDB[]
}
