"use client";
import React, { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [state, setState] = useState({
    name: "John Doe",
    toName: "John Doe",
    shortBio: "An amazing person in search of the magic",
    emailBody: "",
    socials: {
      gitHub: "https://github.com/",
      linkedin: "",
      website: "",
      twitter: "",
    },
  });

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
