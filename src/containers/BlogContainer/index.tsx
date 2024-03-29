"use client";
import React, { useEffect, useState } from "react";
import { useLazyQuery } from "../hooks";
import { serverFetch } from "@/app/action";
import { GET_ALL_BLOGS } from "@/utils/queries";
import { ToastErrorMessage } from "@/components/ToastMessage";
import StyledBox from "@/components/Atoms/StyledBox";
import { DotLoader } from "react-spinners";
import BlogListCard from "@/components/BlogListCard";
import { ToastContainer } from "react-toastify";
import { compressBase64ToJson } from "@/utils/methods";

const BlogContainer = () => {
  const [getBlog, { data, loading, error }] = useLazyQuery(serverFetch);

  useEffect(() => {
    getBlog(
      GET_ALL_BLOGS,
      {},
      {
        cache: "no-store",
      }
    );
  }, []);

  useEffect(() => {
    if (error) {
      ToastErrorMessage(error.message);
    }

  }, [data, loading, error]);


  return (
    <div className="bg-white p-6">
      <h2 className="text-black font-bold text-xl">Blogs</h2>
      <div className="flex justify-center items-start gap-4 flex-wrap">
        <ToastContainer />
        {loading ? (
          <StyledBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="10px"
          >
            <DotLoader color="#007bea" />
          </StyledBox>
        ) : (
          data?.listBlogs?.docs.map((item: any, index: any) => (
            <div key={index}>
              <BlogListCard
                imgSrc={item.thumbnail}
                heading={item.heading}
                description={item.description}
                created={item.createdOn}
                id={item.id}
                content={compressBase64ToJson(item.content)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogContainer;
