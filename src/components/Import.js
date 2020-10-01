import React, {useState} from 'react';
import {Container, Button, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core'
import ActionOptions from './ActionMenu'

const Import = (props) => {
    const [displayTable, setDisplayTable] = useState(false)

    const showTable = () => {
        props.fetchMakes();
        setDisplayTable(true);
    }

    const ShowColumnTitles = () => {
        return(
            <TableHead>
                <TableRow>
                    <TableCell align="right">ID</TableCell>
                    <TableCell align="left">MAKE</TableCell>
                    <TableCell align="right">ACTION</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    const DefaultDisplay = () => {
        return(
            <h3 className='defaultDisplay'>
                Click the "IMPORT" button to show all current makes
            </h3>
        )
    }

    return (
        <div>
            <Container component='Paper'>
                <div>
                    <h2>Total Makes : {props.makes.length}</h2>
                    <Button variant='contained' color='primary' className='importBtn' onClick={showTable}>
                    IMPORT</Button>
                </div>
                <Table>
                    {displayTable ? <ShowColumnTitles/> : <DefaultDisplay/> }
                    <TableBody>
                         {props.makes.map((make, index) => (
                            <TableRow key={index}>
                                 <TableCell align="right">{make.MakeId}</TableCell>
                                 <TableCell align="left">{make.MakeName}</TableCell>
                                 <TableCell align="right">
                                     <ActionOptions deleteMake={props.deleteMake} index={props.MakeId}/>
                                </TableCell>
                            </TableRow>
                         ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    )

}

export default Import