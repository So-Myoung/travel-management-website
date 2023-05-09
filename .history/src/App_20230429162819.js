import Navbar from './components/Navbar';
import { Routes, Route, Outlet } from 'react-router-dom';
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
      <Route path="/detail/:id" element={<DetailMenus shoes={shoes}/>}/>
    </Routes>
    </>
  );
}

export default App;
