import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Error401 from "./Error401";
import { BrowserRouter as Router } from "react-router-dom";

describe("Testing Error401.js", () => {
  it("should be able to show the h1 element", () => {
    render(
      <Router>
        <Error401 />
      </Router>
    );
    const error401 = screen.getByTestId("error-401-title");
    expect(error401).toBeInTheDocument();
  });
  it("verifying text of title", () => {
    render(
      <Router>
        <Error401 />
      </Router>
    );
    const error401 = screen.getByTestId("error-401-text");
    expect(error401).toHaveTextContent("You will be redirect in 6 s...");
  });
  it("redirects when the clock rundown", () => {
    render(
      <Router>
        <Error401 />
      </Router>
    );
    const error401 = screen.getByTestId("error-401-text");
    expect(error401).toHaveTextContent("You will be redirect in 6 s...");
  });
});
