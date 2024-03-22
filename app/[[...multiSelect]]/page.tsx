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
      <iframe src="https://codesandbox.io/p/github/tugsef/rick-and-morty/main" className="w-full h-full"></iframe>
    </div>
  );
}

export default page;
