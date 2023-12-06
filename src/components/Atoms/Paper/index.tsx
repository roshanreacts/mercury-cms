"use client";
import styled from "@emotion/styled";
import theme from "~/theme";

type PaperProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  placeItems?: string;
  flexWrap?: string;
  gap?: string;
  backgroundColor?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  padding?: number;
  margin?: number;
  elevation?: number;
  borderRadius?: number;
  overflowx?: string;
  overflowy?: string;
  position?: string; 
  top?: string; 
  left?: string; 
  right?: string; 
  bottom?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  mr?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  zindex?:number;
  [x: string]: any;
};

const Paper = styled.div<PaperProps>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  height: ${(props) => props.height || "100%"};
  padding-left : ${(props) => props.pl};
  padding-right : ${(props) => props.pr};
  padding-bottom : ${(props) => props.pb};
  padding-top : ${(props) => props.pt};
  margin-right: ${(props) => props.mr};
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  overflow-x: ${(props)=>props.overflowx};
  overflow-y: ${(props)=>props.overflowy};
  border-radius: ${(props) => props.borderRadius}px;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zindex};

  ${(props) =>
    props.padding && { padding: props.padding * props.theme.gutter }};
  ${(props) => props.margin && { margin: props.margin * props.theme.gutter }};
  ${(props) =>
    props.elevation && { boxShadow: theme.elevations[props.elevation] }};
  padding-left: ${(props) => props.pl}px;
  padding-right: ${(props) => props.pr}px;
  padding-top: ${(props) => props.pt}px;
  padding-bottom: ${(props) => props.pb}px;
  margin-left: ${(props) => props.ml}px;
  margin-right: ${(props) => props.mr}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;

  ${(props) =>
    props.display &&
    `display : ${props.display};
      flex-direction: ${props.flexDirection};
      justify-content: ${props.justifyContent};
      justify-items:${props.justifyItems};
      place-items:${props.placeItems};
      align-items: ${props.alignItems};
      flex-wrap: ${props.flexWrap};
      gap: ${props.gap};
    `}
`;

Paper.defaultProps = {
  backgroundColor: theme.colors.whiteA,
};

export default Paper;
