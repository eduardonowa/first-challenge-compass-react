import React from "react";

import { Error404 } from "./Error404";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  Error404: "Project/Pages/Error404",
  component: Error404,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Error404 {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
