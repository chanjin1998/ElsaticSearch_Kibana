import "./App.css";
import Dashboard from "./KibanaDashboard";
import TeachTable from "./TeachTable"
import Map from "./Map"
// import Chart from './Chart'
function App() {
  return (
    <div>
      <div>
      <TeachTable/>
      {/* <Dashboard/> */}
      </div>
      <div>
        <Map/>
      </div>
    </div>
  );
}

export default App;
