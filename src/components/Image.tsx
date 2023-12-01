import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsComposer";

type ImageProps = {
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    borderRadius?: number;
    border?: number;
    objectFit?: string;
    position?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    zIndex?: string;
    isSelected?: boolean;
    [x: string]: any;
};

const StyledImage = styled.img<ImageProps>`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  object-fit: ${(props) => props.objectFit};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  ${(props) =>
    props.isSelected && "border: 4px dotted red;"
  }
`;

const Image: React.FC<ImageProps> = ({ ...props }: any) => {
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
        >
            <StyledImage
                {...props}
            />
        </div>
    );
};

export const ImageDefaultProps: ImageProps = {
    src: "https://picsum.photos/200",
    isSelected: true,
};

const ImageSettings = () => {
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
                src: {
                    type: "text",
                    label: "Image Source",
                },
                alt: {
                    type: "text",
                    label: "Alt Text",
                },
                width: {
                    type: "text",
                    label: "Width",
                },
                height: {
                    type: "text",
                    label: "Height",
                },
                borderRadius: {
                    type: "text",
                    label: "Border Radius",
                },
                border: {
                    type: "text",
                    label: "Border",
                },
                objectFit: {
                    type: "select",
                    label: "Object Fit",
                    options: ["fill", "contain", "cover", "none", "scale-down"],
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
            }}
            setProp={setProp}
        />
    );
};

Image.craft = {
    props: ImageDefaultProps,
    related: {
        settings: ImageSettings,
    },
};

export default Image;
