import React, {setState} from 'react';
import {Container, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'
// import ImportActionMenu from './ImportActionMenu'

const Import = (props) => {
    const [showTable, setShowTable] = React.useState(false);

    const displayTable = () => {
        props.fetchMakes();
        setShowTable(true);
    }

    const DisplayTableHead = () => {
        return (
            <TableHead className='importTableHead'>
                <TableRow>
                    <TableCell > ID </TableCell>
                    <TableCell > Make </TableCell>
                    <TableCell > Action </TableCell>
                </TableRow>
                <Table>
                    <TableBody>
                        {props.makes.map((cars) => (
                        <TableRow key={cars.MakeId}> 
                            <TableCell>{cars.MakeId}</TableCell>
                            <TableCell>{cars.MakeName}</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                   
                ))}
                    </TableBody>
                </Table>
            </TableHead>
        )
    }


    const DefaultDisplay = () => {
         return (
             <h3 className='importDefaultDisplay'>
                 Click the import button above to show the current makes
             </h3>
         ) 
    }


    return (
        <div className='import-container'> 
            <Container>
                <div>
                    <h2>There are currently : {props.makes}</h2>
                </div>
                <Button 
                    className='importBtn'
                    onClick={displayTable}>
                Import
                </Button>
                
                <TableContainer>
                    {showTable ? <DisplayTableHead/> : <DefaultDisplay/>}
                </TableContainer> 

            </Container>

        </div>
    )
}

export default Import