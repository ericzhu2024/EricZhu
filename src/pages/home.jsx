import React from "react";
import { Main } from "../component/sections/main";
import { About } from "../component/sections/about";
import { Resume } from "../component/sections/resume";
import { Skills } from "../component/sections/skills";
import { Contact } from "../component/sections/contact";
import { NavBar } from '../component/navBar/navBar';


// render navbar lastly so navbar is on the top of layers.
export const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Resume />
      <Skills />
      <Contact />
      <NavBar />
    </>
  );
};
