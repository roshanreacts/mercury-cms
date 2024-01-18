import { getBlogReadTime } from "@/utils/methods";
import Image from "next/image";
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
  slug,
}: any) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="p-4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg w-[400px] shadow-lg p">
          <div className="mb-6 mt-2">
            <div className="flex p-2">
              <div className="flex justify-between items-center text-[12px] w-full">
                <h6 className="flex justify-center items-center gap-1">
                  <RiTimer2Line />
                  {new Date(created)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </h6>
                <p className="flex justify-center items-center gap-2">
                  <LiaReadme className="w-5 h-5" />
                  {getBlogReadTime(content)}
                </p>
              </div>
            </div>
          </div>

          <Image
            className="lg:h-48 md:h-36 w-full object-cover"
            src={imgSrc}
            alt="blog cover"
            width={1000}
            height={1000}
          />

          <div className="p-4">
            <h2 className="tracking-widest text-md title-font font-bold text-green-400 mb-1 uppercase ">
              {heading}
            </h2>
            <h1 className="title-font text-xs font-medium text-gray-900 mb-3">
              {description}
            </h1>
            <div className="flex items-center flex-wrap ">
              <Link
                href={`blogs/${slug}`}
                className="inline-block mt-2"
              >
                <button className="bg-white text-blue-500 hover:text-blue-400 hover:underline">Read more</button>
              </Link>
              {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                24
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                89
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
