import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaReadme } from "react-icons/lia";
import { RiTimer2Line } from "react-icons/ri";

const BlogListCard = ({
  imgSrc,
  heading,
  description,
  created,
  id,
  content,
}: any) => {
  return (
    <div className="relative">
      <div className="mx-auto h-[480px] w-80 bg-white shadow-md border border-gray-200 rounded-lg mb-5">
        <div className="">
          <Link href="#" className="">
            <Image
              className="rounded-t-lg w-80 h-60 object-cover"
              src={imgSrc}
              alt="image"
              height={1000}
              width={1000}
            />
          </Link>
          <div className="p-5 pb-2 flex justify-start items-start flex-col">
            <div className="flex justify-between text-[12px] mb-2 w-full">
              <h6 className="flex justify-center items-center gap-1">
                <RiTimer2Line />
                {new Date(created).toDateString().split(" ").slice(1).join(" ")}
              </h6>
              <p>
                <LiaReadme className="w-5 h-5" />
              </p>
            </div>
            <div className="overflow-hidden w-full h-full">
              <Link
                href={`blog/${id}`}>
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 hover:underline  overflow-hidden line-clamp-2">
                  {heading}
                </h5>
              </Link>
              <p className="font-normal text-gray-700 mb-3 overflow-hidden line-clamp-3">
                {description}
              </p>
            </div>
            <div className=" absolute bottom-8 left-5">
              <p>Author: Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
