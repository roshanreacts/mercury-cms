"use client";
import styled from "@emotion/styled";
import theme from "~/theme";

type ButtonProps = {
  typea?: "outlined" | "contained" | "other";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | 'Canceld' | 'pending' | 'completed' | 'In Process' | "transit" | "placed" | "INPROCESS" | "IN_PROGRESS" | "PENDING" | "ACCEPTED" | "ISSUED" | any;
  color?: string;
  width?:string;
  height?:string;
  ml?:string;
  mr?:string;
  p?:string;
  pl?:string;
  pr?:string;
  display?:string;
  gap?:string;
  weight?:string;
  position?:string;
  top?:string;
  bottom?:string;
};

const getColor = (props: any) => {
  switch (props) {
    case "primary":
      return theme.colors.secondary
    case 'completed':
      return theme.colors.secondary
    case 'issued':
      return theme.colors.secondary
    case "secondary":
      return theme.colors.redA
    case "Canceld":
      return theme.colors.redA
    case 'PENDING':
      return theme.colors.orangeA
    case 'INPROCESS':
      return theme.colors.blueA
    case 'IN_PROGRESS':
      return theme.colors.blueA
    case "transit":
      return theme.colors.blueA
    case "placed":
      return theme.colors.yellowA
    case "transit":
      return theme.colors.blueA
    case "placed":
    return theme.colors.yellowA
    default:
      return theme.colors.secondary;
  }
};

export const Button = styled.button<ButtonProps>`
  color:  ${(props) => props.typea === "contained"
    ? props.theme.colors.whiteA
    : getColor(props.variant)};
    
  padding: ${(props) =>
    `${props.theme.gutter * 1}px ${props.theme.gutter * 2}px`};

  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  marginLeft:${(props) => props.ml};
  marginRight:${(props) => props.mr};
  padding:${(props) => props.p};
  paddingLeft:${(props) => props.pl};
  paddingRight:${(props) => props.pr};

  border: ${(props) => props.typea === "contained" ? 'none' : `1px solid ${getColor(props.variant)}`};
  display: ${(props) => props.display};
  gap:${(props) => props.gap};
  weight:${(props) => props.weight};
  position:${(props) => props.position};
  top:${(props) => props.top};
  bottom:${(props) => props.bottom};
  border: ${(props) => props.typea === "contained" ? 'none' : `2px solid ${getColor(props.variant)}`};

  background-color: ${(props) =>
    props.typea === "outlined"
      ? props.theme.colors.whiteA
      : getColor(props.variant)};

  ${(props) => props.size === "small" && `font-size: 12px;`}
  ${(props) => props.size === "medium" && `font-size: 14px;`}
  ${(props) => props.size === "large" && `font-size: 16px;`}
`;

Button.defaultProps = {
  typea: "contained",
  size: "medium",
  height: '40px'
};



