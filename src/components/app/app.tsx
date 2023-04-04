import { FC } from "react";

import { Routes, Route } from "react-router-dom";

import styleApp from "./app.module.css";

import { LoginPage, MainPage } from "../../pages";

import { routesUrl } from "../utils/routesData";

import { ProtectedRoute } from "../../pages/protected-route";

const App: FC = () => {
  return (
    <div className={styleApp.app}>
      <Routes>
        <Route
          path={routesUrl.loginPage}
          element={
            <ProtectedRoute notAuth={true}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={routesUrl.mainPage}
          element={
            <ProtectedRoute notAuth={false}>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export { App };
