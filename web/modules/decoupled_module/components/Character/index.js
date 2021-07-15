import React from "react";
import { render } from "react-dom";
import { Character } from "./Character";
import "../global/i18n";
import { ErrorBoundary } from "../global/ErrorBoundry";

render(
  <ErrorBoundary>
    <Character />
  </ErrorBoundary>,
  document.getElementById("react-character")
);
