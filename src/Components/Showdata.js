import React, { useContext } from 'react'
import { TableContainer, TableHead, TableCell, TableRow, Table, TableBody } from '@material-ui/core'
import { multiStepContext } from '../StepContext';


export const Showdata = () => {
    const { finalData } = useContext(multiStepContext);
    return (
        <div className="con">
            <TableContainer boder="1" styele={{ display: 'flex', justifyContent: 'center',marginTop:'30px', }}>

                <Table border="1" style={{ width: '80%', justifyContent: 'center',margin:' auto' }} size="small" arial-lable="caption table">
                    <TableHead>
                        <TableRow className="teble-row">
                            <TableCell>First Name</TableCell>
                            <TableCell>Middel Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email Id</TableCell>
                            <TableCell>Mobile No </TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Distric</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data) => (
                            <TableRow key={data.e}>
                                <TableCell>{data.firstname}</TableCell>
                                <TableCell>{data.middelname}</TableCell>
                                <TableCell>{data.lastname}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.mobile} </TableCell>
                                <TableCell>{data.age}</TableCell>
                                <TableCell>{data.gender}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.dist}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
export default Showdata;