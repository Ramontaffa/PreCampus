import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import React from "react";

import Login from "./Pages/Login";
import MainLayout from "./layouts/MainLayout";
import Profile from "./Pages/Profile";
import Register from "./Pages/register";
import RecoverRequest from "./Pages/PasswordRecovery/Request";
import RecoverReset from "./Pages/PasswordRecovery/Reset";
import RecoverSuccess from "./Pages/PasswordRecovery/Sucess";
import { Event } from "./Pages/event";
import PainelEventos from "./Pages/PainelEventos";
import MyConfirmedEvents from "./Pages/MyEvents";

import "./index.css";
import CreateEventScreen from "./Pages/CreateEvent";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: PainelEventos },
      { path: "/profile", Component: Profile },
      { path: "/my-events", Component: MyConfirmedEvents },
      { path: "/event", Component: Event },
      {path: "/events/create", Component: CreateEventScreen}
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/recover-password",
    Component: RecoverRequest,
  },
  {
    path: "/recover-password/reset",
    Component: RecoverReset,
  },
  {
    path: "/recover-password/Sucess",
    Component: RecoverSuccess,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
