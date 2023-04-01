import { FC } from "react";

import { Routes, Route } from "react-router-dom";

import styleApp from "./app.module.css";

import { LoginPage, MainPage } from "../../pages";

import { routesUrl } from "../utils/routesData";

const App: FC = () => {
  return (
    <div className={styleApp.app}>
      <Routes>
        <Route path={routesUrl.homePage} element={<LoginPage />} />
        <Route path={routesUrl.mainPage} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export { App };
