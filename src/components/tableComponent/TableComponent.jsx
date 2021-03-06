import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getTableComponentStyles as styles } from './TableComponentStyles';
import { ModalBoxComponent as ModalBox } from '../ModalBoxComponent/ModalBoxComponent';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => styles(theme))

export const TableComponent = (props) => {

  const days = [
    { id: 0, day: 'Sunday' },
    { id: 1, day: 'Monday' },
    { id: 2, day: 'Tuesday' },
    { id: 3, day: 'Wednesday' },
    { id: 4, day: 'Thursday' },
    { id: 5, day: 'Friday' },
    { id: 6, day: 'Saturday' }];

  const daysTime = [
    { id: 0, time: "9:00 - 10:00" },
    { id: 1, time: "10:00 - 11:00" },
    { id: 2, time: "11:00 - 12:00" },
    { id: 3, time: "12:00 - 13:00" },
    { id: 4, time: "13:00 - 14:00" },
    { id: 5, time: "14:00 - 15:00" },
    { id: 6, time: "15:00 - 16:00" },
    { id: 7, time: "16:00 - 17:00" },
    { id: 8, time: "17:00 - 18:00" },
    { id: 9, time: "18:00 - 19:00" },
    { id: 10, time: "19:00 - 20:00" },
    { id: 11, time: "20:00 - 21:00" }]

  const daysObject = {
    sunday: {},
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {}
  };

  const timeObject = {
    activity1: { time: "9:00 - 10:00" },
    activity2: { time: "10:00 - 11:00" },
    activity3: { time: "11:00 - 12:00" },
    activity4: { time: "12:00 - 13:00" },
    activity5: { time: "13:00 - 14:00" },
    activity6: { time: "14:00 - 15:00" },
    activity7: { time: "15:00 - 16:00" },
    activity8: { time: "16:00 - 17:00" },
    activity9: { time: "17:00 - 18:00" },
    activity10: { time: "18:00 - 19:00" },
    activity11: { time: "19:00 - 20:00" },
    activity12: { time: "20:00 - 21:00" }}

    daysObject.sunday=timeObject;
    daysObject.monday=timeObject;
    daysObject.tuesday=timeObject;
    daysObject.wednesday=timeObject;
    daysObject.thursday=timeObject;
    daysObject.friday=timeObject;
    daysObject.saturday=timeObject;

    console.log(daysObject)

  function getStartTime(dateStr) {
    let dates = dateStr.split(" - ");
    let start = dates[0];
    return { start };
  }

  function getEndTime(dateStr) {
    let dates = dateStr.split(" - ");
    let end = dates[1];
    return { end };
  }

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
    var time = e.target.value;
    setStartTime(getStartTime(time).start)
    setEndTime(getEndTime(time).end)

    if (e.firstChild) {
      handleClickEdit(e);
    } else {
      handleClickAdd(e);
    }
    console.log(getEndTime(time).end)
  };

  const [modalEditActive, setModalEditActive] = useState(false);
  const [modalAddActive, setModalAddActive] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleModalBoxEditOpen = () => {
    setAnchorElEdit(null);
    setModalEditActive(true)
  }
  const handleModalBoxAddOpen = () => {
    setAnchorElAdd(null);
    setModalAddActive(true)
  }

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
          <TableBody> {daysTime.map((daysTime) => (
            <TableRow>
              {days.map(() => (
                <TableCell className={classes.table}><button className={classes.tableRow} value={daysTime.time} onClick={handleClick}>{daysTime.time}</button></TableCell>
              ))}
            </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Popover
          id={idAdd}
          open={openAdd}
          anchorEl={anchorElAdd}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Typography className={classes.typography}>
            <button className={classes.popover__button} onClick={handleModalBoxAddOpen}>Add</button>
          </Typography>
        </Popover>
        <ModalBox active={modalAddActive} setActive={setModalAddActive} header="Add activity" buttonName="Add" valueStart={startTime} valueEnd={endTime}></ModalBox>
      </div>
      <div>
        <Popover
          id={idEdit}
          open={openEdit}
          anchorEl={anchorElEdit}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Typography className={classes.typography}>
            <button className={classes.popover__button} onClick={handleModalBoxEditOpen}>Edit</button> <hr />
            <button className={classes.popover__button} >Delete</button>
          </Typography>
        </Popover>
        <ModalBox active={modalEditActive} setActive={setModalEditActive} header="Edit activity" buttonName="Edit"></ModalBox>
      </div>
    </div>
  );
}