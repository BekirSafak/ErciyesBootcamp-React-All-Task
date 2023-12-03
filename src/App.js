import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, Link, NavLink, Navigate, useNavigate, Router } from 'react-router-dom';

import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import Task5 from './pages/Task5';
import Task6 from './pages/Task6';
import Task6details from './pages/Task6details'
import Task7 from './pages/Task7';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Task1></Task1>}></Route>
        <Route path='/task2' element={<Task2></Task2>}></Route>
        <Route path='/task3' element={<Task3></Task3>}></Route>
        <Route path='/task4' element={<Task4></Task4>}></Route>
        <Route path='/task5' element={<Task5></Task5>}></Route>
        <Route path='/task6' element={<Task6></Task6>}></Route>
        <Route path='/task6/:id' element={<Task6details></Task6details>}></Route>
        <Route path='/task7' element={<Task7></Task7>}></Route>
      </Routes>
    </div>
  );
}

export default App;
