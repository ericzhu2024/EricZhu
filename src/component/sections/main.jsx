import React from "react";
import {Typing} from "../animation/typing.jsx"
import {Led} from "../animation/led.jsx"
import {Name} from "../animation/name.jsx"
export const Main = () => {
  return <section id="main">
    <Name />
    <Typing />
    <Led />
    </section>;
};
