import React from "react";
import { SketchPicker } from "react-color";
type SettingsComposerProps = {
  type: "text" | "number" | "select" | "boolean" | "color";
  onChange?: (color: any) => void;
};

const SettingsComposer: React.FC<SettingsComposerProps> = ({
  type,
  ...props
}) => {
  switch (type) {
    case "text":
      return <input type="text" {...props} />;
    case "number":
      return <input type="number" {...props} />;
    case "select":
      return <select>{/* Add options for the select field here */}</select>;
    case "boolean":
      return <input type="checkbox" {...props} />;
    case "color":
      return (
        <SketchPicker
          onChange={(color) => props.onChange && props.onChange(color.hex)}
        />
      );
    default:
      return null;
  }
};

type SettingsWrapperProps = {
  settings: {
    [x: string]: {
      type: SettingsComposerProps["type"];
      label: string;
    };
  };
  setProp: (cb: any, throttleRate?: number | undefined) => void;
};

const SettingsWrapper: React.FC<SettingsWrapperProps> = ({
  settings,
  setProp,
}: SettingsWrapperProps) => {
  return (
    <form>
      {Object.keys(settings).map((key) => {
        return (
          <fieldset
            id="size"
            onChange={(e: any) =>
              setProp((props: any) => (props[key] = e.target.value))
            }
          >
            <label>{key}</label>
            <SettingsComposer
              type={settings[key].type}
              onChange={(e: any) => setProp((props: any) => (props[key] = e))}
            />
          </fieldset>
        );
      })}
    </form>
  );
};

export default SettingsWrapper;
