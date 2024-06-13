import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HackatonProvider } from "./contexts/hackathonContext";

import App from "./App";

import Planets from "./pages/Planets/Planets";
import SelectFight from "./pages/selectFight/SelectFight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/planetes",
    element: <Planets />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/planetes`)
        .then((res) => res.data),
  },
  {
    path: "/planetes/:id",
    element: <SelectFight />,
    loader: async ({ params }) => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/planetes/${params.id}`
      );

      return response.data;
    },
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
