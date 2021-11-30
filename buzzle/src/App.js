import React from "react";
import "./sass/App.scss";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Product from "./components/Product";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Footer from "./components/Footer.js";
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
    position: absolute !important;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;
function App() {
  const [dimensions, setDimensions] = React.useState({
    height: "100vh",
    width: "100vw",
  });
  // React.useEffect(() => {
  //   const debouncedHandleResize = debounce(function handleResize() {
  //     setDimensions({
  //       height: "100vh",
  //       width: "100vw",
  //     });
  //     //window.location.reload();
  //   }, 1000);

  //   window.addEventListener("resize", debouncedHandleResize);

  //   return (_) => {
  //     window.removeEventListener("resize", debouncedHandleResize);
  //   };
  // });
  return (
    <div className="App">
      {/* <SectionWipesStyled>
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin> */}
      <div className="panel blue">
        <span>
          <NavBar />
          <Intro />
        </span>
        <span>
          {" "}
          <Product />
        </span>
      </div>
      <Footer />
      {/* <Scene pin>
            <div className="panel green">
             
            </div>
          </Scene> */}
      {/* </Controller>
      </SectionWipesStyled> */}
    </div>
  );
}
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
export default App;
