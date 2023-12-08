import StyledBox from "@/components/Atoms/StyledBox";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
type SettingsComposerProps = {
  type: "text" | "number" | "select" | "boolean" | "color" | "textarea";
  onChange?: (color: any) => void;
  options?: string[];
  label: string | undefined;
  defaultValues?: any;
};

function convertCssStringToMap(cssString: string): any {
  const lines = cssString.split("\n");

  const nonEmptyLines = lines
    .map((line) => line.trim())
    .filter((line) => line !== "");

  const linesWithoutSemicolons = nonEmptyLines.map((line) =>
    line.replace(/;$/, "")
  );

  const cssMap: Record<string, string> = {};
  linesWithoutSemicolons.forEach((line) => {
    const [property, value] = line.split(":").map((part) => part.trim());
    if (!value) {
      return;
    }
    cssMap[property] = value;
  });

  return cssMap;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  margin: auto;
`;

const StyledFieldset = styled.fieldset`
  margin-bottom: 12px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  font-size: 10px;
  font-weight: bold;
  color: #000;
  margin-bottom:10px
`;

const SettingsComposer: React.FC<SettingsComposerProps> = ({
  type,
  options,
  defaultValues,
  label,
  ...props
}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [colorChip, setColorChip] = useState<any>({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const handleChange = (color: any) => {
    setColorChip({ ...color.rgb });
    // console.log(color.rgb, "rgb");

    props.onChange &&
      props.onChange(
        `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
      );
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  switch (type) {
    case "text":
      return (
        <StyledBox style={{position:"relative"}}>
          <StyledLabel style={{position:"absolute",top:"-17px"}}>{label}</StyledLabel>
          <input
            style={{
              width: "200px",
              height: "20px",
              border: "1px #000",
              borderRadius: "5px",
            }}
            type="text"
            {...props}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          />
        </StyledBox>
      );
    case "number":
      return (
        <StyledBox style={{position:"relative"}}>
          <StyledLabel style={{position:"absolute",top:"-17px"}}>{label}</StyledLabel>
          <input
            style={{
              width: "200px",
              height: "20px",
              border: "1px #000",
              borderRadius: "5px",
            }}
            type="number"
            {...props}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          />
        </StyledBox>
      );
    case "select":
      return (
        <StyledBox width="200px" style={{position:"relative"}}>
          <StyledLabel style={{position:"absolute",top:"-12px", zIndex:"10", backgroundColor:"white", padding:"0 5px"}}>{label}</StyledLabel>
          <select
            style={{
              width: "200px",
              height: "20px",
              border: "none",
              borderRadius: "5px"
            }}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          >
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </StyledBox>
      );
    case "boolean":
      return (
        <StyledBox style={{position:"relative"}}>
          <StyledLabel style={{position:"absolute",top:"-17px"}}>{label}</StyledLabel>
          <input
            style={{
              width: "200px",
              height: "20px",
              border: "1px #000",
              borderRadius: "5px",
            }}
            type="boolean"
            {...props}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          />
        </StyledBox>
      );
    case "textarea":
      return (
        <StyledBox style={{position:"relative"}}>
          <StyledLabel style={{position:"absolute",top:"-17px"}}>{label}</StyledLabel>
          <input
            style={{
              width: "200px",
              height: "20px",
              border: "1px #000",
              borderRadius: "5px",
            }}
            type="textarea"
            {...props}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          />
        </StyledBox>
      );
    case "color":
      return (
        <StyledBox style={{position:"relative"}}>
          <StyledLabel style={{position:"absolute",top:"-17px"}}>{label}</StyledLabel>
          <div
            style={{
              padding: "5px",
              background: "#fff",
              borderRadius: "1px",
              boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <div
              style={{
                width: "36px",
                height: "14px",
                borderRadius: "2px",
                background: `rgba(${colorChip.r}, ${colorChip.g}, ${colorChip.b}, ${colorChip.a})`,
              }}
            />
          </div>
          {displayColorPicker ? (
            <div
              style={{
                position: "absolute",
                zIndex: "2",
              }}
            >
              <div
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "0px",
                  bottom: "0px",
                  left: "0px",
                }}
                onClick={handleClose}
              />
              <ChromePicker color={colorChip} onChange={handleChange} />
            </div>
          ) : null}
        </StyledBox>
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
      options?: string[];
    };
  };
  setProp: (cb: any, throttleRate?: number | undefined) => void;
  defaultValues: any;
};

const SettingsWrapper: React.FC<SettingsWrapperProps> = ({
  settings,
  setProp,
  defaultValues,
}: SettingsWrapperProps) => {
  return (
    <StyledForm>
      {Object.keys(settings).map((key) => (
        <StyledFieldset key={key}>
          <SettingsComposer
            type={settings[key].type}
            options={settings[key]?.options ? settings[key].options : undefined}
            defaultValues={defaultValues[key]}
            label={settings[key].label}
            onChange={(e: any) => {
              if (settings[key].type === "textarea") {
                const cssmap = convertCssStringToMap(e);
                Object.keys(cssmap).map((csskey: any) => {
                  setProp((props: any) => (props[csskey] = cssmap[csskey]));
                });
              } else setProp((props: any) => (props[key] = e));
            }}
          />
        </StyledFieldset>
      ))}
    </StyledForm>
  );
};

export default SettingsWrapper;
