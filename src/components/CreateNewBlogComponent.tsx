"use client";
import React, { useState } from "react";
import RichTextEditor, { EditorValue } from "react-rte";
import "@/app/globals.css";

const CreateNewBlogComponent: React.FC = () => {
  const [value, setValue] = useState<EditorValue>(
    RichTextEditor.createEmptyValue()
  );
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
    console.log(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log("File uploaded:", selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  const handleOnChange = (val: EditorValue) => {
    setValue(val);
  };

  const toolbarConfig = {
    display: [
      "INLINE_STYLE_BUTTONS",
      "BLOCK_TYPE_BUTTONS",
      "LINK_BUTTONS",
      "BLOCK_TYPE_DROPDOWN",
      "HISTORY_BUTTONS",
    ],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "custom-css-class" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: "Normal", style: "unstyled" },
      { label: "Heading Large", style: "header-one" },
      { label: "Heading Medium", style: "header-two" },
      { label: "Heading Small", style: "header-three" },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" },
    ],
  };
  const customStyleMap = {
    CODE: {
      backgroundColor: "#333",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
      height: "300px",
    },
  };

  return (
    <div className="p-2 flex justify-center items-center w-full">
      <div className="bg-white rounded-lg shadow-sm p-10 w-[80%]">
        <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
        <input
          type="text"
          name="heading"
          className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Enter heading"
        />
        <h1 className="mb-1 font-semibold">Thumbnail</h1>
        <input
          type="file"
          name="thumbNail"
          onChange={handleFileChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-1 focus:outline-none focus:ring focus:border-blue-400"
        />
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={handleFileUpload}
            className="px-3 bg-blue-500 text-white text-md rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Upload File
          </button>
        </div>
        <div className="p-5">
          <RichTextEditor
            value={value}
            onChange={handleOnChange}
            toolbarConfig={toolbarConfig}
            customStyleMap={customStyleMap}
            style={{ padding: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewBlogComponent;
