"use client";
import DataContext from "@/context/DataContext";
import copyToClipboard from "@/utilities/copyHtml";
import { Button, Progress } from "@nextui-org/react";
// import Email from "@/app/templates/all/Email1";
import { Suspense, useContext, useEffect, useState } from "react";
import { Body, Html } from "@react-email/components";
import { Clipboard } from "react-feather";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const Email = dynamic(
  () => {
    try {
      console.log("window location", window.location);
      return import(
        /* webpackChunkName: "[request]" */ "@/app/templates/all/Email1.jsx"
      );
    } catch (err) {
      console.log("Error");
      return <div>ERROR!!!!</div>;
    }
  },
  {
    ssr: false,
    // loading: () => (
    //   <Progress
    //     size="sm"
    //     isIndeterminate
    //     aria-label="Loading..."
    //     className="max-w-md flex"
    //   />
    // ),
  }
);

const Preview = ({ params }) => {
  const { state } = useContext(DataContext);
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const element = dynamic(
  //     () => {
  //       return import(
  //         /* webpackChunkName: "[request]" */ "@/app/templates/all/Email1.jsx"
  //       );
  //     },
  //     {
  //       ssr: false,
  //       // loading: () => (
  //       //   <Progress
  //       //     size="sm"
  //       //     isIndeterminate
  //       //     aria-label="Loading..."
  //       //     className="max-w-md flex"
  //       //   />
  //       // ),
  //     }
  //   );
  //   setEmail(element);
  //   console.log("EMAIL >>>>", element);

  //   // setLoading(true);
  //   // const importTemplate = async () => {
  //   //   const element = (await import("@/app/templates/all/Email1")).default;
  //   //   setEmail(element);
  //   //   setLoading(false);
  //   //   console.log("EMAIL >>>>", element);
  //   // };
  //   // importTemplate();
  // }, []);

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
      {/* {!loading && Email != null ? (
        <>
          <Email state={state} />
          <Button
            className="fixed bottom-4 right-8"
            color="primary"
            onClick={() => handleCopyToClipBoard(<Email state={state} />)}
          >
            Copy to Clipboard <Clipboard size={24} />
          </Button>
        </>
      ) : (
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md flex"
        />
      )} */}
    </div>
  );
};

export default Preview;
