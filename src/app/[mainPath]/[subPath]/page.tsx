import { GET_PAGE } from '@/utils/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import RenderPage from '@/containers/RenderPage';
import { compressBase64ToJson } from '@/utils/methods';
import { serverFetch } from '@/app/action';
import Head from 'next/head';
const page = async ({ params }: any) => {
    const data = await serverFetch(GET_PAGE, { where: { path: { is: `/${params?.mainPath}/${params?.subPath}` } } }, { cache: "no-store" });

    if (!data?.getPage) {
        redirect('/404');
    }
    const content = compressBase64ToJson(data?.getPage?.content)

    return (
        <div>
            <Head>
                <title>{data?.getPage?.metaTitle}</title>
                <meta property="og:title" content={data?.getPage?.metaTitle} key="title" />
                <meta name="description" content={data?.getPage?.metaDescription} />
            </Head>
            <RenderPage content={content} />
        </div>
    )
}

export default page
