import './App.css';
import { Home } from './components/Home';
import { Employee } from './components/Employee';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Department } from './components/Department';
import {Navigation} from './components/Navigation';


function App() {
  return (
    <BrowserRouter>
    <div className="Container">

      <h3 className="m-3 d-flex justify-content-center">
        React JS with Web API</h3>
      
      <h5 className="m-3 d-flex justify-content-center">
        Employee Management Poral</h5>

        {/* Navigation Menu */}
        <Navigation></Navigation> 
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/department" element={<Department/>} />
        <Route path="/employee" element={<Employee/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
