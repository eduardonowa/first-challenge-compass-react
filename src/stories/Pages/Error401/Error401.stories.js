import React from "react";

import { Error401 } from "./Error401";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  Error401: "Project/Pages/Error401",
  component: Error401,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Error401 {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
