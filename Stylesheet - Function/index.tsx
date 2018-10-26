import * as React from "react";
import classNames from "classnames";

import { Button } from "wix-ui-core/Button";
import { button } from "wix-ui-core/themes/backoffice";
import random from "./random.css";

/* Basic */

export const ComponentFunction1 = () => (
  <Button classNames={button("secondary", "light")} />
);

/* Override posibilities #1 */

export const ComponentFunction2 = () => {
  <Button classNames={classNames(random, button("secondary", "light"))} />;
};

/* Changing className states */

export const ComponentFunction2 = show => {
  <Button
    classNames={classNames({ random: show }, button("secondary", "light"))}
  />;
};
