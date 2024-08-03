import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Oops &#x1F615;!! This template does not exit</h1>
      <div>
        Please check the template name or go{" "}
        <Link className="text-blue-400" href="/">
          back
        </Link>
      </div>
    </div>
  );
};

export default Error;
