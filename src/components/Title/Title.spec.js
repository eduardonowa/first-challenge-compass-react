import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Title from "./Title";

describe("Testing Title.js", () => {
  it("should be able to show the h1 element", () => {
    render(<Title />);
    const title = screen.getByTestId("title-component");
    expect(title).toBeInTheDocument();
  });

  it("text should be equal to prop", () => {
    render(<Title text="Title Test" />);
    const title = screen.getByTestId("title-component");
    expect(title).toHaveTextContent("Title Test");
  });
});
