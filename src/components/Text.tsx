"use client";
import React, { HTMLAttributes, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  fontStyle?: string;
  fontWeight?: string;
  lineHeight?: string;
  textDecoration?: string;
  letterSpacing?: string;
  textTransform?: string;
  whiteSpace?: string;
  wordBreak?: string;
  wordWrap?: string;
  overflow?: string;
  margin?: string;
  padding?: string;
  cursor?: string;
  userSelect?: string;
  verticalAlign?: string;
  [x: string]: any;
}

const StyledText = styled.p<TextProps>`
color: ${(props: TextProps) => props.color || "black"};
font-size: ${(props: TextProps) => props.fontSize || "16px"};
text-align: ${(props: TextProps) => props.textAlign || "left"};
font-style: ${(props: TextProps) => props.fontStyle || "normal"};
font-weight: ${(props: TextProps) => props.fontWeight || "normal"};
line-height: ${(props: TextProps) => props.lineHeight || "normal"};
text-decoration: ${(props: TextProps) => props.textDecoration || "none"};
letter-spacing: ${(props: TextProps) => props.letterSpacing || "normal"};
text-transform: ${(props: TextProps) => props.textTransform || "none"};
white-space: ${(props: TextProps) => props.whiteSpace || "normal"};
word-break: ${(props: TextProps) => props.wordBreak || "normal"};
word-wrap: ${(props: TextProps) => props.wordWrap || "normal"};
overflow: ${(props: TextProps) => props.overflow || "visible"};
margin: ${(props: TextProps) => props.margin || "0"};
padding: ${(props: TextProps) => props.padding || "0"};
cursor: ${(props: TextProps) => props.cursor || "auto"};
user-select: ${(props: TextProps) => props.userSelect || "auto"};
vertical-align: ${(props: TextProps) => props.verticalAlign || "baseline"};
/* Add other CSS properties here */
`;

const Text: React.FC<TextProps> = ({ text, ...props }: any) => {
  // const {
  //   connectors: { connect, drag },
  //   selected,
  //   actions: { setProp },
  // } = useNode((state) => ({
  //   selected: state.events.selected,
  //   dragged: state.events.dragged,
  // }));
  // const [editable, setEditable] = useState(false);
  // useEffect(() => {
  //   if (selected) {
  //     return;
  //   }
  //   setEditable(false);
  // }, [selected]);

  return (
    // <div
    //   ref={(ref: any) => connect(drag(ref))}
    //   {...props}
    //   onClick={selected && setEditable(true)}
    // >
    <StyledText {...props}>{text}</StyledText>
    // </div>
  );
};

export default Text;
