"use client";
import { Editor as CraftEditor, Frame, Element, useEditor } from "@craftjs/core";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import TextArea from "@/components/Textarea";
import List from "@/components/List";
import Button from "@/components/Button";
import { Toolbox } from "@/editor/Toolbox";
import { SettingsPanel } from "@/editor/SettingPanel";

const resolver = {
  Input,
  List,
  TextArea,
  Box,
  Text,
  Button,
  Dropdown,
};

export const Editor = () => {

  const SaveButton = () => {
    const { query } = useEditor();
    console.log(query.serialize())
    return <a onClick={() => console.log(query.serialize())}>Get JSON</a>
  }
  
  return (
    <div style={{ height: "100vh", width: "97vw", overflowY: "scroll" }}>
      <CraftEditor
        enabled
        resolver={resolver}
        indicator={{
          success: "#2d9d78",
          error: "#e34850",
        }}
      >
        <div style={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
          <div style={{ width: "auto", minWidth: "150px", backgroundColor: "#282c34", padding: "20px" }}>
            <Toolbox />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <button onClick={SaveButton}>Save State</button>
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
