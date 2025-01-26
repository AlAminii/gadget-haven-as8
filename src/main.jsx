import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Components/Roots/Roots.jsx";
import Erroelements from "./Components/Erroelement/Erroelements.jsx";
import Home from "./Components/Home/Home.jsx";
import Categoriecard from "./Components/Categoriecard/Categoriecard.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Erroelements />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categorys.json"),
        children: [
          {
            path: "/",
            element: <Categoriecard />,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "categorie/:category",
            element: <Categoriecard />,
            loader: () => fetch("/gadgets.json"),
          }
        ]
      }, 
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ],
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
