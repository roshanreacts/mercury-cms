"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";

type TextAreaProps = {
  backgroundColor?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  borderRadius?: number;
  border?: number;
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
  rows?: number;
  cols?: number;
  resize?: string;
  children?: React.ReactNode;
  // customCss?: any;
  [x: string]: any;
};

const StyledTextArea = styled.textarea<TextAreaProps>`
  background: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius}px;
  border: ${(props) => props.border}px;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  resize: ${(props) => props.resize};

  ${(props) =>
    props.display &&
    `display: ${props.display};
    flex-direction: ${props.flexDirection};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    flex-wrap: ${props.flexWrap};
    gap: ${props.gap};
    place-items: ${props.placeItems};
    grid-template-columns: ${props.gridTemplateColumns};
    `}
    `;

const TextArea: React.FC<TextAreaProps> = ({ children, ...props }: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      setProp((props: any) => props.isSelected = true)
      return;
    }

    setProp((props: any) => props.isSelected = false)
    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref: any) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      <StyledTextArea ref={connect}
        onClick={props.onClick} {...props}>{children}</StyledTextArea>
    </div>
  );
};

export const TextAreaDefaultProps: TextAreaProps = {
  rows: 4,
  cols: 50,
  padding: "10px",
  borderRadius: 4,
  resize: "vertical",
};

const TextAreaSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <SettingsWrapper
      defaultValues={props}
      settings={{
        padding: {
          type: "text",
          label: "Padding",
        },
        margin: {
          type: "text",
          label: "Margin",
        },
        backgroundColor: {
          type: "color",
          label: "Background Color",
        },
      }}
      setProp={setProp}
    />
  );
};

TextArea.craft = {
  props: TextAreaDefaultProps,
  related: {
    settings: TextAreaSettings,
  },
  // rules: {
  //   canDrop: (node: any) => {
  //     return node.data.displayName === "Form";
  //   }
  // }
};

export default TextArea;