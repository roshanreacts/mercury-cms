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

const BlogContainer = () => {
  const [getBlog, { data, loading, error }] = useLazyQuery(serverFetch);
  const [blogData, setBlogData] = useState([]);

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
    if (data) {
      setBlogData(data?.listBlogs?.docs);
    }
  }, [data, loading, error]);
  console.log(data, "blogList");

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
          blogData.map((item: any, index: any) => (
            <BlogListCard
              imgSrc={item.thumbnail}
              heading={item.heading}
              description={item.description}
              created={item.createdOn}
              id={item.id}
              content={item.content}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BlogContainer;
