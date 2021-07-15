import React from "react";
import { render } from "react-dom";
import { Characters } from "./Characters";
import "../global/i18n";

render(<Characters />, document.getElementById("react-characters"));

render(<Characters />, document.getElementById("drupal-react-characters"));
