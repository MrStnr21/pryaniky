import { FC } from "react";

import { Link } from "@mui/material";

import styleAppHeader from "./app-header.module.css";

import logoPryaniky from "../../images/pryaniky.svg";

const AppHeader: FC = () => {
  return (
    <header className={styleAppHeader.header}>
      <Link href="https://pryaniky.com/" target="_blank">
        <img src={logoPryaniky} className={styleAppHeader.logo} alt="Пряники" />
      </Link>
    </header>
  );
};

export { AppHeader };
