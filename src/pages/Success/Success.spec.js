import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Success from "./Success";

import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Success.js", () => {
  it("should be able to show the image component in the right amount", () => {
    render(
      <Router>
        <Success />
      </Router>
    );
    const imageComponents = screen.getAllByTestId("image-component");
    expect(imageComponents).toHaveLength(1);
  });
  it("should be able to show the title component in the right amount", () => {
    render(
      <Router>
        <Success />
      </Router>
    );
    const titleComponents = screen.getByTestId("title-component");
    expect(titleComponents).toHaveTextContent("Success");
  });
  it("should be able to show the button with right text", () => {
    render(
      <Router>
        <Success />
      </Router>
    );
    const buttonComponents = screen.getByTestId("button-component");
    expect(buttonComponents).toHaveTextContent("Go Back!");
  });
});
