import React,{useContext} from 'react';
import './App.css';
import Firststep from './Components/Firststep';
import Secondstep from './Components/Secondstep';
import Thirdstep from './Components/Thirdstep';


import { Stepper, StepLabel, Step } from '@material-ui/core';
import {multiStepContext} from './StepContext';
import { Showdata } from './Components/Showdata';
function App() {
  const{currentstep,FinalData} = useContext(multiStepContext);
  const Showstep = (  step) => {
    
     switch(step){
       case 1 :
        return <Firststep/>
         case 2:
          return <Secondstep/>
          case 3:
            return <Thirdstep/>
     }
  }
  return (
    <div className="App">
     <div className="App-header">
       <div className="Headre">
         <h1>Multi Step Form And User Data Record
        <br />
        Application
         </h1>
       </div>
        <div className="step">
          <Stepper   activeStep= {currentstep -1} orientation="horizontal">

            <Step>
              <StepLabel></StepLabel>
            </Step>

            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {Showstep(currentstep)}
        <Showdata/>
     </div>
    </div>
  );
}

export default App;
