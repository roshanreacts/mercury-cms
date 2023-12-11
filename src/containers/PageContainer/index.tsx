'use client'
import React, { useState, useEffect } from 'react'
import PageForm from '@/components/PageForm'
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';
import { serverFetch } from '@/app/action';
import { useLazyQuery } from '../hooks';
import { DELETE_PAGE, GET_PAGE, UPDATE_PAGE } from '@/utils/queries';
import { ToastErrorMessage, ToastSuccessMessage } from '@/components/ToastMessage';
import { ToastContainer } from 'react-toastify'


let edit = false;

const PageContainer = () => {
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

    const [timeStamp, setTimeStamp] = useState({});
    const router = useRouter();
    const [getPage, { data, loading, error }] = useLazyQuery(serverFetch);
    const [updatePage, updatePageResponse] = useLazyQuery(serverFetch);
    const [deletePage, deletePageResponse] = useLazyQuery(serverFetch);

    const validationSchema = Yup.object().shape({
        slug: Yup.string()
            .required("Page slug is required")
            .matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
        name: Yup.string().required("Page Name is required"),
        metaTitle: Yup.string().required("Meta Title is required"),
        metaDescription: Yup.string().required("Meta Description is required"),
        path: Yup.string().required("Page Path is required"),
        version: Yup.string()
            .required("Version is required")
            .matches(/^[0-9]*\.?[0-9]+$/, "Only Numbers Are Accepted"),
    });

    const pageId = useParams().pageId;
    edit = useSearchParams().get("edit") === "true" ? true : false;


    useEffect(() => {
        getPage(
            GET_PAGE,
            {
                "where": {
                    "id": {
                        "is": pageId
                    }
                }
            },
            {
                cache: "no-store"
            }
        )
    }, [])


    useEffect(() => {
        if (data) {
            setInitialValues(data.getPage);
            setTimeStamp({
                createdOn: data.getPage.createdOn,
                updatedOn: data.getPage.updatedOn
            })
        }
        if (error) {
            ToastErrorMessage(error.message);
        }
    }, [data, loading, error]);

    const handlePageSubmit = (values: any) => {
        console.log(pageId);
        updatePage(
            UPDATE_PAGE,
            {
                input: {
                    id: pageId,
                    name: values.name,
                    slug: values.slug,
                    metaDescription: values.metaDescription,
                    path: values.path,
                    status: values.status,
                    version: values.version,
                    metaTitle: values.metaTitle,
                }
            },
            {
                cache: "no-store"
            }
        )
    }

    useEffect(() => {
        if (updatePageResponse.data) {
            ToastSuccessMessage("Updated Successfully!!");
            router.push("?edit=false")
        }

        if (updatePageResponse.error) {
            ToastErrorMessage(updatePageResponse.error.message);
        }
    }, [updatePageResponse.data, updatePageResponse.loading, updatePageResponse.error])

    const handleDelete = () => {
        deletePage(
            DELETE_PAGE,
            {
                "deletePageId": pageId
            },
            {
                cahce: "no-store"
            }
        )
    }

    useEffect(() => {
        if (deletePageResponse.data) {
            ToastSuccessMessage("Deleted Successfully!!");
            router.replace("/")
        }

        if (deletePageResponse.error) {
            ToastErrorMessage(deletePageResponse.error.message);
        }
    }, [deletePageResponse.data, deletePageResponse.loading, deletePageResponse.error])

    useEffect(() => {

    }, [initialValues])


    return (
        <div>
            <ToastContainer />
            {
                initialValues.name ?
                    <PageForm
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        add={false}
                        edit={edit}
                        pageId={pageId}
                        loading={loading || updatePageResponse.loading || deletePageResponse.loading}
                        handleDelete={handleDelete}
                        timeStamp={timeStamp}
                        submitPage={handlePageSubmit}
                    />
                    :
                    null
            }
        </div>
    )
}

export default PageContainer
