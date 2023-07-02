import React from "react";
import { Story, Meta } from "@storybook/react";

import {BreadcrumbsProps, Breadcrumbs} from ".";

const defaultArgs: BreadcrumbsProps = {
  paths: [
    {
      key: "uuid-1",
      text: "Cabinet A"
    },
    {
      key: "uuid-2",
      text: "Shelf 1"
    },
    {
      key: "uuid-3",
      text: "Folder 123"
    }
  ]
};

const Template: Story<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
  return <Breadcrumbs {...props} />;
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export default {
  title: "Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
  },
} as Meta<BreadcrumbsProps>;
