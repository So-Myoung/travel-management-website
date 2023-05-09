import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import DetailMenus from './pages/Menu/DetailMenus';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Routes>
      <Route path="/detail/:id" element={<DetailMenus player={player}/>}/>
    </Routes>
    </>
  );
}

export default App;
