import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MaskedInput from "./MaskedInput";

describe("Testing MaskeInput.js", () => {
  it("should be able to show the label element", () => {
    render(<MaskedInput />);
    const label = screen.getByTestId("label-maskedInput");
    expect(label).toBeInTheDocument();
  });

  it("should be able to show the InputMask component", () => {
    render(<MaskedInput />);
    const inputMask = screen.getByTestId("inputMask-component");
    expect(inputMask).toBeInTheDocument();
  });
});
