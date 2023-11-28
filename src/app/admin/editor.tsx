"use client";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import TextArea from "@/components/Textarea";
import List from "@/components/List";
import { Button } from "@/components/Button";
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
  return (
    <div style={{ height: "100vh", width: "97vw", overflowY: "scroll" }}>
      <CraftEditor
        enabled
        resolver={resolver}
        indicator={{
          success: "#2d9d78", // green
          error: "#e34850", // red
        }}
      >
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ width: "200px", backgroundColor: "#e8e8e8", padding: "20px" }}>
            <Toolbox />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Frame>
              <Element is={Box} canvas p="120px">
                <Box backgroundColor="white" p="50px" m="20px">
                  <Text text="Hello World!" fontSize="35px" color="red" />
                  <Button text="Click Me" />
                  
                  <Input value="text"/>
                </Box>
              </Element>
            </Frame>
          </div>
          <div style={{ width: "auto", backgroundColor: "#e8e8e8", padding: "20px" }}>
            <h4>Setting Panel</h4>
            <SettingsPanel />
          </div>
        </div>
      </CraftEditor>
    </div>
  );
};
