import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";
import CopyComponentButton from "../CopyComponentButton";

type InputProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: number;
  color?: string;
  type?: string;
  textAlign?: string;
  placeholder?: string;
  value?: string;
  isSelected?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
  classNames?: string;
};

const StyledInput = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};

  ${(props) =>
    // props.display &&
    //   `display: ${props.display};
    //   flex-direction: ${props.flexDirection};
    //   justify-content: ${props.justifyContent};
    //   align-items: ${props.alignItems};
    //   flex-wrap: ${props.flexWrap};
    //   gap: ${props.gap};
    //   place-items: ${props.placeItems};
    //   grid-template-columns: ${props.gridTemplateColumns};
    // `

    props.isSelected && `border: 2px dashed red;`
  }
`;

const Input: React.FC<InputProps> = ({ onChange, ...props }: any) => {
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
      setProp((props: any) => props.isSelected = true)
      return;
    }

    setProp((props: any) => props.isSelected = false)

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref: any) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
      style={{
        position: 'relative'
      }}
    >

      <CopyComponentButton isSelected={props?.isSelected} />

      <StyledInput
        {...props}
        onChange={onChange}
        className={props?.classNames}
      />
    </div>
  );
};

export const InputDefaultProps: InputProps = {
  width: "200px",
  height: "40px",
  padding: "8px",
  margin: "0",
  fontSize: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  borderRadius: 4,
  color: "#000000",
  textAlign: "left",
  placeholder: "Enter text...",
  value: "",
};

const InputSettings = () => {
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
          label: "Tailwind Classes"
        },
        width: {
          type: "text",
          label: "Width",
        },
        height: {
          type: "text",
          label: "Height",
        },
        padding: {
          type: "text",
          label: "Padding",
        },
        margin: {
          type: "text",
          label: "Margin",
        },
        fontSize: {
          type: "text",
          label: "Font Size",
        },
        backgroundColor: {
          type: "color",
          label: "Background Color",
        },
        border: {
          type: "text",
          label: "Border",
        },
        borderRadius: {
          type: "text",
          label: "Border Radius",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
        textAlign: {
          type: "text",
          label: "Text Align",
        },
        placeholder: {
          type: "text",
          label: "Placeholder",
        },
      }}
      setProp={setProp}
    />
  );
};

//@ts-ignore
Input.craft = {
  props: InputDefaultProps,
  related: {
    settings: InputSettings,
  },
  // rules: {
  //   canDrop: (node: any) => {
  //     return node.data.displayName === "Form";
  //   }
  // }
};

export default Input;
