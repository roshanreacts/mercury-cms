"use client";
import React, { Suspense, forwardRef, useEffect, useState } from "react";
import RichTextEditor, { EditorValue } from "react-rte";
import { useFormik } from "formik"; // Import useFormik hook
import "@/app/globals.css";
import { useLazyQuery } from "@/containers/hooks";
import { serverFetch } from "@/app/action";
import { ToastErrorMessage, ToastSuccessMessage } from "./ToastMessage";
import { useRouter } from "next/navigation";
import { CREATE_BLOG } from "@/utils/queries";
import dynamic from "next/dynamic";
import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";

const CreateNewBlogComponent: React.FC = () => {




  const router = useRouter();
  const [createBlog, { data, loading, error }] = useLazyQuery(serverFetch);
  const [value, setValue] = useState<EditorValue>(
    RichTextEditor.createEmptyValue()
  );


  const Editor = dynamic(() => import('./MdxEditor'), {
    ssr: false
  })
  const mdxEditorRef = React.useRef<MDXEditorMethods>(null)

  const formik = useFormik({
    initialValues: {
      heading: "",
      description: "",
      thumbnail: "",
      content: ""
    },
    onSubmit: (values: any) => {
      createBlog(CREATE_BLOG, {
        input: {
          heading: values.heading,
          description: values.description,
          thumbnail: values.thumbnail,
          content: mdxEditorRef.current?.getMarkdown()
        },
      });
    },
  });


  useEffect(() => {
    if (data) {
      ToastSuccessMessage("Blog Created Successfully!!");
      router.replace("/admin/blog");
    }

    if (error) {
      ToastErrorMessage(error.message);
    }
  }, [data, loading, error]);

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
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="heading"
            onChange={formik.handleChange}
            value={formik.values.heading}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter heading"
          />
          <textarea
            rows={3}
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter Description"
          />
          <h1 className="mb-1 font-semibold">Thumbnail</h1>
          <input
            type="text"
            name="thumbnail"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
            placeholder="Thumbnail Image URL"
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-1 focus:outline-none focus:ring focus:border-blue-400"
          />

          <div className="p-2">
            <ForwardRefEditor markdown={`Hello **world**!`} ref={mdxEditorRef} onChange={() => console.log(mdxEditorRef.current?.getMarkdown())} />
          </div>
          <button
            type="submit"
            className="px-3 bg-blue-500 text-white text-md rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBlogComponent;



// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import('./MdxEditor'), {
  // Make sure we turn SSR off
  ssr: false
})

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => <Editor {...props} editorRef={ref} />)

// TS complains without the following line
ForwardRefEditor.displayName = 'ForwardRefEditor'