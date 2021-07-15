import React from "react";
import { render } from "react-dom";
import { Locations } from "./Locations";
import "../global/i18n";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("../global/msw/browser");
  worker.start();
}

render(<Locations />, document.getElementById("react-locations"));
