import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Try from './components/Try';
import Home from './components/Home';
// import Navbar from './components/Navbar';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "try",
    element: <Try/>,
  },
  {
    path: "home",
    element: <Home/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

