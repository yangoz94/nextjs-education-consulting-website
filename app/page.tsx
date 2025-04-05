import HomeClient from "./components/HomeClient";
import PageStyler from "./components/PageStyler";

export const metadata = {
  title: "Homepage | Anasayfa",
  description: "Homepage | Anasayfa",
};

export default function Home() {
  return (
    <PageStyler>
      {/*  HomeClient is only a wrapper to avoid using 'use client' in page component for SEO purposes */}
      <HomeClient />
    </PageStyler>
  );
}
