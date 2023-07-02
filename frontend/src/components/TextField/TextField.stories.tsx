import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextField, TextFieldProps } from ".";

const Template: Story<TextFieldProps> = () => {
  return (
    <div>
      <TextField placeholder="Add your input here" />
    </div>
  );
};

export const Default = Template.bind({});

export default {
  title: "TextField",
  component: TextField,
  argTypes: {},
} as Meta<TextFieldProps>;
