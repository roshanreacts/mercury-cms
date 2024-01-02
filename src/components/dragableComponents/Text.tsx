"use client";
import React, { HTMLAttributes, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";
import CopyComponentButton from "../CopyComponentButton";

type TextProps = {
  href?: string;
  target?: string;
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
  verticalAlign?: string;
  fontFamily?: string;
  customCss?: any;
  [x: string]: any;
  classNames?: string;
};

const StyledText = styled.p<TextProps>`
  color: ${(props: TextProps) => props.color};
  target: ${(props: TextProps) => props.target};
  font-size: ${(props: TextProps) => props.fontSize};
  text-align: ${(props: TextProps) => props.textAlign};
  font-style: ${(props: TextProps) => props.fontStyle};
  font-weight: ${(props: TextProps) => props.fontWeight};
  line-height: ${(props: TextProps) => props.lineHeight};
  text-decoration: ${(props: TextProps) => props.textDecoration};
  letter-spacing: ${(props: TextProps) => props.letterSpacing};
  text-transform: ${(props: TextProps) => props.textTransform};
  white-space: ${(props: TextProps) => props.whiteSpace};
  word-break: ${(props: TextProps) => props.wordBreak};
  word-wrap: ${(props: TextProps) => props.wordWrap};
  overflow: ${(props: TextProps) => props.overflow};
  margin: ${(props: TextProps) => props.margin};
  padding: ${(props: TextProps) => props.padding};
  cursor: ${(props: TextProps) => props.cursor};
  vertical-align: ${(props: TextProps) => props.verticalAlign};
  isselected: ${(props) => props.isSelected};
  font-family: ${(props) => props.fontFamily};
  background-color: ${(props) => props.backgroundColor};
  ${(props) => props.customCss};

  ${(props) => props.isSelected && `border: 2px dashed red;`}
`;
const Text: React.FC<TextProps> = ({ ...props }: any) => {
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
      <CopyComponentButton isSelected={props?.isSelected} />
      {props.href ? (
        <a href={props.href} target={props.target}>
          <StyledText
            ref={(ref: any) => connect(drag(ref))}
            onClick={() => selected && setEditable(true)}
            {...props}
            className={props?.classNames}
          >
            {props.text}
          </StyledText>
        </a>
      ) : (
        <StyledText
          ref={(ref: any) => connect(drag(ref))}
          onClick={() => selected && setEditable(true)}
          {...props}
          className={props?.classNames}
        >
          {props.text}
        </StyledText>
      )}
    </>
  );
};

export const TextDefaultProps: TextProps = {
  text: "Your Text Here",
};

export const TextSettings = () => {
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
        text: {
          type: "text",
          label: "Text",
        },
        fontFamily: {
          type: "text",
          label: "Font Family",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
        fontSize: {
          type: "text",
          label: "Font Size",
        },
        backgroundColor: {
          type: "color",
          label: "Background Color",
        },
        textAlign: {
          type: "select",
          label: "Text Align",
          options: ["left", "center", "right"],
        },
        fontStyle: {
          type: "select",
          label: "Font Style",
          options: ["normal", "italic", "oblique"],
        },
        fontWeight: {
          type: "text",
          label: "Font Weight",
        },
        lineHeight: {
          type: "text",
          label: "Line Height",
        },
        textDecoration: {
          type: "select",
          label: "Text Decoration",
          options: ["none", "underline", "overline", "line-through"],
        },
        letterSpacing: {
          type: "text",
          label: "Letter Spacing",
        },
        textTransform: {
          type: "select",
          label: "Text Transform",
          options: ["none", "uppercase", "lowercase", "capitalize"],
        },
        whiteSpace: {
          type: "select",
          label: "White Space",
          options: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
        },
        wordBreak: {
          type: "select",
          label: "Word Break",
          options: ["normal", "break-all", "keep-all"],
        },
        wordWrap: {
          type: "select",
          label: "Word Wrap",
          options: ["normal", "break-word"],
        },
        overflow: {
          type: "select",
          label: "Overflow",
          options: ["visible", "hidden", "scroll", "auto"],
        },
        margin: {
          type: "text",
          label: "Margin",
        },
        padding: {
          type: "text",
          label: "Padding",
        },
        cursor: {
          type: "text",
          label: "Cursor",
        },
        userSelect: {
          type: "select",
          label: "User Select",
          options: ["auto", "none", "text", "all", "contain"],
        },
        verticalAlign: {
          type: "text",
          label: "Vertical Align",
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
Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};

export default Text;
