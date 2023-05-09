import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Online from './pages/Online/Online';
import Menu from './pages/Menu/Menu';
import Store from './pages/Store/Store';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import DetailMenus from './pages/DetailMenus';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { 
        path: '/online', 
        element: <Online /> 
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },

      // {
      //   path: '/products/new',
      //   element: <NewProduct />,
      // },
      // {
      //   path: '/products/:id',
      //   element: <ProductDetail />,
      // }, path 설정 예시
      // 여기서 경로 설정하면 너무 복잡하니까 각 페이지가서 추가 경로 설정할 것, 여기서는 메인페이지만
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
