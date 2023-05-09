import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailMenus from './pages/Menu/DetailMenus';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Routes>
      <Route path="/detail/:id" element={<DetailMenus shoes={shoes}/>}/>
    </Routes>
    </>
  );
}

export default App;
