"use client";
import React, { HTMLAttributes, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  color?: string;
  fontSize?: string;
}

const StyledText = styled.p<TextProps>`
  color: ${(props: TextProps) => props.color || "black"};
  font-size: ${(props: TextProps) => props.fontSize || "16px"};
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
