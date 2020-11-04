import React from 'react'
import './sass/App.scss';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Product from './components/Product'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;

  }
  
.wave{
  padding-top:6em;

  @media only screen and (min-width: 1450px) {
   padding-top: 15em;
  }

}
  
  .panel.blue {
    background-color: #ffffff;
  }
  
  .panel.turqoise {

    background-color: #1c1c1e;

  }
  
  .panel.green {
    background-color: #010101;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
`;
function App() {
  return (
    
    <div className="App">
        
       <SectionWipesStyled>
  

   
    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <Scene pin>
        <div className="panel blue"> <NavBar/> <Intro/></div>
      </Scene>
      <Scene pin>
        <div className="wave" >
        <svg style={{display: "block"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1c1e" fill-opacity="1" d="M0,128L30,128C60,128,120,128,180,117.3C240,107,300,85,360,74.7C420,64,480,64,540,90.7C600,117,660,171,720,165.3C780,160,840,96,900,90.7C960,85,1020,139,1080,176C1140,213,1200,235,1260,208C1320,181,1380,107,1410,69.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        <div className="panel turqoise">
       
          <Product/>
  
          </div>
          </div>
      </Scene>
     
    </Controller>
  </SectionWipesStyled>

 

    </div>
  );
}

export default App;
