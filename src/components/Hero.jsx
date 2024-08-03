import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div>
        <h1 className="text-2xl md:text-4xl xl:text-8xl">
          <p>
            Create beautiful <span className="text-green-500">Emails</span>
          </p>
          <Button disableRipple radius="sm">
            <Link href="/preview">Try it yourself</Link>
          </Button>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
