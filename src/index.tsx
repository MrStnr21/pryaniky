import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./index.css";

import { store } from "./services/store";

import reportWebVitals from "./reportWebVitals";

import { App } from "./components/app/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);

reportWebVitals();
