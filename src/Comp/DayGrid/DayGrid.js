import { Card, Grid, makeStyles } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    table: {
        maxWidth:500,
    },
    TableContainer:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       marginTop:'20px',
       
        },
        
    TableCell: {
        background: "#f1f1f1",
        '&:hover': {
            background: "#a599a0",
        }
    },
    title:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'10px',
        fontSize:'32px'
    }


}));

function DayGrid({ data }) {
    const classes = useStyles();
    console.log(data)

    return (
        <div>
            <span className={classes.title} > #30Days SDE Challenge</span>
            <TableContainer className={classes.TableContainer} >
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {data.map((data, index) => (

                            <TableRow key={index}>
                                {data.map((data, index) => (

                                    <TableCell className={classes.TableCell} align="center" component="th" scope="row">
                                        {data}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    )
}

export default DayGrid
