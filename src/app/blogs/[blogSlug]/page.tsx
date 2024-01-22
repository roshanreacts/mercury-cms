import { serverFetch } from "@/app/action";
import BlogViewerComponent from "@/components/BlogViewerComponent";
import { compressBase64ToJson } from "@/utils/methods";
import { GET_BLOG } from "@/utils/queries";
import React from "react";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { blogSlug: string } }): Promise<Metadata> {
  const slug = `${params?.blogSlug}`
  const blog = await serverFetch(GET_BLOG,
    {
      where: {
        slug: { is: slug }
      }
    },
    {
      cache: "no-store"
    }
  )
  

  if (blog.error || !blog || blog?.getBlog <= 0) {
    
  }

  return {
    title: blog?.getBlog?.metaTitle,
    description: blog?.getBlog?.metaDescription,
  }
}
const Page = async ({ params }: any) => {
  const blogSlug = params?.blogSlug

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
  return (
    <div>
      <BlogViewerComponent
        imgSrc={blogData?.getBlog?.thumbnail}
        heading={blogData?.getBlog?.heading}
        description={blogData?.getBlog?.description}
        created={blogData?.getBlog?.createdOn}
        id={blogData?.getBlog?.id}
        content={compressBase64ToJson(blogData?.getBlog?.content)}
      />

      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <MDXRemote source={compressBase64ToJson(blogData?.getBlog?.content)} />
      </div>

    </div>
  );
};

export default Page;



// export async function getStaticProps() {
//   const source = 'Some **mdx** text, with a component <Test />';
//   const mdxSource = await serialize(source);
//   console.log(mdxSource);

//   return {
//     revalidate: 60, // In seconds. Adjust as needed based on how frequently data changes.
//   };
// }