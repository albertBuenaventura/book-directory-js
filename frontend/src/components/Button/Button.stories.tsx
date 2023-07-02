import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from ".";

const defaultArgs: ButtonProps = {
  children: "Click me",
  disabled: false,
};

const Template: Story<ButtonProps> = (props: ButtonProps) => {
  return <Button {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<ButtonProps>;
