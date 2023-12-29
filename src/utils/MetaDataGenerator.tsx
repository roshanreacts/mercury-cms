import { serverFetch } from '@/app/action'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const path = '/'
    const page = await serverFetch(`query GetPage($where: wherePageInput!) {
        getPage(where: $where) {
          id
          name
          metaDescription
          metaTitle
        }
      }`,
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