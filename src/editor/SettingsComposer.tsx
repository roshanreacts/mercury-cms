import StyledBox from "@/components/Atoms/StyledBox";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { MdFormatColorFill } from "react-icons/md";
type SettingsComposerProps = {
  type:
    | "text"
    | "number"
    | "select"
    | "boolean"
    | "color"
    | "textarea"
    | "slider";
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
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
  margin-bottom: 10px;
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
    r: "256",
    g: "256",
    b: "256",
    a: "1",
  });
  const handleChange = (color: any) => {
    setColorChip({ ...color.rgb });

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
        <StyledBox style={{ position: "relative", width: "100px" }}>
          <StyledLabel
            style={{
              position: "absolute",
              top: "-11px",
              backgroundColor: "white",
              zIndex: "10",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            {label}
          </StyledLabel>
          <input
            style={{
              width: "100px",
              height: "20px",
              border: "none",
              borderRadius: "5px",
              outline: "none",
            }}
            type="text"
            {...props}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          />
        </StyledBox>
      );
    case "slider":
      return (
        <StyledBox style={{ position: "relative", width: "200px" }}>
          <StyledLabel
            style={{
              position: "absolute",
              top: "-11px",
              backgroundColor: "white",
              zIndex: "10",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          >
            {label}
          </StyledLabel>
          <StyledBox
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <StyledBox
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width="20px"
              height="20px"
              backgroundColor="red"
              type="slider"
              {...props}
              // onChange={(e) => props.onChange && props.onChange(e.target.value)}
              value={defaultValues}
            >
              1
            </StyledBox>
            <StyledBox
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              width="20px"
              height="20px"
              backgroundColor="green"
              type="slider"
              {...props}
              // onChange={(e) => props.onChange && props.onChange(e.target.value)}
              value={defaultValues}
            >
              2
            </StyledBox>
            <StyledBox
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              width="20px"
              height="20px"
              backgroundColor="blue"
              type="slider"
              {...props}
              // onChange={(e) => props.onChange && props.onChange(e.target.value)}
              value={defaultValues}
            >
              3
            </StyledBox>
          </StyledBox>
        </StyledBox>
      );
    case "number":
      return (
        <StyledBox style={{ position: "relative", width: "100px" }}>
          <StyledLabel style={{ position: "absolute", top: "-17px" }}>
            {label}
          </StyledLabel>
          <input
            style={{
              width: "100px",
              height: "20px",
              border: "1px #000",
              borderRadius: "5px",
              outline: "none",
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
        <StyledBox width="100px" style={{ position: "relative" }}>
          <StyledLabel
            style={{
              position: "absolute",
              top: "-12px",
              zIndex: "10",
              backgroundColor: "white",
              padding: "0 5px",
            }}
          >
            {label}
          </StyledLabel>
          <select
            style={{
              width: "100px",
              height: "20px",
              border: "none",
              borderRadius: "5px",
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
        <StyledBox style={{ position: "relative", width: "100px" }}>
          <StyledLabel style={{ position: "absolute", top: "-17px" }}>
            {label}
          </StyledLabel>
          <input
            style={{
              width: "100px",
              height: "20px",
              border: "1px #000",
              borderRadius: "5px",
              outline: "none",
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
        <StyledBox style={{ position: "relative", width: "100px" }}>
          <StyledLabel
            style={{
              position: "absolute",
              top: "-12px",
              zIndex: "10",
              padding: "0 5px",
              background: "white",
            }}
          >
            {label}
          </StyledLabel>
          <textarea
            rows={3}
            style={{
              display: "block",
              width: "210px",
              borderRadius: "5px",
              outline: "none",
              fontSize: "11px",
            }}
            autoComplete="on"
            {...props}
            onChange={(e) => props.onChange && props.onChange(e.target.value)}
            value={defaultValues}
          />
        </StyledBox>
      );
    case "color":
      useEffect(() => {
        var match = defaultValues?.match(
          /rgba?\((\d+), (\d+), (\d+)(, ([\d.]+))?\)/
        );
        if (match) {
          setColorChip({
            r: match[1] ? match[1] : "256",
            g: match[2] ? match[2] : "256",
            b: match[3] ? match[3] : "256",
            a: match[5] ? match[5] : "1",
          });
        }
      }, []);

      return (
        <StyledBox style={{ position: "relative", width: "100px" }}>
          <StyledLabel
            style={{
              position: "absolute",
              top: "-12px",
              zIndex: "10",
              backgroundColor: "white",
              padding: "0 5px",
            }}
          >
            {label}
          </StyledLabel>
          <div
            style={{
              width: "100px",
              height: "30px",
              padding: "1px",
              background: "#fff",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-evenly",
              cursor: "pointer",
              alignItems: "center",
            }}
            onClick={handleClick}
          >
            <StyledBox>
              <MdFormatColorFill />
            </StyledBox>
            <div
              style={{
                width: "30px",
                height: "25px",
                borderRadius: "8px",
                background: `rgba(${colorChip.r}, ${colorChip.g}, ${colorChip.b}, ${colorChip.a})`,
                border: "1px solid",
              }}
            />
          </div>
          {displayColorPicker ? (
            <div
              style={{
                position: "absolute",
                zIndex: "20",
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
        <StyledFieldset
          key={key}
          style={{
            gridColumn: `${
              settings[key].type === "textarea" ||
              settings[key].type === "slider"
                ? "span 2"
                : "inherit"
            }`,
          }}
        >
          <SettingsComposer
            type={settings[key].type}
            options={settings[key]?.options ? settings[key].options : undefined}
            defaultValues={defaultValues[key]}
            label={settings[key].label}
            onChange={(e: any) => {
              setProp((props: any) => (props[key] = e));
            }}
          />
        </StyledFieldset>
      ))}
    </StyledForm>
  );
};

export default SettingsWrapper;
