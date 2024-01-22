import React from "react";
import { serverFetch } from "../action";
import { GET_ALL_BLOGS } from "@/utils/queries";
import BlogListCard from "@/components/BlogListCard";
import { redirect } from "next/navigation";
import BlogsList from "@/components/BlogsList";
import { compressBase64ToJson } from "@/utils/methods";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { blogSlug: string } }): Promise<Metadata> {
  return {
    title: "Blogs",
    description: "Blogs Collection",
  }
}

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
      <div className="text-center text-3xl mb-8 mt-4 font-bold"><h1>Blogs List</h1></div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {data?.listBlogs?.docs?.map((item: any, index: any) => (
          <BlogsList
            imgSrc={item.thumbnail}
            heading={item.heading}
            description={item.description}
            created={item.createdOn}
            id={item.id}
            content={compressBase64ToJson(item.content)}
            slug={item.slug}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
