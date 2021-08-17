
import React,{useContext} from 'react'
import { Button,TextField} from '@material-ui/core';
import {multiStepContext} from'../StepContext';

export const Secondstep = () => {
    const {setStep,userData,setUserData} = useContext(multiStepContext);

    return (
        <div className="text">
            <div>
            <TextField label="Email Id" value={userData['email']} onChange={(e)=>setUserData({...userData,"email":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
            </div>
            <TextField label="Mobile No" value={userData['mobile']} onChange={(e)=>setUserData({...userData,"mobile":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
             <div>
            <TextField label="Age" value={userData['age']} onChange={(e)=>setUserData({...userData,"age":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
            </div>
            <div className="btn">
            <Button variant="contained"onClick={()=> setStep (1)}  color="secondary" className="back-btn">Back</Button>

            <Button variant="contained"onClick={()=> setStep (3)}  color="primary">Next</Button>
            </div>
        </div>
    )
}
export default Secondstep;