import { ContactFormDDB } from "../entities/ContactFormDDB";
import { ApplicationFormDDB } from "../entities/AplicationFormDDB";

import { useState } from "react";
import { useQuery } from "react-query";
import {
  fetchApplicationForms,
  fetchContactForms,
} from "../utilities/FetchForms";

export function useAdminMenu() {
  const [openTab, setOpenTab] = useState(1);

  const { data: allContactForms, isLoading: isContactFormLoading } = useQuery<ContactFormDDB[]>("contactForms", fetchContactForms);
  const { data: allApplicationForms, isLoading: isApplicationFormLoading } = useQuery<ApplicationFormDDB[]>("applicationForms", fetchApplicationForms);
  return {
    openTab,
    setOpenTab,
    allContactForms,
    allApplicationForms,
    isLoading: isContactFormLoading || isApplicationFormLoading,
  };
}
