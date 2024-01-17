import { serverFetch } from "@/app/action";
import { useLazyQuery } from "@/containers/hooks";
import { DELETE_BLOG } from "@/utils/queries";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import readTime from "@/utils/methods";
import { LiaReadme } from "react-icons/lia";
import { RiTimer2Line } from "react-icons/ri";
import { ToastErrorMessage, ToastSuccessMessage } from "./ToastMessage";
import { MdOutlineDeleteOutline } from "react-icons/md";


const BlogListCard = ({
  imgSrc,
  heading,
  description,
  created,
  id,
  content,
}: any) => {
  const [deleteBlog, { data, loading, error }] = useLazyQuery(serverFetch);

  const router = useRouter();

  const handleBlogDelete = () => {
    deleteBlog(DELETE_BLOG, {
      deleteBlogId: id,
    });
  };

  useEffect(() => {
    if (data) {
      ToastSuccessMessage("Blog deleted");
      window.location.reload();
    }
    if (error) {
      ToastErrorMessage(error.message);
    }
  }, [data,loading,error]);
  return (
    <div className="relative group hover:scale-105 ease-in duration-300">
      <div className="mx-auto h-[480px] w-80 bg-white shadow-md border border-gray-200 rounded-lg mb-5">
        <div className="">
          <div className="relative ">
            <Link href="#" className="">
              <Image
                className="rounded-t-lg w-80 h-60 object-cover"
                src={imgSrc}
                alt="image"
                height={1000}
                width={1000}
              />
            </Link>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="px-2 py-1 bg-blue-400 hover:bg-blue-900 rounded hover:text-white text-[10px]"
                onClick={() => {
                  router.push(`blog/update?id=${id}`);
                }}
              >
                <span>
                  {" "}
                  <FiEdit className="w-4 h-4" />
                </span>
              </button>
              <button
                className="px-2 py-1 bg-red-500 hover:bg-red-900 rounded hover:text-white text-[10px]"
                onClick={handleBlogDelete}
              >
                <span>
                  {" "}
                  <MdOutlineDeleteOutline className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          <div className="p-5 pb-2 flex justify-start items-start flex-col">
            <div className="flex justify-between text-[12px] mb-2 w-full">
              <h6 className="flex justify-center items-center gap-1">
                <RiTimer2Line />
                {new Date(created).toDateString().split(" ").slice(1).join(" ")}
              </h6>
              <p className="flex justify-center items-center gap-1">
                <LiaReadme className="w-5 h-5" />
                {readTime(content)}
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
