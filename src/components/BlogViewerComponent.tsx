"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill, RiTimer2Line } from "react-icons/ri";
import serialize  from 'next-mdx-remote'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

const BlogViewerComponent = ({
  imgSrc,
  heading,
  description,
  created,
  id,
  content,
}: any) => {
  const router = useRouter();

  const [mdx, setMdx] = useState<MDXRemoteSerializeResult>()
  useEffect(() => {
    (async () => {
      try {
        const mdxContent = await serialize(content);
        setMdx(mdxContent);
      } catch (error) {
        console.error('Error serializing MDX content:', error);
      }
    })();
  }, [content]);
  
  return (
    <div className="mt-8">
      <div className="relative flex flex-col gap-6">
        <div className="absolute top-2 left-28">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-800"
          >
            <span className="flex justify-center items-center gap-2">
              <RiArrowGoBackFill className="text-gray h-3 w-3" />
              Back
            </span>
          </button>
        </div>

        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-l from-transparent to-gray-600"></div>
            <img
              src={imgSrc}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-lg"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h1 className="px-4 py-1 bg-transparent text-gray-200 inline-flex items-center justify-center mb-2 text-3xl font-semibold">
                {heading}
              </h1>
              <h2 className="px-4 py-1 text-xl font-semibold text-gray-100 leading-tight">
                {description}
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm"> Admin </p>
                  <h6 className="flex justify-center items-center gap-1 text-gray-200">
                    <RiTimer2Line />
                    {new Date(created)
                      .toDateString()
                      .split(" ")
                      .slice(1)
                      .join(" ")}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {mdx && <MDXRemote {...mdx} />}

          {/* <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">
              Advantage old had otherwise sincerity dependent additions. It in
              adapted natural hastily is justice. Six draw you him full not mean
              evil. Prepare garrets it expense windows shewing do an. She
              projection advantages resolution son indulgence. Part sure on no
              long life am at ever. In songs above he as drawn to. Gay was
              outlived peculiar rendered led six.
            </p>

            <p className="pb-6">
              Difficulty on insensible reasonable in. From as went he they.
              Preference themselves me as thoroughly partiality considered on in
              estimating. Middletons acceptance discovered projecting so is so
              or. In or attachment inquietude remarkably comparison at an. Is
              surrounded prosperous stimulated am me discretion expression. But
              truth being state can she china widow. Occasional preference fat
              remarkably now projecting uncommonly dissimilar. Sentiments
              projection particular companions interested do at my delightful.
              Listening newspaper in advantage frankness to concluded unwilling.
            </p>

            <p className="pb-6">
              Adieus except say barton put feebly favour him. Entreaties
              unpleasant sufficient few pianoforte discovered uncommonly ask.
              Morning cousins amongst in mr weather do neither. Warmth object
              matter course active law spring six. Pursuit showing tedious
              unknown winding see had man add. And park eyes too more him.
              Simple excuse active had son wholly coming number add. Though all
              excuse ladies rather regard assure yet. If feelings so prospect no
              as raptures quitting.
            </p>

            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Sportsman do offending supported extremity breakfast by listening.
              Decisively advantages nor expression unpleasing she led met.
              Estate was tended ten boy nearer seemed. As so seeing latter he
              should thirty whence. Steepest speaking up attended it as. Made
              neat an on be gave show snug tore.
            </div>

            <p className="pb-6">
              Exquisite cordially mr happiness of neglected distrusts.
              Boisterous impossible unaffected he me everything. Is fine loud
              deal an rent open give. Find upon and sent spot song son eyes. Do
              endeavor he differed carriage is learning my graceful. Feel plan
              know is he like on pure. See burst found sir met think hopes are
              marry among. Delightful remarkably new assistance saw literature
              mrs favourable.
            </p>
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default BlogViewerComponent;
