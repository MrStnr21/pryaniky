import { FC } from "react";

import styleTable from "./table.module.css";

import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Paper,
  Table as TableTemplate,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TableBody,
} from "@mui/material";
import { useNavigate } from "react-router";
import { routesUrl } from "../utils/routesData";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { logoutAction } from "../../services/actions/authorization";
import { getDataDocAction } from "../../services/actions/data-doc";
import { TableElement } from "../table-element/table-element";

const Table: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { document } = useAppSelector((store) => store.getDoc);

  const handleGetDataDoc = () => {
    dispatch(getDataDocAction());
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(routesUrl.login);
  };

  return (
    <section className={styleTable.section}>
      <div className={styleTable.controlContainer}>
        <Button variant="outlined" onClick={handleGetDataDoc}>
          <PostAddIcon />
          <h2 className={styleTable.docControl}>Добавить новый документ</h2>
        </Button>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          <LogoutIcon />
          <h2 className={styleTable.docControl}>Выйти из аккаунта</h2>
        </Button>
      </div>
      {/* <div className={styleTable.docContainer}>
        <h3 className={styleTable.docTitle}>Имя документа</h3>
        <h3 className={styleTable.docTitle}>Тип документа</h3>
        <h3 className={styleTable.docTitle}>Статус</h3>
        <h3 className={styleTable.docTitle}>Число сотрудников</h3>
        <h3 className={styleTable.docTitle}>Подписи сотрудников</h3>
        <h3 className={styleTable.docTitle}>Дата подписания</h3>
        <h3 className={styleTable.docTitle}>Подпись компании</h3>
        <h3 className={styleTable.docTitle}>Дата подписания</h3>
        <h3 className={styleTable.docTitle}>Редактировать</h3>
        <h3 className={styleTable.docTitle}>Удалить</h3>
      </div> */}
      <TableContainer component={Paper}>
        <TableTemplate size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left">Имя документа</TableCell>
              <TableCell align="left">Тип документа</TableCell>
              <TableCell align="left">Статус</TableCell>
              <TableCell align="left">Число сотрудников</TableCell>
              <TableCell align="left">Подписи сотрудников</TableCell>
              <TableCell align="left">Дата подписания</TableCell>
              <TableCell align="left">Подпись компании</TableCell>
              <TableCell align="left">Дата подписания</TableCell>
              <TableCell align="left">Редактировать</TableCell>
              <TableCell align="left">Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </TableTemplate>
      </TableContainer>
    </section>
  );
};

export { Table };
