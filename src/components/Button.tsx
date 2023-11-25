"use client";
import { useNode } from "@craftjs/core";
import React, { useEffect, useState } from "react";

export const Button = ({
  size,
  variant,
  color,
  text,
  onClick,
  ...props
}: {
  size?: any;
  variant?: string;
  color?: string;
  text?: string;
  onClick?: any;
  props?: any;
}) => {
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
      <CustomButton
        ref={connect}
        style={{ margin: "5px" }}
        size={size}
        onClick={onClick}
        {...props}
      >
        {text}
      </CustomButton>
    </div>
  );
};

export const CustomButton = React.forwardRef(
  ({
    ref,
    style,
    children,
    size,
    onClick,
    ...props
  }: {
    ref?: React.Ref<HTMLButtonElement>;
    style?: any;
    children?: any;
    size?: any;
    onClick?: any;
  }) => {
    return (
      <button
        ref={ref}
        {...props}
        type="button"
        style={{
          padding: `${
            size === "small"
              ? "4px"
              : size === "medium"
              ? "6px"
              : size === "large"
              ? "14px"
              : "4px"
          }`,
          background: "green",
          zIndex: "9999",
          ...style,
        }}
        onClick={(e: any) => {
          onClick && onClick();
        }}
      >
        {children}
      </button>
    );
  }
);

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <form>
        <fieldset
          id="size"
          onChange={(e: any) =>
            setProp((props: any) => (props.size = e.target.value))
          }
        >
          <label>Size</label>
          <input type="radio" value="small" name="size" />
          <input type="radio" value="medium" name="size" />
          <input type="radio" value="large" name="size" />
        </fieldset>
      </form>
    </div>
  );
};

export const ButtonDefaultProps = {
  size: "small",
  // variant: 'contained',
  // color: 'primary',
  text: "Click me",
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
