"use client";
import { useEditor, Element } from "@craftjs/core";
import React from "react";
import { AiOutlineCheck } from 'react-icons/ai';
import { CiCircleList, CiText } from 'react-icons/ci';
import { TbBoxModel2 } from "react-icons/tb";
import { BsTextareaT } from 'react-icons/bs'
import { RiInputCursorMove } from 'react-icons/ri';
import Button from "../components/Button";
import Text from "../components/Text";
import Box from "../components/Box";
import TextArea from "@/components/Textarea";
import List from "@/components/List";
import Input from "@/components/Input";
import styled from '@emotion/styled';
import Image from "@/components/Image";
import Form from "../components/Form";



const ToolboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #abb2bf;
  overflowY: scroll;
`;

const DragLabel = styled.p`
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const ToolboxButton = styled.button`
  padding: 10px 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
  background-color: #4a5568;
  color: #fff;
  transition: background-color 0.3s, color 0.3s;
  cursor: grab;


  &:hover {
    background-color: #2d3748;
    color: #cbd5e0;
  }
`;

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <ToolboxContainer>
      <DragLabel>Tool Box</DragLabel>
      <div>
        <ToolboxButton
          ref={(ref: any) =>
            connectors.create(ref, <Button text="Click me" size="small" />)
          }
          data-cy="toolbox-button"
        >
          <AiOutlineCheck /> Button
        </ToolboxButton>
      </div>

      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Text text="Here"/>)
        }
        data-cy="toolbox-button"
      >
        <CiText /> Text
      </ToolboxButton>
      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Element canvas is={Box} p="20px" backgroundColor="white" />)
        }
        data-cy="toolbox-container"
      >
        <TbBoxModel2 /> Box
      </ToolboxButton>
      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Element canvas is={TextArea} p="20px" />)
        }
        data-cy="toolbox-container"
      >
        <BsTextareaT /> TextArea
      </ToolboxButton>
      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Element canvas is={List} />)
        }
        data-cy="toolbox-container"
      >
        <CiCircleList /> List
      </ToolboxButton>
      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Element canvas is={Input} p="20px" />)
        }
        data-cy="toolbox-container"
      >
        <RiInputCursorMove /> Input
      </ToolboxButton>
      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Element canvas is={Image} p="20px" />)
        }
        data-cy="toolbox-container"
      >
        <RiInputCursorMove /> Image
      </ToolboxButton>
      <ToolboxButton
        ref={(ref: any) =>
          connectors.create(ref, <Element canvas is={Form} p="20px" backgroundColor="white"/>)
        }
        data-cy="toolbox-container"
      >
        <TbBoxModel2 /> Form
      </ToolboxButton>
    </ToolboxContainer>
  );
};
