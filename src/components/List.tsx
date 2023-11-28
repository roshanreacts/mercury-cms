import React from "react";
import styled from "@emotion/styled";

type ListProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  borderRadius?: number;
  border?: number;
  listStyleType?: string;
  listStyleImage?: string;
  listStylePosition?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
  children?: React.ReactNode;
};

const StyledList = styled.ul<ListProps>`
  list-style-type: ${(props) => props.listStyleType};
  list-style-image: ${(props) => props.listStyleImage};
  list-style-position: ${(props) => props.listStylePosition};
  background: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius}px;
  border: ${(props) => props.border}px;
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};

  ${(props) =>
    props.display &&
    `display: ${props.display};
    flex-direction: ${props.flexDirection};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    flex-wrap: ${props.flexWrap};
    gap: ${props.gap};
  `}
`;

const List: React.FC<ListProps> = ({ children, ...props }: any) => {
  return <StyledList {...props}>{children}</StyledList>;
};

export const ListDefaultProps: ListProps = {
  listStyleType: "none",
  padding: "0",
  // Add default values for other ListProps here
};

export default List;
