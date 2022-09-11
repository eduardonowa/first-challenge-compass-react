import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Checkbox from "./Checkbox";

describe("Testing Checkbox.js", () => {
  it("should be able to show the input type checkbox element", () => {
    render(<Checkbox />);
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  it("verify the span text", () => {
    render(<Checkbox />);
    const spanCheckbox = screen.getByTestId("span-checkbox");
    expect(spanCheckbox).toBeInTheDocument();
  });
});
