import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HackatonProvider } from "./contexts/hackathonContext";

import App from "./App";

import Planets from "./pages/Planets/Planets";
import SelectFight from "./pages/selectFight/SelectFight";
import PlayerForm from "./pages/PlayerForm/PlayerForm";
import Fight from "./pages/Fight/Fight";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/player",
    element: <PlayerForm />,
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
  {
    path: "/adversaire/:id",
    element: <Fight />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/characters/${params.id}`
      );
      return res.data;
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
