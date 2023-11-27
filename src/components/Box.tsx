import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsCopmposer";

type BoxProps = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  gap?: string;
  placeItems?: string;
  backgroundColor?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  mr?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  overflowX?: string;
  overflowY?: string;
  borderRadius?: number;
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
  gridTemplateColumns?: string;
  [x: string]: any;
  children?: React.ReactNode;
};

const StyledBox = styled.div<BoxProps>`
  background: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  text-align: ${(props) => props.textAlign};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-top: ${(props) => props.pt};
  margin-right: ${(props) => props.mr};
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  border-radius: ${(props) => props.borderRadius}px;
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
    place-items: ${props.placeItems};
    grid-template-columns: ${props.gridTemplateColumns};
  `}
`;

const Box: React.FC<BoxProps> = ({ children, ...props }: any) => {
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
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref: any) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      <StyledBox {...props}>{children}</StyledBox>
    </div>
  );
};

export const BoxDefaultProps: BoxProps = {
  p: "30px",
  // Add default values for other BoxProps here
};

const BoxSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <SettingsWrapper
      settings={{
        p: {
          type: "text",
          label: "Padding",
        },
        m: {
          type: "text",
          label: "Margin",
        },
        bgColor: {
          type: "color",
          label: "Background Color",
        },
      }}
      setProp={setProp}
    />
  );
};

Box.craft = {
  props: BoxDefaultProps,
  related: {
    settings: BoxSettings,
  },
};

export default Box;
