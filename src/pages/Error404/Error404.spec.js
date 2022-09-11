import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Error404 from "./Error404";

describe("Testing Error404.js", () => {
  it("should be able to show the h1 element", () => {
    render(<Error404 />);
    const error404 = screen.getByTestId("error-404-title");
    expect(error404).toBeInTheDocument();
  });
  it("verifying text of title", () => {
    render(<Error404 />);
    const error404 = screen.getByTestId("error-404-title");
    expect(error404).toHaveTextContent("Error 404");
  });
});
