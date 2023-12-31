import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";

type DropdownProps = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  width?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  border?: number;
  padding?: string;
  margin?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
  [x: string]: any;
  children?: React.ReactNode;
  classNames?: string;
};

const StyledDropdown = styled.div<DropdownProps>`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  width: ${(props) => props.width};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius}px;
  border: ${(props) => props.border}px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  children,
  ...props
}: any) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
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
      <StyledDropdown {...props} className={props?.classNames}>
        {options.map((option: any) => (
          <div
            key={option}
            onClick={() => onSelect(option)}
            style={{ cursor: "pointer" }}
          >
            {option}
          </div>
        ))}
      </StyledDropdown>
      {children}
    </div>
  );
};

export const DropdownDefaultProps: DropdownProps = {
  options: [],
  selectedOption: "",
  onSelect: () => { },
  width: "200px",
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: 4,
  border: 1,
  padding: "10px",
  margin: "0",
  position: "relative",
  zIndex: "1",
};

const DropdownSettings = () => {
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
        backgroundColor: {
          type: "color",
          label: "Background Color",
        },
        color: {
          type: "color",
          label: "Text Color",
        },
        borderRadius: {
          type: "number",
          label: "Border Radius",
        },
        border: {
          type: "number",
          label: "Border Width",
        },
        padding: {
          type: "text",
          label: "Padding",
        },
        margin: {
          type: "text",
          label: "Margin",
        },
      }}
      setProp={setProp}
    />
  );
};

//@ts-ignore
Dropdown.craft = {
  props: DropdownDefaultProps,
  related: {
    settings: DropdownSettings,
  },
};

export default Dropdown;
