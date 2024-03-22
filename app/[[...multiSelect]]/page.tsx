import React from "react";
import Footer from "@/components/Footer";
import MultiSelect from "@/components/MultiSelect";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Case",
};
function page() {
  return (
    <div className="h-screen w-full flex flex-col p-10 items-center gap-10">
      <Header />
      <MultiSelect />
      <Footer />
      <iframe src="https://codesandbox.io/p/github/tugsef/rick-and-morty/main?workspaceId=6879c928-d089-48c2-b387-6c2dd330749a" className="w-full h-full"></iframe>
    </div>
  );
}

export default page;
