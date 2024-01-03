import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";
import CopyComponentButton from "../CopyComponentButton";

type BoxProps = {
  href?: string;
  target?: string;
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
  p?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  mr?: string;
  m?: string;
  mt?: string;
  ml?: string;
  mb?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  borderRadius?: number;
  border?: number;
  textAlign?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
  gridTemplateColumns?: string;
  color?: string;
  [x: string]: any;
  children?: React.ReactNode;
  customCss?: any;
  classNames?: string;
  backgroundImage?: string;
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
  padding: ${(props) => props.p};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-top: ${(props) => props.pt};
  margin-right: ${(props) => props.mr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  color: ${(props) => props.color};
  ${(props) => props.customCss};
  ${(props) => props.backgroundImage && `background-image: url(${props.backgroundImage});`};

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
  ${(props) => props.isSelected && "border: 2px dashed red;"}
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
      setProp((props: any) => (props.isSelected = true));
      return;
    }

    setProp((props: any) => (props.isSelected = false));
    setEditable(false);
  }, [selected]);

  return (
    <>

      {props.href ? (
        <a href={props.href} target={props.target}>
          <CopyComponentButton isSelected={props?.isSelected} />

          <StyledBox {...props} className={props?.classNames} ref={(ref: any) => connect(drag(ref))}
            onClick={() => selected && setEditable(true)}>
            {children}
          </StyledBox>
        </a>
      ) : (
        <StyledBox {...props} className={props?.classNames} ref={(ref: any) => connect(drag(ref))}
          onClick={() => selected && setEditable(true)}>
          <CopyComponentButton isSelected={props?.isSelected} />
          {children}
        </StyledBox>
      )}
    </>
  );
};

export const BoxDefaultProps: BoxProps = {
  isSelected: true,
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
      defaultValues={props}
      settings={{
        classNames: {
          type: "textarea",
          label: "Tailwind Classes",
        },
        href: {
          type: "text",
          label: "Link URL",
        },
        target: {
          type: "select",
          label: "Target",
          options: ["_blank", "_self", "_parent", "_top"],
        },
        display: {
          type: "select",
          label: "Display",
          options: ["block", "inline", "flex", "grid", "inline-block", "none"],
        },
        flexDirection: {
          type: "select",
          label: "Flex Direction",
          options: ["row", "row-reverse", "column", "column-reverse"],
        },
        justifyContent: {
          type: "select",
          label: "Justify Content",
          options: [
            "flex-start",
            "flex-end",
            "center",
            "space-between",
            "space-around",
            "space-evenly",
          ],
        },
        alignItems: {
          type: "select",
          label: "Align Items",
          options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
        },
        flexWrap: {
          type: "select",
          label: "Flex Wrap",
          options: ["nowrap", "wrap", "wrap-reverse"],
        },
        gap: {
          type: "text",
          label: "Gap",
        },
        backgroundColor: {
          type: "color",
          label: "Background Color",
        },
        backgroundImage: {
          type: "text",
          label: "Background Image",
        },
        placeItems: {
          type: "text",
          label: "Place Items",
        },

        color: {
          type: "color",
          label: "Text Color",
        },
        width: {
          type: "text",
          label: "Width",
        },
        minWidth: {
          type: "text",
          label: "Min Width",
        },
        maxWidth: {
          type: "text",
          label: "Max Width",
        },
        height: {
          type: "text",
          label: "Height",
        },
        minHeight: {
          type: "text",
          label: "Min Height",
        },
        maxHeight: {
          type: "text",
          label: "Max Height",
        },
        pl: {
          type: "text",
          label: "Padding Left",
        },
        p: {
          type: "text",
          label: "Padding",
        },
        pr: {
          type: "text",
          label: "Padding Right",
        },
        pb: {
          type: "text",
          label: "Padding Bottom",
        },
        pt: {
          type: "text",
          label: "Padding Top",
        },
        mr: {
          type: "text",
          label: "Margin Right",
        },
        m: {
          type: "text",
          label: "Margin",
        },
        mt: {
          type: "text",
          label: "Margin Top",
        },
        ml: {
          type: "text",
          label: "Margin Left",
        },
        mb: {
          type: "text",
          label: "Margin Bottom",
        },
        overflow: {
          type: "select",
          label: "Overflow",
          options: ["visible", "hidden", "scroll", "auto"],
        },
        overflowX: {
          type: "select",
          label: "Overflow X",
          options: ["visible", "hidden", "scroll", "auto"],
        },
        overflowY: {
          type: "select",
          label: "Overflow Y",
          options: ["visible", "hidden", "scroll", "auto"],
        },
        borderRadius: {
          type: "text",
          label: "Border Radius",
        },
        border: {
          type: "text",
          label: "Border",
        },
        textAlign: {
          type: "select",
          label: "Text Align",
          options: ["left", "center", "right"],
        },
        position: {
          type: "select",
          label: "Position",
          options: ["relative", "absolute", "fixed"],
        },
        top: {
          type: "text",
          label: "Top",
        },
        left: {
          type: "text",
          label: "Left",
        },
        right: {
          type: "text",
          label: "Right",
        },
        bottom: {
          type: "text",
          label: "Bottom",
        },
        zIndex: {
          type: "text",
          label: "Z-Index",
        },
        gridTemplateColumns: {
          type: "text",
          label: "Grid Temp Col",
        },
        customCss: {
          type: "textarea",
          label: "Custom CSS",
        },
      }}
      setProp={setProp}
    />
  );
};

//@ts-ignore
Box.craft = {
  props: BoxDefaultProps,
  related: {
    settings: BoxSettings,
    rules: {
      canDrag: () => true,
    },
  },
};

export default Box;
