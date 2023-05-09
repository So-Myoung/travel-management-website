import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
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
        <Route path="/detail/0"
      </Routes>
    </>
  );
}

export default App;
