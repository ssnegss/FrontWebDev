import './App.css';
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent'
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent'
import { TextFieldComponent as WeekCalendar } from '../src/components/TextFieldComponent/TextFieldComponent'

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="navContainer">
          <Button buttonName="back" />
          <WeekCalendar />
          <Button buttonName="forward" />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
