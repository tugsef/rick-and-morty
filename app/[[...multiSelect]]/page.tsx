import React from "react";
import Footer from "@/components/Footer";
import MultiSelect from "@/components/MultiSelect";
import Header from "@/components/Header";

function page() {
  return (
    <div className="h-screen w-full flex flex-col p-10 items-center gap-10">
      <Header />
      <MultiSelect />
      <Footer />
      <h1 className="text-xl font-extrabold">Github</h1>
      <iframe
        src="https://github.com/tugsef/rick-and-morty"
        width="100%"
        className="h-full"
      ></iframe>
    </div>
  );
}

export default page;
