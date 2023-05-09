import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
