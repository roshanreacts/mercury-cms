import { GET_PAGE, GET_PAGE_METADATA } from '@/utils/queries';
import { redirect } from 'next/navigation';
import React from 'react'
import { serverFetch } from './action';
import RenderPage from '@/containers/RenderPage';
import { compressBase64ToJson } from '@/utils/methods';
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const path = '/'
    const page = await serverFetch(GET_PAGE_METADATA,
        {
            where: {
                path: { is: path }
            }
        },
        {
            cache: "no-store"
        }
    )

    if (page.error || !page) {
        console.log(page.error);
    }

    return {
        title: page?.getPage?.metaTitle,
        description: page?.getPage?.metaDescription,
    }
}

const page = async () => {

    const data = await serverFetch(GET_PAGE, { where: { path: { is: "/" } } }, { cache: "no-store" });

    if (data.error || !data) {
        redirect('/404');
    }

    const content = compressBase64ToJson(data?.getPage?.content)

    return (

        <div>
            <RenderPage content={content} />
        </div>
    )
}

export default page
