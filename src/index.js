import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
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
<RouterProvider router={router} />
);