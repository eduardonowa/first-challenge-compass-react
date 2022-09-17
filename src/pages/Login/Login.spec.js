import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Login from "./Login";

import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Login.js", () => {
  it("should be able to show the form element", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });
  it("should be able to show the footer element", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("should be able to show the inputs components in the right amount", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const inputsComponents = screen.getAllByTestId("inputs-components");
    expect(inputsComponents).toHaveLength(4);
  });
  it("should be able to show the maskedInput component", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const inputsComponents = screen.getByTestId("maskedInput-component");
    expect(inputsComponents).toBeInTheDocument();
  });
  it("should be able to show the image component in the right amount", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const imageComponents = screen.getAllByTestId("image-component");
    expect(imageComponents).toHaveLength(1);
  });
  it("should be able to show the title component in the right amount", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const titleComponents = screen.getByTestId("title-component");
    expect(titleComponents).toHaveTextContent("Intern Sign Up");
  });
  it("should be able to show the button with right text", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const buttonComponents = screen.getByTestId("button-component");
    expect(buttonComponents).toHaveTextContent("Register");
  });
  it("should be able to show the button component in the right amount with right text", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const checkboxComponents = screen.getByTestId("checkbox-component");
    expect(checkboxComponents).toHaveTextContent(
      "I accept the terms and privacy"
    );
  });
});
