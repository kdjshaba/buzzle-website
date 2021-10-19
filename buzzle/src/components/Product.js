import React, { Component } from "react";
import pencil from "../assets/images/pencil.png";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import pitch from "../assets/images/pitch.svg";
import change from "../assets/images/change.svg";
import collab from "../assets/images/collab.svg";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Product extends Component {
  state = {
    show: false,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={20}
        >
          <Grid item>
            <Grid container spacing={3}>
              <Grid item xs> */}
        <p className="editing">
          Buzzle uses deep learning to make quick prototypes of your <br></br>
          videos by simply uploading a script and design inspiration
        </p>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
          style={{ paddingTop: "30vh", position: "absolute" }}
        >
          <Grid item xs>
            <img className="pics" src={pitch} />
            <h1 className="title">Make better pitches.</h1>
            <p className="subtitle">
              Buzzle helps your team create quick <br></br>prototypes to present
              to your clients. <br></br> Flexible too, because the client’s{" "}
              <br></br> experience is paramount.
            </p>
          </Grid>
          <Grid item xs>
            <img className="pics" src={change} />
            <h1 className="title">Make it your own.</h1>
            <p className="subtitle">
              Create multiple versions , edit <br></br> illustrations and import{" "}
              <br></br>specific elements.
            </p>
          </Grid>
          <Grid item xs>
            <img className="pics" src={collab} />
            <h1 className="title">Collaborate.</h1>
            <p className="subtitle">
              Collaborate on projects with <br></br>your peers, post requests to{" "}
              <br></br> get feedback, and validate <br></br>every detail before
              production
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
