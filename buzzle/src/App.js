import React from "react";
import "./sass/App.scss";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Product from "./components/Product";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import SectionWipes from "./components/SectionWipes";
const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  .panel span {
  }
  .panel.blue {
    background-color: white;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #1c1c1e;
    position: absolute;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;
function App() {
  return (
    <div className="App">
      <SectionWipesStyled>
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin>
            <div className="panel blue">
              <span>
                <NavBar />
                <Intro />
              </span>
            </div>
          </Scene>

          <Scene pin>
            <div className="panel green">
              <span>
                {" "}
                <Product />
              </span>
            </div>
          </Scene>
        </Controller>
      </SectionWipesStyled>
    </div>
  );
}

export default App;
