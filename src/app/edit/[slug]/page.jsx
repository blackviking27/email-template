import DataInputComponent from "@/components/DataInput";
import Preview from "@/components/Preview";
import React from "react";

const page = ({ params }) => {
  return (
    <div className="lg:h-screen flex flex-col lg:grid md:grid-cols-2  lg:overflow-hidden">
      <DataInputComponent />
      <Preview params={params} />
    </div>
  );
};

export default page;
