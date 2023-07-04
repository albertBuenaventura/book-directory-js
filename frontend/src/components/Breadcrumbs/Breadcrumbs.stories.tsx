import React from "react";
import { Story, Meta } from "@storybook/react";

import {BreadcrumbsProps, Breadcrumbs} from ".";

const defaultArgs: BreadcrumbsProps = {
  paths: [
    {
      id: 1,
      name: "Cabinet A"
    },
    {
      id: 2,
      name: "Shelf 1"
    },
    {
      id: 3,
      name: "Folder 123"
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
