import React from "react";
import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";

const app = document.getElementById("root");
const root = createRoot(app);
root.render(<App />);
