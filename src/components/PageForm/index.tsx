"use client";
import React, { useEffect, useRef } from "react";
import { RiFileAddLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
// import { formatDate } from "@/utils/methods";
import styled from "@emotion/styled";

// Styled components for each section

const StyledPageForm = styled.div`
  margin: 0 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
  
`;

const StyledFormContainer = styled.div`
  position: relative;
  padding: 1rem 2.5rem;
  background-color: white;
  margin: 0.8rem 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  margin-top: 2rem;
  width: 50%;
 
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  .icon-container {
    height: 3.8rem;
    width: 3.8rem;
    background-color: #007bea;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }

  .title-container {
    display: block;
    padding-left: 0.8rem;
    font-weight: bold;
    font-size: 1rem;
    color: #4a5568;
  }

  .action-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.8rem;

    .button-container {
      margin-bottom: 0.4rem;
      margin-right: 0.8rem;
    }
  }
`;

const StyledDateContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
  color: #718096;
  font-size: 1rem;
`;

const StyledForm = styled(Form)`
  margin-top: 1.6rem;
  text-align: left;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    background-color: #2d3748;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.9rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: transparent;
      color: #2d3748;
      border: 2px solid #2d3748;
    }
  }
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
`;

const StyledFieldContainer = styled.div`
  margin-top: 1.6rem;
  text-align: left;

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: bold;
    font-size: 1rem;
    color: #4a5568;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.8rem;
    font-size: 1rem;
    color: #4a5568;

    &:disabled {
      background-color: #f7fafc;
    }
  }

  textarea {
    resize: vertical;
  }

  .error-message {
    color: #e53e3e;
    font-size: 1rem;
  }
`;

const PageForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  add,
  edit,
  pageId,
  loading,
  handleDelete,
  timeStamp,
}: any) => {
  const formikRef = useRef();
  const router = useRouter();

  const handleUpdate = () => {
    console.log("update clicked");
    router.push("?edit=true");
  };

  return (
    <StyledPageForm>
      <StyledFormContainer>
        <StyledHeader>
          <div className="icon-container">
            <RiFileAddLine />
          </div>
          <div className="title-container">
            <h2>{add ? "Create Page" : edit ? "Update Page" : "View Page"}</h2>
          </div>
        </StyledHeader>

        {!add && (
          <StyledHeader>
            <div className="action-container">
              <div className="button-container">
                {/* Your DeleteConfirmPopup component here */}
              </div>
              {!edit && (
                <div className="button-container">
                  {/* Your ConfirmActionButton component here */}
                </div>
              )}
            </div>
          </StyledHeader>
        )}

        <StyledDateContainer>
          {!add && (
            <>
              <div>
                <span className="font-bold">Updated On :</span>{" "}
                {/* {formatDate(timeStamp?.updatedOn)} */}
              </div>
              <div>
                <span className="font-bold">Created On :</span>{" "}
                {/* {formatDate(timeStamp?.createdOn)} */}
              </div>
            </>
          )}
        </StyledDateContainer>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          //   innerRef={formikRef}
        >
          {({ touched, errors }) => (
            <StyledForm>
              <StyledButtonContainer>
                {add ? (
                  <button type="submit">
                    {loading ? <Loader size="small" type="info" /> : "Create"}
                  </button>
                ) : (
                  edit && (
                    <button type="submit">
                      {loading ? <Loader size="small" type="info" /> : "Update"}
                    </button>
                  )
                )}
              </StyledButtonContainer>
              <StyledGridContainer>
                <StyledFieldContainer>
                  <label htmlFor="pageName">Page Name</label>
                  <Field
                    type="text"
                    name="pageName"
                    disabled={!(add || edit)}
                    placeholder="Page Name"
                  />
                  <ErrorMessage
                    name="pageName"
                    component="div"
                    className="error-message"
                  />
                </StyledFieldContainer>
                <StyledFieldContainer>
                  <label htmlFor="metaTitle">Meta Title</label>
                  <Field
                    type="text"
                    name="metaTitle"
                    disabled={!(add || edit)}
                    placeholder="Meta Title"
                  />
                  <ErrorMessage
                    name="metaTitle"
                    component="div"
                    className="error-message"
                  />
                </StyledFieldContainer>
                <StyledFieldContainer>
                  <label htmlFor="pageSlug">Page Slug</label>
                  <Field
                    type="text"
                    name="pageSlug"
                    disabled={!(add || edit)}
                    placeholder="Page Slug"
                  />
                  <ErrorMessage
                    name="pageSlug"
                    component="div"
                    className="error-message"
                  />
                </StyledFieldContainer>
              </StyledGridContainer>

              <StyledFieldContainer>
                <label htmlFor="pageComponents">Page Components</label>

                <ErrorMessage
                  name="pageComponents"
                  component="div"
                  className="error-message"
                />
              </StyledFieldContainer>

              <StyledFieldContainer>
                <label htmlFor="metaDescription">Meta Description</label>
                <Field
                  as="textarea"
                  name="metaDescription"
                  disabled={!(add || edit)}
                  placeholder="Meta Description"
                  rows="5"
                />
                <ErrorMessage
                  name="metaDescription"
                  component="div"
                  className="error-message"
                />
              </StyledFieldContainer>

              <StyledGridContainer>
                <StyledFieldContainer>
                  <label htmlFor="pagePath">Page Path</label>
                  <Field
                    type="text"
                    name="pagePath"
                    disabled={!(add || edit)}
                    placeholder="Page Path"
                  />
                  <ErrorMessage
                    name="pagePath"
                    component="div"
                    className="error-message"
                  />
                </StyledFieldContainer>
                <StyledFieldContainer>
                  <label htmlFor="status">Status</label>
                  <Field
                    as="select"
                    name="status"
                    disabled={!(add || edit)}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                  </Field>
                </StyledFieldContainer>
                <StyledFieldContainer>
                  <label htmlFor="version">Version</label>
                  <Field
                    type="text"
                    name="version"
                    disabled={!(add || edit)}
                    placeholder="Version"
                  />
                  <ErrorMessage
                    name="version"
                    component="div"
                    className="error-message"
                  />
                </StyledFieldContainer>
              </StyledGridContainer>
            </StyledForm>
          )}
        </Formik>
      </StyledFormContainer>
    </StyledPageForm>
  );
};

export default PageForm;
