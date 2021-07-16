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
import { PopoverAddComponent as PopoverAdd, PopoverEditComponent as PopoverEdit } from '../PopoverComponent/PopoverComponent';

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

export const TableComponent = (props) => {

  var days = [{ day: 'Sunday' }, { day: 'Monday' }, { day: 'Tuesday' }, { day: 'Wednesday' }, { day: 'Thursday' }, { day: 'Friday' }, { day: 'Saturday' },];

  const classes = useStyles();
  const [anchorElAdd, setAnchorElAdd] = React.useState(null);
  const [anchorElEdit, setAnchorElEdit] = React.useState(null);

  const handleClickAdd = (e) => {
    setAnchorElAdd(e.currentTarget);
  };

  const handleClickEdit = (e) => {
    setAnchorElEdit(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAdd(null);
    setAnchorElEdit(null);
  };

  const openAdd = Boolean(anchorElAdd);
  const openEdit = Boolean(anchorElEdit);
  const idAdd = openAdd ? 'simple-popover' : undefined;
  const idEdit = openEdit ? 'simple-popover' : undefined;

  const handleClick = (e) => {
    if (e.firstChild) {
      handleClickEdit(e);
    } else {
      handleClickAdd(e);
    }
};

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              {days.map((weekDay, index) => (
                <TableCell key={index} className={classes.tableHeader}>{weekDay.day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.sunday}</button>
                </TableCell>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.monday}</button>
                </TableCell>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.tuesday}</button>
                </TableCell>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.wednesday}</button>
                </TableCell>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.thursday}</button>
                </TableCell>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.friday}</button>
                </TableCell>
                <TableCell className={classes.table}>
                  <button className={classes.tableRow} onClick={handleClick}>{row.saturday}</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopoverAdd id={idAdd} open={openAdd} anchorEl={anchorElAdd} handleClose={handleClose}/>
      <PopoverEdit id={idEdit} open={openEdit} anchorEl={anchorElEdit} handleClose={handleClose}/>
    </div>
  );
}