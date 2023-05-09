import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
