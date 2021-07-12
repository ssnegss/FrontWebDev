import './App.css';
import DenseTable from '../src/components/tableComponent/TableComponent'
import { ButtonComponent } from '../src/components/buttonComponent/ButtonComponent'
import { SelectComponent } from '../src/components/selectComponent/SelectComponent'

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="navContainer">
          <ButtonComponent buttonName="back" />
          <SelectComponent />
          <ButtonComponent buttonName="forward" />
        </div>
        <DenseTable />
      </div>
    </div>
  );
}

export default App;
