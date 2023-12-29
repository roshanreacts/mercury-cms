"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";
import CopyComponentButton from "../CopyComponentButton";

type ButtonProps = {
  href?: string;
  target?: string;
  text?: string;
  onClick?: any;
  padding?: string;
  background?: string;
  color?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  cursor?: string;
  transition?: string;
  hoverBackground?: string;
  isSelected?: boolean;
  [x: string]: any;
  customCss?: any;
  classNames?: string;
};

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => props?.padding || "12px"};
  background: ${(props) => props?.background || "green"};
  color: ${(props) => props?.color || "white"};
  border: ${(props) => props?.border || "none"};
  border-radius: ${(props) => props?.borderRadius || "4px"};
  cursor: ${(props) => props?.cursor || "pointer"};
  font-size: ${(props) => props?.fontSize || "14px"};
  font-weight: ${(props) => props?.fontWeight || "bold"};
  transition: ${(props) => props?.transition || "background 0.3s ease"};
  ${(props) => props.customCss};
  ${(props) => props.isSelected && "border: 2px dashed red;"}
  &:hover {
    background: ${(props) => props?.hoverBackground || "darkgreen"};
  }
`;

const Button: React.FC<ButtonProps> = ({ ...props }: any) => {
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
    <div
      {...props}
      ref={(ref: any) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
      style={{
        position: "relative",
      }}
    >
      <CopyComponentButton isSelected={props?.isSelected} />
      {props?.href ? (
        <a href={props.href} target={props.target}>
          <StyledButton
            ref={connect}
            onClick={props.onClick}
            {...props}
            className={props?.classNames}
          >
            {props.text}
          </StyledButton>
        </a>
      ) : (
        <StyledButton
          ref={connect}
          onClick={props.onClick}
          {...props}
          className={props?.classNames}
        >
          {props.text}
        </StyledButton>
      )}
    </div>
  );
};

export const ButtonDefaultProps: ButtonProps = {
  text: "Click me",
  padding: "12px",
  background: "green",
  color: "white",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "background 0.3s ease",
  hoverBackground: "darkgreen",
};

export const ButtonSettings = () => {
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
          label: "Button Text",
        },
        padding: {
          type: "text",
          label: "Padding",
        },
        background: {
          type: "color",
          label: "Background Color",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
        borderRadius: {
          type: "text",
          label: "Border Radius",
        },
        fontSize: {
          type: "text",
          label: "Font Size",
        },
        fontWeight: {
          type: "text",
          label: "Font Weight",
        },
        border: {
          type: "text",
          label: "Border",
        },
        cursor: {
          type: "text",
          label: "Cursor",
        },
        transition: {
          type: "text",
          label: "Transition",
        },
        hoverBackground: {
          type: "color",
          label: "Hover Bg Color",
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
Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};

export default Button;
