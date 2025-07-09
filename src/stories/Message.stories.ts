import type { Meta, StoryObj } from "@storybook/react-vite";

import { allModes } from "../../.storybook/modes";

import { Message } from "./Message";

const meta = {
  title: "Components/Message",
  component: Message,
  parameters: {
    chromatic: {
      //🔶 Test each story for MyComponent in three modes
      modes: {
        english: allModes["english"],
        german: allModes["german"],
        arabic: allModes["arabic"],
      },
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
