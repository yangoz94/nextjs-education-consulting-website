import AdminMenu from "@/app/components/AdminMenu";
import PageStyler from "@/app/components/PageStyler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Admin Paneli",
  description: "Admin-only dashboard | Sadece yöneticilerin görebileceği panel",
};

export default function Dashboard() {
  return (
    <PageStyler>
      <main className="md:p-10 p-4 max-w-full ">
        <AdminMenu />
      </main>
    </PageStyler>
  );
}
