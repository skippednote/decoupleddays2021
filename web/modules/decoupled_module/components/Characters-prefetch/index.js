import React from "react";
import { render } from "react-dom";
import { CharactersPrefetch } from "./Characters-prefetch";
import "../global/i18n";

render(
  <CharactersPrefetch />,
  document.getElementById("react-characters-prefetch")
);
