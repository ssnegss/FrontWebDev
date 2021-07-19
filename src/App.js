import './App.css';
import React, { useState } from "react";
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent';
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent';
import { TextFieldComponent as WeekCalendar } from '../src/components/TextFieldComponent/TextFieldComponent';
import { getWeek } from "../src/services/api";
import { useEffect } from "react";

function App() {

  const [value, setValue] = useState('');
  const [buttonState, setButtonStateActive] = useState(true);
  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);

  function getWeekAndYear(dateStr) {
    let dates = dateStr.split("-W");
    let year = dates[0];
    let week = dates[1];
    return { year, week };
  }
  
  const fetchWeek = async () => {
    const response = await getWeek(currentWeek, currentYear);

    console.log(response);
  };

  useEffect(() => {
    fetchWeek();
  });

  const handleDateChange = (e) => {
    setValue(e.target.value);
    var currentDate = document.getElementById("weekField").value;
    setCurrentWeek(getWeekAndYear(currentDate).week);
    setCurrentYear(getWeekAndYear(currentDate).year);
    setButtonStateActive(false);
  }

  const moveBack = (e) => {
    document.getElementById("weekField").stepDown(1);
    setValue(document.getElementById("weekField").value);
    let currentDate = document.getElementById("weekField").value;
    setCurrentWeek(getWeekAndYear(currentDate).week);
    setCurrentYear(getWeekAndYear(currentDate).year);
  }

  const moveForward = (e) => {
    document.getElementById("weekField").stepUp(1);
    setValue(document.getElementById("weekField").value);
    let currentDate = document.getElementById("weekField").value;
    setCurrentWeek(getWeekAndYear(currentDate).week);
    setCurrentYear(getWeekAndYear(currentDate).year);
  }

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
