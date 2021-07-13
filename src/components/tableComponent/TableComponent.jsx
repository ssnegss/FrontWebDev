import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './tableComponent.css'

const useStyles = makeStyles({
  table: {
    textAlign: 'center',
    padding: '0.9rem',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  tableHeader: {
    backgroundColor: "#D0DBD5"
  },
});

function createData(sunday, monday, tuesday, wednesday, thursday, friday, saturday) {
  return { sunday, monday, tuesday, wednesday, thursday, friday, saturday };
}

const rows = [
  createData("9:00-10:00", "9:00-10:00", "9:00-10:00", "9:00-10:00", "9:00-10:00", "9:00-10:00", "9:00-10:00"),
  createData("10:00-11:00", "10:00-11:00", "10:00-11:00", "10:00-11:00", "10:00-11:00", "10:00-11:00", "10:00-11:00"),
  createData("11:00-12:00", "11:00-12:00", "11:00-12:00", "11:00-12:00", "11:00-12:00", "11:00-12:00", "11:00-12:00"),
  createData("12:00-13:00", "12:00-13:00", "12:00-13:00", "12:00-13:00", "12:00-13:00", "12:00-13:00", "12:00-13:00"),
  createData("13:00-14:00", "13:00-14:00", "13:00-14:00", "13:00-14:00", "13:00-14:00", "13:00-14:00", "13:00-14:00"),
  createData("14:00-15:00", "14:00-15:00", "14:00-15:00", "14:00-15:00", "14:00-15:00", "14:00-15:00", "14:00-15:00"),
  createData("15:00-16:00", "15:00-16:00", "15:00-16:00", "15:00-16:00", "15:00-16:00", "15:00-16:00", "15:00-16:00"),
  createData("16:00-17:00", "16:00-17:00", "16:00-17:00", "16:00-17:00", "16:00-17:00", "16:00-17:00", "16:00-17:00"),
  createData("17:00-18:00", "17:00-18:00", "17:00-18:00", "17:00-18:00", "17:00-18:00", "17:00-18:00", "17:00-18:00"),
  createData("18:00-19:00", "18:00-19:00", "18:00-19:00", "18:00-19:00", "18:00-19:00", "18:00-19:00", "18:00-19:00"),
  createData("19:00-20:00", "19:00-20:00", "19:00-20:00", "19:00-20:00", "19:00-20:00", "19:00-20:00", "19:00-20:00"),
  createData("20:00-21:00", "20:00-21:00", "20:00-21:00", "20:00-21:00", "20:00-21:00", "20:00-21:00", "20:00-21:00"),
  createData("21:00", "21:00", "21:00", "21:00", "21:00", "21:00", "21:00"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell className={classes.table}>Sunday</TableCell>
            <TableCell className={classes.table}>Monday</TableCell>
            <TableCell className={classes.table}>Tuesday</TableCell>
            <TableCell className={classes.table}>Wednesday</TableCell>
            <TableCell className={classes.table}>Thursday</TableCell>
            <TableCell className={classes.table}>Friday</TableCell>
            <TableCell className={classes.table}>Saturday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.table}>{row.sunday}</TableCell>
              <TableCell className={classes.table}>{row.monday}</TableCell>
              <TableCell className={classes.table}>{row.tuesday}</TableCell>
              <TableCell className={classes.table}>{row.wednesday}</TableCell>
              <TableCell className={classes.table}>{row.thursday}</TableCell>
              <TableCell className={classes.table}>{row.friday}</TableCell>
              <TableCell className={classes.table}>{row.saturday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}