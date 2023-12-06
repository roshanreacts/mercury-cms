import type { Meta, StoryObj } from "@storybook/react";
import { css, SerializedStyles } from "@emotion/react";
import Box from "./Box";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Box",
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    p: { constrol: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    p: "20px",
    bgColor: "red",
    children: "Box",
  },
};

export const Secondary: Story = {
  args: {
    p: "20px",
    children: "Another Box",
  },
};
