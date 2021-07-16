import './App.css';
import React, { useState } from "react";
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent';
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent';
import { TextFieldComponent as WeekCalendar } from '../src/components/TextFieldComponent/TextFieldComponent';

function App() {

  const handleDateChange = (e) => {
    setValue(e.target.value);
    setButtonStateActive(false);
  }

  const moveBack = (e) => {
    document.getElementById("weekField").stepDown(1);
    setValue(e.target.value);
  }

  const moveForward = (e) => {
    document.getElementById("weekField").stepUp(1);
    setValue(e.target.value);
  }
  const [value, setValue] = useState("");
  const [buttonState, setButtonStateActive] = useState(true);

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="navContainer">
          <Button
            buttonName="back"
            onClick={moveBack}
            disabled={buttonState}
          />
          <WeekCalendar
            value={value}
            onChange={handleDateChange}
          />
          <Button
            buttonName="forward"
            onClick={moveForward}
            disabled={buttonState}
          />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
