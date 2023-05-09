import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
