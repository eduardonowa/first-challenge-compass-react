import React from "react";

import { Inputs } from "./Inputs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Project/Components/Inputs",
  component: Inputs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    borderColor: {
      control: "color",
    },
    labelColor: {
      control: "color",
    },
    width: {
      control: "number",
    },
    inputType: {
      control: "select",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Inputs {...args} />;

export const Type = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Type.args = {};
