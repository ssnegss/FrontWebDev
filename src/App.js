import './App.css';
import React, { useState } from "react";
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent';
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent';
import { TextFieldComponent as WeekCalendar } from '../src/components/TextFieldComponent/TextFieldComponent';
import { ModalBoxComponent as ModalBox} from '../src/components/ModalBoxComponent/ModalBoxComponent';

function App() {

  const handleDateChange = (e) => {
    setValue(e.target.value);
  }

  const handleModalBoxOpen = () => {
    setModalActive(true)
  }

  // const moveBack = (e) => {
  //   setValue();
  // }

  // const moveForward = (e) => {
  //   setValue();
  // }
  const [modalActive, setModalActive] = useState(false);
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
        <Table />
        <button onClick={handleModalBoxOpen}>CALL MODAL BOX</button>
        <ModalBox active={modalActive} setActive={setModalActive} header="Header activity" buttonName="ButtonName">
        </ModalBox>
      </div>
    </div>
  );
}

export default App;
