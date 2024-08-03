"use client";
import { Input, Textarea } from "@nextui-org/react";
import MarkdownEditorComponent from "./Markdown";
import Socials from "./Socials";
import { useContext, useEffect, useState } from "react";
import DataContext from "@/context/DataContext";
import copyToClipboard from "@/utilities/copyHtml";

const DataInputComponent = () => {
  const { setState } = useContext(DataContext);

  const handleInputChange = (key, e) => {
    e.preventDefault();
    setState((prevVal) => ({
      ...prevVal,
      [key]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen lg:h-full overflow-y-scroll scrollbar-hide">
      <div className="overflow-y-auto overflow-x-clip max-h-screen scrollbar-hide py-2 px-4">
        <h1 className="text-xl">Enter your details here</h1>
        <div className="flex flex-col justify-start gap-4">
          {/* Name input */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="John Doe"
              label="What is your name?"
              variant="bordered"
              labelPlacement="outside"
              onChange={(e) => handleInputChange("name", e)}
            />
            <Input
              type="text"
              placeholder="John Doe 2"
              label="Who are you reaching out?"
              variant="bordered"
              labelPlacement="outside"
              onChange={(e) => handleInputChange("toName", e)}
            />
          </div>

          {/* Short Bio */}
          <Textarea
            placeholder=""
            label="Introduce yourself"
            labelPlacement="outside"
            variant="bordered"
            onChange={(e) => handleInputChange("shortBio", e)}
          />

          {/* Email Body - Markdown */}
          <MarkdownEditorComponent setState={setState} />

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default DataInputComponent;
