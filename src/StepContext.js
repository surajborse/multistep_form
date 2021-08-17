import React,{useState} from 'react'
import App from './App';

 export const multiStepContext = React.createContext();
   const StepContex = () => {
     const [currentstep, setStep] = useState(1);
     const [userData, setUserData] = useState([]);
     const [finalData, setFinalData] = useState([]);

     function submitData (){
         setFinalData(finalData=>[...finalData,userData]);
         setUserData('');
         setStep(1);
       
     }
    return (
        <div>
            <multiStepContext.Provider value ={{currentstep,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
            <App/>
           
            </multiStepContext.Provider>
        </div>
    )
}
 export default StepContex;
