import React from 'react';
import { storiesOf } from "@storybook/react";
import Clock from "../components/clock";
import { withKnobs, number, text } from '@storybook/addon-knobs/react';


const Cuba = {
  secs: 1,
  country: "Cuba",
  timezone: -6
}
const italy = {
  secs: 1,
  country: "Italy",
  timezone: -3
}

const {secs,country,timezone}=Cuba



storiesOf("Clock", module)
  .addDecorator(withKnobs)
  .add("cuba", () =>{
    return (<Clock secs={number("secs",secs)} country={text("country", country)} timezone={number("timezone",timezone)} />)
  })


storiesOf("Clock", module)
  .addDecorator(story => <div style={{ color: 'green' }}>{story()}</div>)
  .add("italy", () => (<Clock {...italy} />));
