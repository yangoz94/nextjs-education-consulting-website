"use client";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export default function Logo(props: LogoProps) {
  return (
    <section className="flex gap-4 items-center ">
      <Link href="/" onClick={() => props.setActiveLink("/")}>
        <h1 className="text-sm lg:text-md font-sans uppercase tracking-widest hover:cursor-pointer hover:text-gray-500 transition-all duration-200">
          Helios Admissions
        </h1>
      </Link>
    </section>
  );
}
