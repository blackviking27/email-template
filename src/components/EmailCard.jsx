"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const TemplateCard = ({ name, description, path }) => {
  const handleClick = () => {};
  return (
    <Card
      shadow="none"
      disableRipple
      className="border cursor-pointer hover:-translate-x-1 hover:-translate-y-1 !duration-200"
      onClick={handleClick}
    >
      <CardHeader>
        <h1 className="text-lg">{name}</h1>
      </CardHeader>
      <CardBody>
        <p className="">{description} </p>
      </CardBody>
    </Card>
  );
};

export default TemplateCard;
