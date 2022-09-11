import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Project/Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Register = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Register.args = {
  disabled: false,
  textButton: "Register",
};

export const goBack = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
goBack.args = {
  textButton: "Go Back!",
  className: "goback",
};
