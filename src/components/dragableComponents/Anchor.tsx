import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";

type AnchorProps = {
    href: string;
    target?: string;
    backgroundColor?: string;
    color?: string;
    height?: string;
    width?: string;
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
    isSelected?: boolean;
    children?: React.ReactNode; 
    [x: string]: any;
};

const StyledAnchor = styled.a<AnchorProps>`
  color: ${(props: AnchorProps) => props.color};
  width: ${(props: AnchorProps) => props.width};
  height: ${(props: AnchorProps) => props.height};
  background-color: ${(props: AnchorProps) => props.backgroundColor};
  target: ${(props: AnchorProps) => props.target};
  font-size: ${(props: AnchorProps) => props.fontSize};
  text-align: ${(props: AnchorProps) => props.textAlign};
  font-style: ${(props: AnchorProps) => props.fontStyle};
  font-weight: ${(props: AnchorProps) => props.fontWeight};
  line-height: ${(props: AnchorProps) => props.lineHeight};
  text-decoration: ${(props: AnchorProps) => props.textDecoration};
  letter-spacing: ${(props: AnchorProps) => props.letterSpacing};
  text-transform: ${(props: AnchorProps) => props.textTransform};
  white-space: ${(props: AnchorProps) => props.whiteSpace};
  word-break: ${(props: AnchorProps) => props.wordBreak};
  word-wrap: ${(props: AnchorProps) => props.wordWrap};
  overflow: ${(props: AnchorProps) => props.overflow};
  margin: ${(props: AnchorProps) => props.margin};
  padding: ${(props: AnchorProps) => props.padding};
  cursor: ${(props: AnchorProps) => props.cursor};
  vertical-align: ${(props: AnchorProps) => props.verticalAlign};
  font-family: ${(props: AnchorProps) => props.fontFamily};

  ${(props) => props.isSelected && "border: 4px dotted red;"}
`;

const Anchor: React.FC<AnchorProps> = ({ children, ...props }: any) => {
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
        <a
            {...props}
            ref={(ref: any) => connect(drag(ref))}
            onClick={() => selected && setEditable(true)}
        >
            <StyledAnchor ref={connect} onClick={props.onClick} {...props}>
                {children}
            </StyledAnchor>
        </a>
    );
};

export const AnchorDefaultProps: AnchorProps = {
    href: "#",
    padding: "20px",
    backgroundColor: "white",
    width: "fit-content",
};

export const AnchorSettings = () => {
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
                href: {
                    type: "text",
                    label: "Link URL",
                },
                backgroundColor: {
                    type: "color",
                    label: "Background Color"
                },
                target: {
                    type: "text",
                    label: "Target",
                },
                color: {
                    type: "color",
                    label: "Text Color",
                },
                width: {
                    type: "text",
                    label: "Width",
                },
                height: {
                    type: "text",
                    label: "Height",
                },
                fontSize: {
                    type: "text",
                    label: "Font Size",
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
                verticalAlign: {
                    type: "text",
                    label: "Vertical Align",
                },
                fontFamily: {
                    type: "text",
                    label: "Font Family",
                },
            }}
            setProp={setProp}
        />
    );
};

Anchor.craft = {
    props: AnchorDefaultProps,
    related: {
        settings: AnchorSettings,
    },
    rules: {
        canDrag: () => true,
    },
};

export default Anchor;
