"use client";
import styled from "@emotion/styled";
import { SerializedStyles } from "@emotion/react";

type TextProps = {
  size?: "small" | "medium" | "large" | "xlarge" | 'xxlarge' | 'xxxlarge';
  weight?: "small" | "medium" | "large" | "xlarge" | 'xxlarge' |'xxxlarge';
  padding?:string;
  margin?:string;
  color?: string;
  css?: SerializedStyles;
  width?:string;
  height?:string;
  textAlign?:string;
};

export const StyledText = styled.span<TextProps>`
  ${(props) => props.size === "small" && `font-size: 12px;`}
  ${(props) => props.size === "medium" && `font-size: 14px;`}
  ${(props) => props.size === "large" && `font-size: 16px;`}
  ${(props) => props.size === "xlarge" && `font-size: 20px;`}
  ${(props) => props.size === "xxlarge" && `font-size: 26px;`}
  ${(props) => props.size === "xxxlarge" && `font-size: 36px;`}

  ${(props) => props.weight === "small" && `font-weight: 200;`}
  ${(props) => props.weight === "medium" && `font-weight: 400;`}
  ${(props) => props.weight === "large" && `font-weight: 600;`}
  ${(props) => props.weight === "xlarge" && `font-weight: 700;`}
  ${(props) => props.weight === "xxlarge" && `font-weight: 800;`}
  ${(props) => props.weight === "xxxlarge" && `font-weight: 900;`}

  ${(props) => props.css}
  
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  heigth: ${(props) => props.height};
`;

StyledText.defaultProps = {
  size: "medium",
  padding: '4px',
  color: 'black',
};