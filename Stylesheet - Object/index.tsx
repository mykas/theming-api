import * as React from "react";

import { Button } from "wix-ui-core/Button";
import { button } from "wix-ui-core/theme/backoffice";

const { main, secondary, light } = button;

export const ComponentObject = () => (
  <Button classNames={[main, secondary, light]}>I'm button</Button>
);
