import { FC } from "react";

import styleAppHeader from "./app-header.module.css";

import logoPryaniky from "../../images/pryaniky.svg";

const AppHeader: FC = () => {
  return (
    <header className={styleAppHeader.header}>
      <img src={logoPryaniky} className={styleAppHeader.logo} alt="Пряники" />
    </header>
  );
};

export { AppHeader };
