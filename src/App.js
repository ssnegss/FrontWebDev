import './App.css';
import React, { useState } from "react";
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent';
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent';
import { TextFieldComponent as WeekCalendar } from '../src/components/TextFieldComponent/TextFieldComponent';
import { ModalBoxComponent as ModalBox } from '../src/components/ModalBoxComponent/ModalBoxComponent';

function App() {

  const handleDateChange = (e) => {
    setValue(e.target.value);
  }

  // const moveBack = (e) => {
  //   setValue();
  // }

  // const moveForward = (e) => {
  //   setValue();
  // }
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="navContainer">
          <Button
            buttonName="back"
          // onClick={moveBack}
          />
          <WeekCalendar
            value={value}
            onChange={handleDateChange}
          />
          <Button
            buttonName="forward"
          // onClick={moveForward}
          />
        </div>
        <Table
          items={
            [{ day: 'Sunday'},
            { day: 'Monday'},
            { day: 'Tuesday'},
            { day: 'Wednesday'},
            { day: 'Thursday'},
            { day: 'Friday'},
            { day: 'Saturday'},
            ]}
        />
      </div>
    </div>
  );
}

export default App;
