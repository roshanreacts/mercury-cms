"use client";
import { serverFetch } from "@/app/action";
import CreateNewBlogComponent, {
  ForwardRefEditor,
} from "@/components/CreateNewBlogComponent";
import { useLazyQuery } from "@/containers/hooks";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const blogId = useParams().id;
  const searchParams = useSearchParams();
  const view = searchParams.get("view") == "true" ? true : false;
  const edit = searchParams.get("edit") == "true" ? true : false;

  const [getBlogContent, { data, loading, error }] = useLazyQuery(serverFetch);
  useEffect(() => {
    getBlogContent(
      ` query GetBlog($where: whereBlogInput!) {
        getBlog(where: $where) {
          id
          content
        }
      }`,
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
  }, []);

  return (
    <div>
      {data?.getBlog && (
        <ForwardRefEditor markdown={data?.getBlog?.content} readOnly={true} />
      )}
    </div>
  );
};

export default page;
