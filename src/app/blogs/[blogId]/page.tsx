import { serverFetch } from "@/app/action";
import BlogListCard from "@/components/BlogListCard";
import { GET_BLOG } from "@/utils/queries";
import React from "react";

const page = async ({ params }: any) => {
  const blogSlug = params.blogId;
  
  const blogData = await serverFetch(
    GET_BLOG,
    {
      where: {
        slug: {
          is: blogSlug,
        },
      },
    },
    {
      cache: "no-store",
    }
  );

  console.log(blogData?.getBlog?.id, "blog");

  return (
    <div>
      <BlogListCard
        imgSrc={blogData?.getBlog?.thumbnail}
        heading={blogData?.getBlog?.heading}
        description={blogData?.getBlog?.description}
        created={blogData?.getBlog?.createdOn}
        id={blogData?.getBlog?.id}
        content={blogData?.getBlog?.content}
      />
    </div>
  );
};

export default page;
