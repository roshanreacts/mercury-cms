"use client";
import { serverFetch } from "@/app/action";
import { ForwardRefEditor } from "@/components/CreateNewBlogComponent";
import { GET_BLOG, UPDATE_BLOG } from "@/utils/queries";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useLazyQuery } from "../hooks";
import {
  ToastErrorMessage,
  ToastSuccessMessage,
} from "@/components/ToastMessage";
import { useRouter, useSearchParams } from "next/navigation";
import { compressBase64ToJson, compressJsonToBase64 } from "@/utils/methods";

const UpdateBlogContainer = () => {
  const [getBlog, { data, loading, error }] = useLazyQuery(serverFetch);
  const [updateBlog, updateBlogResponse] = useLazyQuery(serverFetch);
  const blogId = useSearchParams().get("id");
  const router = useRouter()
  console.log(blogId, "client");

  const [initialValues, setInitialValues] = useState({
    heading: "",
    description: "",
    thumbnail: "",
    slug: "",
    content: "",
  });

  useEffect(() => {
    getBlog(
      GET_BLOG,
      {
        where: {
          id: {
            is: blogId,
          },
        },
      },
      {
        cache: "no-store",
      }
    );
    console.log(blogId);
  }, []);

  const mdxEditorRef = React.useRef<MDXEditorMethods>(null);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values: any) => {
      console.log(values);
      updateBlog(UPDATE_BLOG, {
        input: {
          content: compressJsonToBase64(mdxEditorRef.current?.getMarkdown()),
          description: values.description,
          heading: values.heading,
          id: blogId,
          slug: values.slug,
          thumbnail: values.thumbnail,
        },
      });
    },
  });
  useEffect(() => {
    if (updateBlogResponse.data) {
      ToastSuccessMessage("Updated Blog successfully");
      router.push("/admin/blog")
    }
    if (updateBlogResponse.error) {
      ToastErrorMessage(error.message);
    }
  }, [
    updateBlogResponse.data,
    updateBlogResponse.error,
    updateBlogResponse.loading,
  ]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setInitialValues(data.getBlog);
    }
  }, [data, loading, error]);

  return (
    <div className="p-2 flex justify-center items-center w-full">
      {data && (
        <div className="bg-white rounded-lg shadow-sm p-10 w-[80%]">
          <h2 className="text-2xl font-semibold mb-4">Update</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="slug" className="font-semibold mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  onChange={formik.handleChange}
                  value={formik.values.slug}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
                  placeholder="Enter Slug"
                />
              </div>
              <div>
                <label htmlFor="slug" className="font-semibold mb-2">
                  Heading
                </label>
                <input
                  type="text"
                  name="heading"
                  onChange={formik.handleChange}
                  value={formik.values.heading}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-400"
                  placeholder="Enter heading"
                />
              </div>
            </div>
            <label htmlFor="slug" className="font-semibold mb-2">
              Description
            </label>
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
              <ForwardRefEditor
                markdown={compressBase64ToJson(data.getBlog?.content) ?? `Hello **world**!`}
                ref={mdxEditorRef}
              //   onChange={() => console.log(mdxEditorRef.current?.getMarkdown())}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-500 text-white text-md rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateBlogContainer;
