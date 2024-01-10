"use client"
import { serverFetch } from '@/app/action';
import { ForwardRefEditor } from '@/components/CreateNewBlogComponent';
import { useLazyQuery } from '@/containers/hooks';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
  const blogId = useParams().id;

  const [getBlogContent, { data, loading, error }] = useLazyQuery(serverFetch);

  useEffect(() => {
    getBlogContent(
      ` query GetBlog($where: whereBlogInput!) {
        getBlog(where: $where) {
          id
          content
        }
      }`,
      {
        "where": {
          "id": {
            "is": blogId
          }
        }
      },
      {
        cache: "no-store"
      }
    )
  }, [])


  return (
    <div>
      {data?.getBlog && <ForwardRefEditor markdown={data?.getBlog?.content} readOnly={true} />}
    </div>
  )
}

export default page
