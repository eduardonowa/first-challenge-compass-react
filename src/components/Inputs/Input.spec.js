import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Inputs from "./Inputs";

describe("Testing Inputs.js", () => {
  it("should be able to show the input element", () => {
    render(<Inputs />);
    const inputs = screen.getByTestId("inputs-types");
    expect(inputs).toBeInTheDocument();
  });

  it("should be able to show the label element", () => {
    render(<Inputs />);
    const label = screen.getByTestId("label-inputs");
    expect(label).toBeInTheDocument();
  });
});
