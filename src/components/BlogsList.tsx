import { getBlogReadTime } from "@/utils/methods";
import Link from "next/link";
import React from "react";
import { LiaReadme } from "react-icons/lia";
import { RiTimer2Line } from "react-icons/ri";

const BlogsList = ({
  imgSrc,
  heading,
  description,
  created,
  id,
  content,
  slug
}: any) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="p-4 bg-gray-100 rounded-lg flex justify-center items-center w-[600px]">
          <div className="flex justify-center items-center flex-grow gap-8">
            <img
              className="object-cover w-[300px] rounded-xl h-72"
              src={imgSrc}
              alt="blog-Image"
            />

            <div className="mt-6">
              <div className="flex justify-between text-[12px] mb-2 w-full">
                <h6 className="flex justify-center items-center gap-1">
                  <RiTimer2Line />
                  {new Date(created)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </h6>
                <p>
                  <LiaReadme className="w-5 h-5" />
                  {getBlogReadTime(content)}
                </p>
              </div>

              <h1
                className="block mt-4 text-xl font-semibold text-gray-800 dark:text-white md:text-2xl"
              >
                {heading}
              </h1>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {description}
              </p>

              <Link
                href={`blogs/${slug}`}
                className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsList;
