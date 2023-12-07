import styled from "@emotion/styled";

type ButtonProps = {
  typea?: "outlined" | "contained" | "other";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | 'Canceld' | 'pending' | 'completed' | 'In Process' | "transit" | "placed" | "INPROCESS" | "IN_PROGRESS" | "PENDING" | "ACCEPTED" | "ISSUED" | any;
  color?: string;
  width?: string;
  height?: string;
  ml?: string;
  mr?: string;
  p?: string;
  pl?: string;
  pr?: string;
  display?: string;
  gap?: string;
  weight?: string;
  position?: string;
  top?: string;
  bottom?: string;
  background?: string;
};

const getColor = (variant: string | undefined): string => {
  switch (variant) {
    case "primary":
    case 'completed':
    case 'issued':
      return '#12B76A'; // Replace 'your_color_here' with the actual color value
    case "secondary":
    case "Canceld":
      return 'your_color_here'; // Replace 'your_color_here' with the actual color value
    case 'PENDING':
      return 'your_color_here'; // Replace 'your_color_here' with the actual color value
    case 'INPROCESS':
    case 'IN_PROGRESS':
    case "transit":
      return 'your_color_here'; // Replace 'your_color_here' with the actual color value
    case "placed":
      return 'your_color_here'; // Replace 'your_color_here' with the actual color value
    default:
      return 'your_default_color_here'; // Replace 'your_default_color_here' with the default color value
  }
};

export const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => props.color};

  padding: ${(props) =>
    `${1}px ${2}px`}; // You can adjust these values as needed

  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '40px'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
  padding: ${(props) => props.p || '0'};
  padding-left: ${(props) => props.pl || '0'};
  padding-right: ${(props) => props.pr || '0'};

  border: ${(props) => props.typea === "contained" ? 'none' : `1px solid ${getColor(props.variant)}`};
  display: ${(props) => props.display || 'block'};
  gap: ${(props) => props.gap || '0'};
  font-weight: ${(props) => props.weight || 'normal'};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  border: ${(props) => props.typea === "contained" ? 'none' : `2px solid ${getColor(props.variant)}`};

  background-color: ${(props) => props.background};

  ${(props) => props.size === "small" && `font-size: 12px;`}
  ${(props) => props.size === "medium" && `font-size: 14px;`}
  ${(props) => props.size === "large" && `font-size: 16px;`}
`;

StyledButton.defaultProps = {
  typea: "contained",
  size: "medium",
  height: '40px'
};



