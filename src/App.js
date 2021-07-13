import './App.css';
import { TableComponent as Table } from '../src/components/TableComponent/TableComponent'
import { ButtonComponent as Button } from '../src/components/ButtonComponent/ButtonComponent'
import { SelectComponent as Select } from '../src/components/SelectComponent/SelectComponent'

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="navContainer">
          <Button buttonName="back" />
          <Select />
          <Button buttonName="forward" />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
