import React from "react";
import templates from "./metadata";
import TemplateCard from "@/components/EmailCard";
import NavbarComponent from "@/components/Navbar";

const Templates = () => {
  return (
    <>
      <NavbarComponent />
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-2xl mt-6 mb-2">Discover templates</div>
        <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {templates.map((data) => (
            <TemplateCard
              name={data?.name}
              description={data?.description}
              path={data?.path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Templates;
