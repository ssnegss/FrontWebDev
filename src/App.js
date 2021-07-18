import './App.css';
import React, { useState } from "react";
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent';
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent';
import { TextFieldComponent as WeekCalendar } from '../src/components/TextFieldComponent/TextFieldComponent';
import { getWeek } from "../src/services/api";
import { useEffect } from "react";

function App() {

  const fetchWeek = async () => {
    const response = await getWeek(currentWeek, currentYear);

    console.log(response);
  };

  useEffect(() => {
    fetchWeek();
  }, []);

  function getWeekAndYear(dateStr) {
    let dates = dateStr.split("-W");
    let year = dates[0];
    let week = dates[1];
    return { year, week };
  }

  // console.log(currentWeek, currentYear)

  const handleDateChange = (e) => {
    setValue(e.target.value);
    var currentDate = document.getElementById("weekField").value;
    setCurrentWeek(getWeekAndYear(currentDate).week);
    setCurrentYear(getWeekAndYear(currentDate).year);
    setButtonStateActive(false);
    
    // console.log(currentDate)
    // console.log(getWeekAndYear(currentDate).week)
    // console.log(getWeekAndYear(currentDate).year)
  }

  const moveBack = (e) => {
    document.getElementById("weekField").stepDown(1);
    setValue(document.getElementById("weekField").value);
    let currentDate = document.getElementById("weekField").value;
    setCurrentWeek(getWeekAndYear(currentDate).week);
    setCurrentYear(getWeekAndYear(currentDate).year);

    // console.log(currentDate)
    // console.log(getWeekAndYear(currentDate).week)
    // console.log(getWeekAndYear(currentDate).year)
  }

  const moveForward = (e) => {
    document.getElementById("weekField").stepUp(1);
    setValue(document.getElementById("weekField").value);
    let currentDate = document.getElementById("weekField").value;
    setCurrentWeek(getWeekAndYear(currentDate).week);
    setCurrentYear(getWeekAndYear(currentDate).year);

    // console.log(currentDate)
    // console.log(getWeekAndYear(currentDate).week)
    // console.log(getWeekAndYear(currentDate).year)
    // console.log(currentWeek)
  }

  const [value, setValue] = useState('');
  const [buttonState, setButtonStateActive] = useState(true);
  const [currentWeek, setCurrentWeek] = useState("");
  const [currentYear, setCurrentYear] = useState("");

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
