import React from 'react';
import {Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

const Import = (props) => {
    console.log('the return on props',props.fetchMakes)

    return (
        <div>
        <p>Import component</p>
            <Button onClick={props.fetchMakes}>Import</Button>
            <TableContainer>
            <Table>
                <TableHead>Import Items
           
                    <TableRow> 
                      <TableCell>ID</TableCell>
                      <TableCell>Make</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody> 

                {/* {props.fetchMakes.map((car) => {
                    <TableRow key={car.makeId}></TableRow>
                })} */}

                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default Import