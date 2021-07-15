import React from "react";
import { useTranslation } from "react-i18next";

export default ({ name }) => {
  const { t } = useTranslation();
  return (
    <h2>
      <p>
        {Drupal.t("Hello")} there {name}!
      </p>
      <p>
        {" "}
        {t("greeting")} {name}?{" "}
      </p>
    </h2>
  );
};
