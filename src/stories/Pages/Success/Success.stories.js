import React from "react";

import { Success } from "./Success";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  Success: "Project/Pages/Success",
  component: Success,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: { action: "clicked" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Success {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
