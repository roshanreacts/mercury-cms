import React from "react";
import { serverFetch } from "../action";
import { GET_ALL_BLOGS } from "@/utils/queries";
import BlogListCard from "@/components/BlogListCard";
import { redirect } from "next/navigation";

const page = async () => {
  const data = await serverFetch(
    GET_ALL_BLOGS,
    {},
    {
      cache: "no-store",
    }
  );

  if (data.error || !data || data?.listBlogs?.docs.length <= 0) {
    redirect("/404");
  }

  return (
    <div className="p-6">
        <div className="text-center text-2xl mb-4 mt-4 font-bold"><h1>Blog List</h1></div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {data?.listBlogs?.docs?.map((item: any, index: any) => (
          <BlogListCard
            imgSrc={item.thumbnail}
            heading={item.heading}
            description={item.description}
            created={item.createdOn}
            id={item.id}
            content={item.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
