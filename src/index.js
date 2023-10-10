import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    HashRouter,
  } from "react-router-dom";
import App from './App';
import Artists from "./pages/Artists/Artists";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/artists",
        element: <Artists />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <RouterProvider router={router} />
  </HashRouter>
);