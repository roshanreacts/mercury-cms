"use client"
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import PageForm from '@/components/PageForm'
import { useParams, useRouter } from 'next/navigation';
import { useLazyQuery } from '../hooks';
import { serverFetch } from '@/app/action';
import { CREATE_PAGE } from '@/utils/queries';
import { ToastErrorMessage, ToastSuccessMessage } from '@/components/ToastMessage';

const AddPageContainer = () => {
    const router = useRouter();
    const [initialValues, setInitialValues] = useState({
        slug: "",
        name: "",
        content: "",
        metaDescription: "",
        path: "",
        status: "DRAFT",
        version: "0.1",
        metaTitle: "",
    });

    const [createPage, { data, loading, error }] = useLazyQuery(serverFetch);


    const validationSchema = Yup.object().shape({
        slug: Yup.string()
            .required("Page slug is required")
            .matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
        name: Yup.string().required("Page Name is required"),
        content: Yup.string(),
        metaDescription: Yup.string().required("Meta Description is required"),
        metaTitle: Yup.string().required("Meta Title is required"),
        path: Yup.string().required("Page Path is required"),
        version: Yup.string()
            .required("Version is required")
            .matches(/^[0-9]*\.?[0-9]+$/, "Only Numbers Are Accepted"),
    });

    const handlePageSubmit = (values: any) => {
        createPage(
            CREATE_PAGE,
            {
                "input": {
                    "author": "6571b407f3908e9fd9592c54",
                    "metaDescription": values.metaDescription,
                    "metaTitle": values.metaTitle,
                    "name": values.name,
                    "path": values.path,
                    "slug": values.slug,
                    "status": values.status,
                    "version": values.version
                }
            },
            {
                cache: "no-store"
            }
        )
    }

    useEffect(()=>{
        if(data){
            ToastSuccessMessage("Page Created Successfully!!");
            router.replace('/');
        }

        if(error){
            ToastErrorMessage(error.message);
        }
    }, [data, loading, error])

    const pageId = useParams().pageId;
    return (
        <div>
            <PageForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                add={true}
                edit={true}
                pageId={pageId}
                submitPage={handlePageSubmit}
                loading={loading}
            />
        </div>
    )
}

export default AddPageContainer
