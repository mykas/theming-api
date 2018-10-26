import * as React from "react";

import { Button } from "wix-ui-core/themes/backoffice";
import random from "./random.css";

/* Basic */

export const ComponentProps1 = () => (
  <Button priority="secondary" skin="light">
    I'm button
  </Button>
);

/* Override posibilities */

export const ComponentProps2 = () => (
  <Button className={random} priority="secondary" skin="light">
    I'm button
  </Button>
);
