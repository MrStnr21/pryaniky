import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
