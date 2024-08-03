"use client";
import DataContext from "@/context/DataContext";
import copyToClipboard from "@/utilities/copyHtml";
import { Button, Progress } from "@nextui-org/react";
// import Email from "@/app/templates/all/Email1";
import { Suspense, useContext, useEffect, useState } from "react";
import { Body, Html } from "@react-email/components";
import { Clipboard } from "react-feather";
import dynamic from "next/dynamic";
import { redirect, useRouter, usePathname } from "next/navigation";

const Preview = ({ params }) => {
  const { state } = useContext(DataContext);
  const pathName = usePathname();

  const Email = dynamic(
    () => {
      // console.log("window location", window.location);
      console.log("router >>>", pathName);

      // getting the template name
      let slug = pathName.split("/").at(-1);

      // TODO: add the dynamic check for slug name
      if (slug != "Email1") {
        // path = "Email1";
        console.log("redirecting");
        return import(
          /* webpackChunkName: "No_template_error" */ `@/components/Error.jsx`
        );
      } else {
        return import(
          /* webpackChunkName: "[request]" */ `@/app/templates/all/${slug}.jsx`
        );
      }
    },
    {
      ssr: false,
      loading: () => (
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md flex"
        />
      ),
    }
  );

  const handleCopyToClipBoard = (element) => {
    const html = (
      <Html>
        <Body style={{ padding: 0, margin: 0 }}>{element}</Body>
      </Html>
    );
    copyToClipboard(html);
  };

  return (
    <div
      className="w-full overflow-y-auto py-4 px-8  md:h-full relative scrollbar-hide"
      style={{ borderLeft: "1px solid black" }}
    >
      <Suspense
        fallback={
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md flex"
          />
        }
      >
        <Email state={state} />
        <Button
          className="fixed bottom-4 right-8"
          color="primary"
          onClick={() => handleCopyToClipBoard(<Email state={state} />)}
        >
          Copy to Clipboard <Clipboard size={24} />
        </Button>
      </Suspense>
    </div>
  );
};

export default Preview;
