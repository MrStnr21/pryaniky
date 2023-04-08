import { FC, useCallback } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import stylesNotFound from "./not-found.module.css";

import { Button } from "@mui/material";

import { routesUrl } from "../utils/routesData";

const NotFound: FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const onClick = useCallback<() => void>(() => {
    navigate({ pathname: routesUrl.mainPage });
  }, [navigate]);

  return (
    <div className={stylesNotFound.container}>
      <h2 className={stylesNotFound.title}>Страница не найдена</h2>
      <h2 className={stylesNotFound.title}>Ошибка 404</h2>
      <Button onClick={onClick} type="button">
        Вернуться на главную страницу
      </Button>
    </div>
  );
};

export { NotFound };
