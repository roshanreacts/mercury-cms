"use client";
import { Editor as CraftEditor, Frame, Element, useEditor, useNode } from "@craftjs/core";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import TextArea from "@/components/Textarea";
import List from "@/components/List";
import Button from "@/components/Button";
import { Toolbox } from "@/editor/Toolbox";
import { SettingsPanel } from "@/editor/SettingPanel";
import Image from "@/components/Image";
import From from "@/components/Form";
import Anchor from "@/components/Anchor";
import { useState } from "react";
import EditorActions from "@/containers/EditorActions";


const resolver = {
  Input,
  List,
  TextArea,
  Box,
  Text,
  Button,
  Dropdown,
  Image,
  From,
  Anchor
};

export const Editor = () => {
  const [uiJson, setUiJson] = useState("");




  return (
    <div style={{ height: "100vh", width: "97vw", overflowY: "scroll" }}>
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
        <EditorActions />
        <div style={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
          <div style={{ width: "auto", minWidth: "150px", backgroundColor: "#282c34", padding: "20px" }}>
            <Toolbox />
          </div>
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
          <div style={{ width: "auto", minWidth: "150px", backgroundColor: "#282c34", padding: "20px" }}>
            <SettingsPanel />
          </div>
        </div>
      </CraftEditor >
    </div >
  );
};
