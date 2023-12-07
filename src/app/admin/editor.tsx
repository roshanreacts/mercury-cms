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
import StyledBox from "@/components/Atoms/StyledBox";
import { StyledButton } from "@/components/Atoms/StyledButton";
import { PiArrowBendUpLeftBold, PiArrowBendUpRightBold } from "react-icons/pi";
import { StyledText } from "@/components/Atoms/StyledText";
import { useState } from "react";
import Image from 'next/image'


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

export const Editor = () => {
  const [uiJson, setUiJson] = useState("");




  return (
    <div style={{ height: "100vh", width: "100%", overflowY: "scroll" }}>
      <StyledBox width="94vw" display="flex" justifyContent="space-between" alignItems="center" height="50px" gap="10px" ml="20px" mr="10px" mt="5px" mb="3px">
        <Image
          src="https://res.cloudinary.com/dagmm478n/image/upload/v1701852568/mercury-cms/mercury-logo_eyfwy6.png"
          alt="logo"
          width={170}
          height={40}
        />
        <StyledBox backgroundColor="white" display="flex" gap="6px" border="2px solid">
          <StyledButton width="55px" size="medium">
            <PiArrowBendUpLeftBold />
          </StyledButton>
          <StyledButton width="55px">
            <PiArrowBendUpRightBold />
          </StyledButton>
        </StyledBox>

        <StyledButton width="110px" background="#12B76A">
          <StyledText color="white" weight="large">Finish Editing</StyledText>
        </StyledButton>


      </StyledBox>
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
        {/* <EditorActions /> */}
        <div style={{ display: "flex", height: "100%", flexWrap: "wrap" }}>
          <div style={{ width: "auto", minWidth: "150px", backgroundColor: "#fff", padding: "20px", }}>
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
          <div style={{ width: "auto", minWidth: "150px", backgroundColor: "white", padding: "20px" }}>
            <SettingsPanel />
          </div>
        </div>
      </CraftEditor >
    </div >
  );
};
