"use client";
import React, { Suspense, forwardRef, useEffect, useState } from "react";
import { ErrorMessage, useFormik } from "formik"; // Import useFormik hook
import "@/app/globals.css";
import { useLazyQuery } from "@/containers/hooks";
import { serverFetch } from "@/app/action";
import { ToastErrorMessage, ToastSuccessMessage } from "./ToastMessage";
import { useRouter } from "next/navigation";
import { CREATE_BLOG } from "@/utils/queries";
import dynamic from "next/dynamic";
import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import { compressJsonToBase64 } from "@/utils/methods";
import * as Yup from "yup";

const CreateNewBlogComponent: React.FC = ({ edit }: any) => {
  const router = useRouter();
  const [createBlog, { data, loading, error }] = useLazyQuery(serverFetch);
  const mdxEditorRef = React.useRef<MDXEditorMethods>(null);

  const validationSchema = Yup.object({
    slug: Yup.string().required("Slug is required"),
    heading: Yup.string().required("Heading is required"),
    metaTitle: Yup.string().required("Meta Title is required"),
    metaDescription: Yup.string().required("Meta Description is required"),
    description: Yup.string().required("Description is required"),
    thumbnail: Yup.string()
      .url("Invalid URL")
      .required("Thumbnail URL is required"),
  });

  const formik = useFormik({
    initialValues: {
      heading: "",
      description: "",
      thumbnail: "",
      slug: "",
      content: "",
      metaDescription: "",
      metaTitle: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values);

      createBlog(CREATE_BLOG, {
        input: {
          heading: values.heading,
          description: values.description,
          thumbnail: values.thumbnail,
          slug: values.slug,
          content: compressJsonToBase64(mdxEditorRef.current?.getMarkdown()),
          metaDescription: values.metaDescription,
          metaTitle: values.metaTitle,
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

  return (
    <div className="p-2 flex justify-center items-center w-full">
      <div className="bg-white rounded-lg shadow-sm p-10 w-[95%]">
        <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="slug" className="font-semibold">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.slug}
                className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter Slug"
              />
              {formik.touched.slug && formik.errors.slug ? (
                //@ts-ignore
                <div className="text-red-500">{formik.errors.slug}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="heading" className="font-semibold mb-2">
                Heading
              </label>
              <input
                type="text"
                name="heading"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.heading}
                className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter heading"
              />
                {formik.touched.heading && formik.errors.heading ? (
                //@ts-ignore
                <div className="text-red-500">{formik.errors.heading}</div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="metaTitle" className="font-semibold mb-2">
                Meta Title
              </label>
              <input
                type="text"
                name="metaTitle"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.metaTitle}
                className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter Meta Title"
              />
                {formik.touched.metaTitle && formik.errors.metaTitle ? (
                //@ts-ignore
                <div className="text-red-500">{formik.errors.metaTitle}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="metaDescription" className="font-semibold mb-2">
                Meta Description
              </label>
              <input
                type="text"
                name="metaDescription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.metaDescription}
                className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter Meta Description"
              />
               {formik.touched.metaDescription && formik.errors.metaDescription ? (
                //@ts-ignore
                <div className="text-red-500">{formik.errors.metaDescription}</div>
              ) : null}
            </div>
          </div>
          <label htmlFor="description" className="font-semibold mb-2">
            Description
          </label>
          <textarea
            rows={3}
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter Description"
          />
           {formik.touched.description && formik.errors.description ? (
                //@ts-ignore
                <div className="text-red-500">{formik.errors.description}</div>
              ) : null}
          <h1 className="mb-1 font-semibold">Thumbnail</h1>
          <input
            type="text"
            name="thumbnail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.thumbnail}
            placeholder="Thumbnail Image URL"
            className="border border-gray-300 rounded-md px-3 py-2 w-full mb-1 focus:outline-none focus:ring focus:border-blue-400"
          />
           {formik.touched.thumbnail && formik.errors.thumbnail ? (
                //@ts-ignore
                <div className="text-red-500">{formik.errors.thumbnail}</div>
              ) : null}
          <div className="flex justify-center items-center my-2 rounded-md">
            <img
              src={
                formik.values.thumbnail
                  ? formik.values.thumbnail
                  : "https://assets-global.website-files.com/6324331488eeaaad6ed0be97/63620f99776dc1648a7a5d0a_image-preview.png"
              }
              alt="Preview"
              className="object-cover h-52 w-52"
            />
          </div>

          <div className="shadow-md">
            <ForwardRefEditor
              markdown={`Hello **world**!`}
              ref={mdxEditorRef}
              //   onChange={() => console.log(mdxEditorRef.current?.getMarkdown())}
            />
          </div>
          <div className="text-center mt-20 mb-1">
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white text-md rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              {loading ? "Loading..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBlogComponent;

// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import("./MdxEditor"), {
  // Make sure we turn SSR off
  ssr: false,
});

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Editor {...props} editorRef={ref} />
);

// TS complains without the following line
ForwardRefEditor.displayName = "ForwardRefEditor";
