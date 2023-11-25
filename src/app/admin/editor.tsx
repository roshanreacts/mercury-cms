"use client";
import { Editor as CraftEditor, Frame, Element } from "@craftjs/core";
import Box from "@/components/Box";
import Text from "@/components/Text";
import { Button } from "@/components/Button";
import { Toolbox } from "@/editor/Toolbox";
import { SettingsPanel } from "@/editor/SettingPanel";

const resolver = {
  Box,
  Text,
  Button,
};

export const Editor = () => {
  return (
    <CraftEditor
      enabled
      resolver={resolver}
      indicator={{
        success: "#2d9d78", // green
        error: "#e34850", // red
      }}
    >
      <Frame>
        <Element is={Box} canvas p="120px">
          <Box bgColor="white" p="50px" m="20px">
            <Text text="Hello World!" fontSize="35px" color="red" />
            <Button text="Click Me" />
          </Box>
        </Element>
      </Frame>
      <Toolbox />
      <SettingsPanel />
    </CraftEditor>
  );
};
