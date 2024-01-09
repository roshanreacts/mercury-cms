import { GET_PAGE, GET_PAGE_METADATA } from '@/utils/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import RenderPage from '@/containers/RenderPage';
import { compressBase64ToJson } from '@/utils/methods';
import { serverFetch } from '@/app/action';
import Head from 'next/head'; import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { mainPath: string, subPath: string } }): Promise<Metadata> {
    const path = `/${params?.mainPath}/${params?.subPath}`
    const page = await serverFetch(GET_PAGE_METADATA,
        {
            where: {
                path: { is: path }
            },
            "status": "ACTIVE"
        },
        {
            cache: "no-store"
        }
    )

    if (page.error || !page || page.listPages?.docs.length <= 0) {
        // console.log(page.error);
    }

    return {
        title: page?.getPage?.metaTitle,
        description: page?.getPage?.metaDescription,
    }
}


const page = async ({ params }: any) => {
    const data = await serverFetch(GET_PAGE, { where: { path: { is: `/${params?.mainPath}/${params?.subPath}` }, "status": "ACTIVE" } }, { cache: "no-store" });

    if (data.error || !data || data.listPages?.docs.length <= 0) {
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
