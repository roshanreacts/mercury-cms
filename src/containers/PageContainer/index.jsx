import React from 'react'
import PageForm from '@/components/PageForm'
import { useParams } from 'next/navigation';
let edit = false;

const PageContainer = () => {
    const [initialValues, setInitialValues] = useState({
        pageSlug: "",
        pageName: "",
        pageComponents: "",
        metaDescription: "",
        pagePath: "",
        status: "draft",
        version: "0.1",
        metaTitle: "",
    });


    const validationSchema = Yup.object().shape({
        pageSlug: Yup.string()
            .required("Page slug is required")
            .matches(/^(?![\s\S]*\s)[\S\s]*$/, "spaces not allowed"),
        pageName: Yup.string().required("Page Name is required"),
        pageComponents: Yup.string().required("Page Components are required"),
        metaDescription: Yup.string().required("Meta Description is required"),
        pagePath: Yup.string().required("Page Path is required"),
        version: Yup.string()
            .required("Version is required")
            .matches(/^[0-9]*\.?[0-9]+$/, "Only Numbers Are Accepted"),
    });

    const pageId = useParams().pageId;
    edit = useSearchParams().get("edit") === "true" ? true : false;
    return (
        <div>
            <PageForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                add={false}
                edit={edit}
                pageId={pageId}
                onSubmit={onSubmit}
                // loading={updatePageResponse.loading}
                handleDelete={handleDelete}
                timeStamp={timeStamp} />
        </div>
    )
}

export default PageContainer
