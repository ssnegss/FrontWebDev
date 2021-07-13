import './App.css';
import DenseTable from '../src/components/TableComponent/TableComponent'
import { ButtonComponent } from '../src/components/ButtonComponent/ButtonComponent'
import { SelectComponent } from '../src/components/SelectComponent/SelectComponent'

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
