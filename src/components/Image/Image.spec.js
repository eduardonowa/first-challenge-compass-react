import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Image from "./Image";

describe("Testing Image.js", () => {
  it("should be able to show the Image element", () => {
    render(<Image />);
    const img = screen.getByTestId("img-logo");
    expect(img).toBeInTheDocument();
  });

  it("veryfing img src", () => {
    render(<Image />);
    const displayedImg = document.querySelector("img");
    expect(displayedImg.src).toContain("data");
  });
});
