
import React,{useContext} from 'react'
import { Button,TextField} from '@material-ui/core';
import {multiStepContext} from'../StepContext'

export const Thirdstep = () => {
    const {setStep,userData,setUserData,submitData} = useContext(multiStepContext);

    return (
        <div className="text">
            <div>
            <TextField label="Gender" value={userData['gender']} onChange={(e)=>setUserData({...userData,"gender":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
 
            </div>
            <TextField label="City" value={userData['city']} onChange={(e)=>setUserData({...userData,"city":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
             <div>
            <TextField label="Dist" value={userData['dist']} onChange={(e)=>setUserData({...userData,"dist":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
            </div>
            <div className="btn">
            <Button variant="contained"onClick={()=> setStep (2)} className="back-btn"  color="secondary">Back</Button>

            <Button variant="contained" onClick={submitData}  color="primary">Submit</Button>
            </div>
        </div>
    )
}
export default Thirdstep;