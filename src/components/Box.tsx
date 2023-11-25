import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNode } from "@craftjs/core";
import SettingsWrapper from "@/editor/SettingsCopmposer";

type BoxProps = {
  p?: string;
  m?: string;
  bgColor?: string;
  children?: React.ReactNode;
};

const StyledBox = styled.div<BoxProps>`
  padding: ${(props: BoxProps) => props.p};
  margin: ${(props: BoxProps) => props.m};
  background-color: ${(props: BoxProps) => props.bgColor};
`;

const Box: React.FC<BoxProps> = ({ children, ...props }: any) => {
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
      <StyledBox {...props}>{children}</StyledBox>
    </div>
  );
};

export const BoxDefaultProps = {
  p: "30px",
};

// export const BoxSettings = () => {
//   const {
//     actions: { setProp },
//     props,
//   } = useNode((node) => ({
//     props: node.data.props,
//   }));

//   return (
//     <div>
//       <form>
//         <fieldset
//           id="size"
//           onChange={(e: any) =>
//             setProp((props: any) => (props.size = e.target.value))
//           }
//         >
//           <label>Width</label>
//           <input type="radio" value="small" name="size" />
//           <input type="radio" value="large" name="size" />
//         </fieldset>
//       </form>
//     </div>
//   );
// };

const BoxSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <SettingsWrapper
      settings={{
        p: {
          type: "text",
          label: "Padding",
        },
        m: {
          type: "text",
          label: "Margin",
        },
        bgColor: {
          type: "color",
          label: "Background Color",
        },
      }}
      setProp={setProp}
    />
  );
};

Box.craft = {
  props: BoxDefaultProps,
  related: {
    settings: BoxSettings,
  },
};

export default Box;
