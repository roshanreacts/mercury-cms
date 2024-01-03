"use client";
import { useEditor, Element } from "@craftjs/core";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { CiCircleList, CiText } from "react-icons/ci";
import { TbBoxModel2 } from "react-icons/tb";
import { BsTextareaT } from "react-icons/bs";
import { RiInputCursorMove } from "react-icons/ri";
import Button from "../components/dragableComponents/Button";
import Text from "../components/dragableComponents/Text";
import Box from "../components/dragableComponents/Box";
import TextArea from "@/components/dragableComponents/Textarea";
import List from "@/components/dragableComponents/List";
import Input from "@/components/dragableComponents/Input";
import styled from "@emotion/styled";
import CustomImage from "@/components/dragableComponents/Image";
import Form from "../components/dragableComponents/Form";
import { FaWpforms } from "react-icons/fa6";
import Anchor from "@/components/dragableComponents/Anchor";
import { IoIosLink } from "react-icons/io";
import StyledBox from "@/components/Atoms/StyledBox";
import { StyledText } from "@/components/Atoms/StyledText";
import { Layers } from "@craftjs/layers"
import Carousel from "@/components/dragableComponents/Carousel";
import { TfiLayoutSlider } from "react-icons/tfi";


const ToolboxContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  padding: 10px;
  color: #abb2bf;
  overflowy: scroll;
  background-color: #fff;
  margin-top:20px
`;

const DragLabel = styled.p`
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const ToolboxButton = styled.button`
  padding:5px;
  width: 96px;
  height: 52px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #f8f8f8;
  color: #4e4b4b;
  transition: background-color 0.3s, color 0.3s;
  cursor: grab;

  &:hover {
    background-color: #4f607d;
    color: #fff;
  }
`;

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <StyledBox>
      <DragLabel>Tool Box</DragLabel>
      <ToolboxContainer>
        <div>
          <ToolboxButton
            ref={(ref: any) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            data-cy="toolbox-button"
          >
            <AiOutlineCheck /> <StyledText>Button</StyledText>
          </ToolboxButton>
        </div>

        <ToolboxButton
          ref={(ref: any) => connectors.create(ref, <Text text="Here" />)}
          data-cy="toolbox-button"
        >
          <CiText /><StyledText>Text</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(
              ref,
              <Element canvas is={Box} p="20px" backgroundColor="white" />
            )
          }
          data-cy="toolbox-container"
        >
          <StyledBox>
            <TbBoxModel2 />
          </StyledBox>
          <StyledText>Box</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(ref, <Element canvas is={TextArea} p="20px" />)
          }
          data-cy="toolbox-container"
        >
          <BsTextareaT /> <StyledText>Textarea</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(ref, <Element canvas is={List} />)
          }
          data-cy="toolbox-container"
        >
          <CiCircleList /> <StyledText>List</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(ref, <Element canvas is={Input} p="20px" />)
          }
          data-cy="toolbox-container"
        >
          <RiInputCursorMove /> <StyledText>Input</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(ref, <Element canvas is={CustomImage} p="20px" />)
          }
          data-cy="toolbox-container"
        >
          <RiInputCursorMove /> <StyledText>Image</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(
              ref,
              <Element canvas is={Form} p="20px" backgroundColor="white" />
            )
          }
          data-cy="toolbox-container"
        >
          <FaWpforms /> <StyledText>Form</StyledText>
        </ToolboxButton>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(
              ref,
              <Element
                canvas
                is={Anchor}
                href="#"
                p="20px"
                backgroundColor="white"
              />
            )
          }
          data-cy="toolbox-container"
        >
          <IoIosLink /> <StyledText>Anchor</StyledText>
        </ToolboxButton>

        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(
              ref,
              <Element
                canvas
                is={Carousel}
              />
            )
          }
          data-cy="toolbox-container"
        >
          <TfiLayoutSlider /><StyledText>Carousel</StyledText>
        </ToolboxButton>
      </ToolboxContainer>
      <DragLabel>Node Tree</DragLabel>
      <Layers />
    </StyledBox>
  );
};
