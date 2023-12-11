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
import { useState } from "react";
import EditorTopBar from "@/containers/EditorTopBar";
import { useParams, useSearchParams } from "next/navigation";


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
  const [uiJson, setUiJson] = useState("");
  const pageId = useParams().pageId;
  edit = useSearchParams().get("edit") === "true" ? true : false;

  return (
    <div style={{ height: "100vh", width: "100%", overflowY: "scroll" }}>

      <CraftEditor
        enabled
        resolver={resolver}
        indicator={{
          success: "#2d9d78",
          error: "#e34850",
        }}
        onNodesChange={query => {
          const json = query.serialize();
          setUiJson(json);
        }}
      >
        <EditorTopBar edit={edit} />
        <div style={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
          {
            edit &&
            <div style={{ width: "auto", minWidth: "150px", backgroundColor: "#fff", padding: "20px", }}>
              <Toolbox />
            </div>
          }
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Frame>
              <Element is={Box} canvas height="100vh" width="auto" backgroundColor="#f7f7f7" overflowY="scroll">
                <Box backgroundColor="white" p="50px" m="20px">
                  <Text text="Hello World!" fontSize="35px" color="red" />
                  <Button text="Click Me" />

                  <Input value="text" />
                </Box>
              </Element>
            </Frame>
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