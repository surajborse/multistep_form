
import React,{useContext} from 'react'
import { Button,TextField} from '@material-ui/core';
import {multiStepContext} from'../StepContext'


export const Firststep = () => {
    const {setStep,userData,setUserData} = useContext(multiStepContext);
    return (
        <div className="text">
            <div>
            <TextField label="First Name" value={userData['firstname']} onChange={(e)=>setUserData({...userData,"firstname":e.target.value})} margin="normal" variant="outlined" color="primary" className="input"/>

            </div>
            <TextField label="Middel Name" value={userData['middelname']} onChange={(e)=>setUserData({...userData,"middelname":e.target.value})} margin="normal" variant="outlined" color="primary" className="input"/>
             <div>
            <TextField label="Last Name" value={userData['lastname']} onChange={(e)=>setUserData({...userData,"lastname":e.target.value})} margin="normal" variant="outlined" color="primary"className="input"/>
            </div>
            <div className="btn">
            <Button variant="contained" onClick={()=>setStep(2)}  color="primary">Next</Button>
            </div>
        </div>
    )
}
export default Firststep;