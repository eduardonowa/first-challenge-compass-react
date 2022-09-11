import React from "react";

import { Login } from "./Login";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  Login: "Project/Pages/Login",
  component: Login,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Login {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
