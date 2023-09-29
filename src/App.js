import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Water from './components/Water';
import Sampling from './components/Sampling';
import Sanitation from './components/Sanitation';
import Micro from './components/Micro';
import Level1 from './components/Level1';
import Survey from './components/Survey';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import RiskLevelPage from './components/Risk-Level' 
import ReferancePathogen from './components/ReferancePathogen';
import BarChart from './components/BarChart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BarChart />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Water' element={<Water />} />
        <Route path='/Sampling' element={<Sampling />} />
        <Route path='/Level' element={<Level1 />} />
        <Route path='/ReferancePathogen' element={<ReferancePathogen/>}/>
        <Route path='/Survey' element={<Survey />} />
        <Route path='/Risk-Level' element={<RiskLevelPage />} /> 
        <Route path='/Register' element={<RegisterForm />} />
        <Route path='/Test' element={<Test />} />
        <Route path='/BarChart' element={<BarChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
