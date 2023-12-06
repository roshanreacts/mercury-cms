"use client"
import React, { useRef } from "react";
import { RiFileAddLine } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

// Styled components using Emotion
const StyledPageForm = styled.div`
  margin: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledFormContainer = styled.div`
  position: relative;
  padding: 1.6rem 2.5rem;
  background-color: white;
  margin: 0.8rem 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
`;

const IconContainer = styled.div`
  height: 2.8rem;
  width: 2.8rem;
  background-color: #2d3748;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`;

const TitleContainer = styled.div`
  display: block;
  padding-left: 0.8rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: #4a5568;
`;

const FieldContainer = styled.div`
  margin-top: 1.6rem;
  text-align: left;
  color: red;

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: bold;
    font-size: 1.4rem;
    color: #4a5568;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.8rem;
    font-size: 1.4rem;
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
    font-size: 1.2rem;
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

  const handleComponentEdit = (value: any) => {
    // formikRef?.current?.setFieldValue("pageComponents", value);
  };

  const handleUpdate = () => {
    console.log("update clicked");
    router.push("?edit=true");
  };

  return (
    <StyledPageForm>
      <StyledFormContainer>
        <div className="flex-container">
          <IconContainer>
            <RiFileAddLine />
          </IconContainer>
          <TitleContainer>
            <h2>{add ? "Create Page" : edit ? "Update Page" : "View Page"}</h2>
          </TitleContainer>
        </div>

        {/* {!add && (
          <div className="flex-container">
            <div className="action-container">
              <div className="button-container">
                <DeleteConfirmPopup
                  title={initialValues.pageName}
                  onConfirm={handleDelete}
                  type="Page"
                />
              </div>
              {!edit && (
                <div className="button-container">
                  <ConfirmActionButton
                    action="Edit"
                    para="Are you sure you want to"
                    onConfirm={handleUpdate}
                    type="info"
                  />
                </div>
              )}
            </div>
          </div>
        )} */}

        <div className="date-container">
          {/* {!add && (
            <>
              <div>
                <span className="font-bold">Updated On :</span>{" "}
                {formatDate(timeStamp?.updatedOn)}
              </div>
              <div>
                <span className="font-bold">Created On :</span>{" "}
                {formatDate(timeStamp?.createdOn)}
              </div>
            </>
          )} */}
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="button-container">
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
              </div>
              <div className="grid-container">
                <div className="field-container">
                  <label htmlFor="pageName">Page Name</label>
                  <Field
                    type="text"
                    name="pageName"
                    // disabled={!(add || edit)}
                    placeholder="Page Name"
                  />
                  <ErrorMessage
                    name="pageName"
                    component="div"
                    className="error-message"
                  />
                </div>
                {/* Rest of your fields */}
              </div>
            </Form>
          )}
        </Formik>
      </StyledFormContainer>
    </StyledPageForm>
  );
};

export default PageForm;
