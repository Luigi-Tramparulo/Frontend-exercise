import React from 'react';
import { storiesOf } from "@storybook/react";
import Clock from "../components/clock";
import { withKnobs } from '@storybook/addon-knobs/react';


const cuba = {
  secs: 1,
  country: "Cuba",
  timezone: -6
}
const italy = {
  secs: 1,
  country: "Italy",
  timezone: -3
}

storiesOf("Clock", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ color: 'red' }}>{story()}</div>)
  .add("cuba", () => (<Clock {...cuba} />));

storiesOf("Clock", module)
  .addDecorator(story => <div style={{ color: 'green' }}>{story()}</div>)
  .add("italy", () => (<Clock {...italy} />));
