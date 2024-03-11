import type { StoryObj, Meta } from "@storybook/react";
import { Dialog } from ".";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    className: "bg-gray-500",
    children: <p>Dialog content</p>,
    classNameTrigger: "bg-blue-500",
    triggerName: "Open",
  },
};
