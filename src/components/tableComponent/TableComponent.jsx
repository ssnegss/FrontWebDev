import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getTableComponentStyles as styles } from './TableComponentStyles';

const useStyles = makeStyles((theme) => styles(theme))

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

export const TableComponent = () => {
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
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.sunday}/></form></TableCell>
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.monday}/></form></TableCell>
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.tuesday}/></form></TableCell>
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.wednesday}/></form></TableCell>
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.thursday}/></form></TableCell>
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.friday}/></form></TableCell>
              <TableCell className={classes.table}><form><input className={classes.tableRow} type='submit' value={row.saturday}/></form></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}