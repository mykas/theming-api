import * as React from "react";
import { button } from "wix-ui-core/themes/backoffice";
import random from "./random.css";

/* Basic */

const Button = button(props => ({
  type: props.button,
  priority: props.secondary,
  skin: props.light
}));

export const ComponentCSSINJS1 = () => <Button>I'm button</Button>;

/* Override posibilities #1 */

const ButtonCustom1 = button(props => ({
  className: random
}));

/* or */

const ButtonCustom2 = button``;

export const ComponentCSSINJS2 = () => (
  <ButtonCustom1 className={random}>I'm button</ButtonCustom1>
);

/* Override posibilities #2 */

const ButtonCustom3 = button(props => ({
  type: props.button,
  priority: props.secondary,
  skin: props.light,
  className: random
}));

export const ComponentCSSINJS3 = () => (
  <ButtonCustom3>I'm button</ButtonCustom3>
);

/* Changing className states */

const ButtonCustom4 = button(props => ({
  type: props.button,
  priority: props.secondary,
  skin: props.light,
  className: props.bounce ? random : null
}));

export const ComponentCSSINJS4 = () => (
  <ButtonCustom4 bounce>I'm button</ButtonCustom4>
);
