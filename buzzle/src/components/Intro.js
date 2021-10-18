import React from "react";
import creation from "../assets/images/creation.svg";
import SvgLines from "react-mt-svg-lines";
import styled, { keyframes } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ReactComponent as ImportedComponent } from "../assets/images/rmask.svg";
import WaitList from "./Waitlist";
import Product from "./Product";

import { Controller, Scene } from "react-scrollmagic";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}

function Intro() {
  return (
    <div className="home">
      <span className="barriers">
        Create animatics <br></br>without drawing <br></br>a single frame
      </span>

      <span className="buzzle">
        Buzzle can turn your ideas into moving pictures with the click of a
        mouse
      </span>

      <WaitList />
    </div>

    //this is an example
  );
}

export default Intro;
