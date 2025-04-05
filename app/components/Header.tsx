"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useHeader } from "../hooks/useHeader";
import { LanguageDropdown } from "./LanguageDropdown";
import { signOut, useSession } from "next-auth/react";
import PrimaryButton from "./PrimaryButton";
import Logo from "./Logo";

export default function Header() {
  const { language, NAV_BAR_ITEMS, activeLink, setActiveLink, headerRef } =
    useHeader();
  const { data: session } = useSession();

  return (
    <>
      <header
        className="opacity-0 -translate-y-24 sticky top-0 z-50 bg-LIGHT_SECONDARY_BG_COLOR"
        ref={headerRef}
      >
        <div className="flex h-16 max-w-screen-3xl px-5">
          <div className="flex flex-1 items-center justify-between gap-4">
            <div className="order-2 lg:order-1">
              <Logo setActiveLink={setActiveLink} />
            </div>

            <div className="lg:flex lg:items-center lg:gap-4 lg:order-2">
              <nav className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-widest">
                {NAV_BAR_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block h-16 border-b-4 leading-[4rem] transition ease-in-out duration-150 active:scale-90 text-[#22577E] hover:border-[#22577E] ${
                      activeLink === item.href
                        ? "border-[#22577E] "
                        : "border-transparent "
                    }`}
                    onClick={() => setActiveLink(item.href)}
                  >
                    {language === "en" ? item.name.en : item.name.tr}
                  </Link>
                ))}

                {session && (
                  <Link
                    href="/admin/dashboard"
                    className={`hidden lg:block h-16 border-b-4 leading-[4rem] transition ease-in-out duration-150 active:scale-90 text-[#22577E] hover:border-[#22577E] ${
                      activeLink === "/admin/dashboard"
                        ? "border-[#22577E] "
                        : "border-transparent "
                    }`}
                    onClick={() => setActiveLink("/admin/dashboard")}
                  >
                    {language === "en" ? "DASHBOARD" : "ADMİN PANELİ"}
                  </Link>
                )}
                {session && (
                  <PrimaryButton
                    label={{ en: "Log out", tr: "Çıkış Yap" }}
                    className="text-white hidden lg:block text-xs font-bold uppercase tracking-widest h-10 rounded-lg "
                    onClick={() => signOut()}
                  />
                )}
              </nav>

              <div role="div for gsap effect" className="order-1 lg:order-2">
                <LanguageDropdown />
              </div>
            </div>

            <div
              role="div for gsap effect"
              className="lg:hidden order-3 lg:order-none"
            >
              <Hamburger
                navBarItems={NAV_BAR_ITEMS}
                setActiveLink={setActiveLink}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
