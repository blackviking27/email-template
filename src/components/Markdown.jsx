"use client";
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  ListsToggle,
  MDXEditor,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useEffect, useState } from "react";

const MarkdownEditorComponent = ({ setState }) => {
  const [md, setMd] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        emailBody: md,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [md]);

  const handleInputChange = (e) => {
    setMd(e);
  };

  return (
    <>
      <div>What do you want to say?</div>
      <MDXEditor
        contentEditableClassName="prose"
        className="border border-gray-300 rounded-md"
        markdown=""
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <BlockTypeSelect />
                <BoldItalicUnderlineToggles />
                <CreateLink />
                <ListsToggle />
              </>
            ),
          }),
        ]}
        onChange={(e) => handleInputChange(e)}
      />
    </>
  );
};

export default MarkdownEditorComponent;
