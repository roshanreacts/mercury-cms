"use client";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";
import Box from "@/components/dragableComponents/Box";
import Text from "@/components/dragableComponents/Text";
import Input from "@/components/dragableComponents/Input";
import Dropdown from "@/components/dragableComponents/Dropdown";
import TextArea from "@/components/dragableComponents/Textarea";
import List from "@/components/dragableComponents/List";
import Button from "@/components/dragableComponents/Button";
import { Toolbox } from "@/editor/Toolbox";
import { SettingsPanel } from "@/editor/SettingPanel";
import CustomImage from "@/components/dragableComponents/Image";
import From from "@/components/dragableComponents/Form";
import Anchor from "@/components/dragableComponents/Anchor";
import { useEffect, useState } from "react";
import EditorTopBar from "@/containers/EditorTopBar";
import { useParams, useSearchParams } from "next/navigation";
import { useLazyQuery } from "@/containers/hooks";
import { serverFetch } from "@/app/action";
import { GET_PAGE_CONTENT } from "@/utils/queries";
import { ToastErrorMessage } from "@/components/ToastMessage";
import { ToastContainer } from "react-toastify";
import { compressBase64ToJson } from "@/utils/methods";
import { BounceLoader } from "react-spinners";


const resolver = {
  Input,
  List,
  TextArea,
  Box,
  Text,
  Button,
  Dropdown,
  CustomImage,
  From,
  Anchor
};
let edit = false;
export const Editor = () => {
  const pageId = useParams().pageId;
  edit = useSearchParams().get("edit") === "true" ? true : false;
  const [getPageContent, { data, loading, error }] = useLazyQuery(serverFetch);
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    getPageContent(
      GET_PAGE_CONTENT,
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
    if (error) {
      ToastErrorMessage(error.message);
    }
    if (data) {
      const json = compressBase64ToJson(data.getPage.content);
      setPageContent(json)
    }
  }, [data, error, loading])

  useEffect(() => {
    console.log(pageContent);

  }, [pageContent])

  return (
    <div style={{ height: "100vh", width: "100%", overflowY: "scroll" }}>
      <ToastContainer />

      <CraftEditor
        enabled
        resolver={resolver}
        indicator={{
          success: "#2d9d78",
          error: "#e34850",
        }}
        onNodesChange={query => {
          const json = query.serialize()
        }}
      >
        <EditorTopBar edit={edit} pageId={pageId} />
        <div style={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
          {
            edit &&
            <div style={{ width: "auto", minWidth: "150px", backgroundColor: "#fff", padding: "20px", }}>
              <Toolbox />
            </div>
          }
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {loading ?
              <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
              }}>
                <BounceLoader color="#0177e8" size={50} />
              </div>
              :
              pageContent &&
              <Frame data={pageContent}>
                <Element is={Box} canvas height="100vh" width="auto" backgroundColor="#f7f7f7" overflowY="scroll">
                </Element>
              </Frame>
            }
          </div>
          {
            edit &&
            <div style={{ width: "auto", minWidth: "150px", backgroundColor: "white", padding: "20px" }}>
              <SettingsPanel />
            </div>
          }
        </div>
      </CraftEditor >
    </div >
  );
};
