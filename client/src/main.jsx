import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HackatonProvider } from "./contexts/hackathonContext";

import App from "./App";
import SelectFight from "./pages/selectFight/SelectFight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/toto",
    element: <App />,
  },
  {
    path: "/planetes/:id",
    element: <SelectFight />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HackatonProvider>
      <RouterProvider router={router} />
    </HackatonProvider>
  </React.StrictMode>
);
