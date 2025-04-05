"use client";
import Link from "next/link";
import React from "react";
import { useAdminMenu } from "../hooks/useAdminMenu";
import Spinner from "./Spinner";
import DataRecordsTable from "./DataRecordsTable";

export default function AdminMenu() {
  const {
    openTab,
    setOpenTab,
    allContactForms,
    allApplicationForms,
    isLoading,
  } = useAdminMenu();

  const MENU_ITEMS = [
    { name: "Contact Form Records", href: "contact-form-records" },
    { name: "Application Form Records", href: "application-form-records" },
  ];
  return (
    <>
      <div className="flex flex-wrap overflow-y-auto h-[calc(100dvh-270px)] ">
        <div className="w-full">
          <ul
            className="flex gap-2 mb-4 list-none flex-wrap flex-row sticky top-0 z-10"
            role="tablist"
          >
            {MENU_ITEMS.map((item, index) => (
              <li className=" flex-auto text-center" key={index}>
                <Link
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === index + 1
                      ? "text-blue bg-red-400"
                      : "text-black bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href={item.href}
                  role="tablist"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white dark:bg-[#013440] w-full shadow-lg rounded-lg pb-5">
            <div className="p-5 flex-auto">
              <div className="tab-content tab-space">
                {MENU_ITEMS.map((item, index) => (
                  <div
                    className={openTab === index + 1 ? "block" : "hidden"}
                    id={item.href}
                    key={index}
                  >
                    {isLoading ? (
                      <Spinner /> // Render the Spinner component while loading
                    ) : (
                      // Render the DataRecordsTable component with the appropriate data props based on the tab index
                      <DataRecordsTable
                        contactForms={index === 0 ? allContactForms : undefined}
                        applicationForms={
                          index === 1 ? allApplicationForms : undefined
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
