import React from "react";
import creation from "../assets/images/creation.svg";
import SvgLines from "react-mt-svg-lines";
import styled, { keyframes } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ReactComponent as ImportedComponent } from "../assets/images/rmask.svg";
import WaitList from "./Waitlist";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import { Controller, Scene } from "react-scrollmagic";
import Typography from "@mui/material/Typography";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}

function Intro() {
  return (
    <Grid
      container
      minHeight="110vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={6}
    >
      <Grid item xs={12}>
        <Typography component="div" gutterBottom>
          <span className="barriers">
            Create animatics <br></br>without drawing <br></br>a single frame
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body" component="div" gutterBottom>
          <span className="buzzle">
            Buzzle can turn your ideas into moving pictures with the click of a
            mouse
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <WaitList />
      </Grid>
    </Grid>

    //this is an example
  );
}

export default Intro;
