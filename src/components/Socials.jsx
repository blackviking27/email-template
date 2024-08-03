import { Input } from "@nextui-org/react";
import React from "react";
import { GitHub, Globe, Linkedin, Twitter } from "react-feather";

const Socials = () => {
  return (
    <div>
      <div>Ways to reach you</div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Github"
          variant="bordered"
          labelPlacement="outside"
          startContent={<GitHub />}
        />
        <Input
          type="text"
          placeholder="Linkedin"
          variant="bordered"
          labelPlacement="outside"
          startContent={<Linkedin />}
        />
        <Input
          type="text"
          placeholder="Portfolio"
          variant="bordered"
          labelPlacement="outside"
          startContent={<Globe />}
        />
        <Input
          type="text"
          placeholder="Twitter"
          variant="bordered"
          labelPlacement="outside"
          startContent={<Twitter />}
        />
      </div>
    </div>
  );
};

export default Socials;
