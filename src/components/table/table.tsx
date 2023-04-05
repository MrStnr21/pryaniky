import { FC, useEffect } from "react";
import { useNavigate } from "react-router";

import styleTable from "./table.module.css";

import LogoutIcon from "@mui/icons-material/Logout";
import {
  Paper,
  Table as TableTemplate,
  TableContainer,
  TableHead,
  Button,
  TableBody,
} from "@mui/material";

import { routesUrl } from "../utils/routesData";
import { tableHeading } from "../utils/data";
import { addDocumentSel, documentsSel } from "../utils/selectorData";

import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";

import { logoutAction } from "../../services/actions/authorization";
import { getDataDocAction } from "../../services/actions/data-doc";

import { TDoc } from "../../services/types/data";

import { TableElement } from "../table-element/table-element";
import { BasicModal } from "../modal/modal";

const Table: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { documents } = useAppSelector(documentsSel);
  const { addDocSuccess } = useAppSelector(addDocumentSel);

  useEffect(() => {
    dispatch(getDataDocAction());
  }, [dispatch, addDocSuccess]);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(routesUrl.login);
  };

  return (
    <section className={styleTable.section}>
      <div className={styleTable.controlContainer}>
        <BasicModal heading={"Добавить новый документ"}></BasicModal>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          <LogoutIcon />
          <h2 className={styleTable.docControl}>Выйти из аккаунта</h2>
        </Button>
      </div>
      <TableContainer component={Paper}>
        <TableTemplate size="medium">
          <TableHead>
            <TableElement document={tableHeading} />
          </TableHead>
          <TableBody>
            {documents.map((document: TDoc) => (
              <TableElement document={document} key={document.id} />
            ))}
          </TableBody>
        </TableTemplate>
      </TableContainer>
    </section>
  );
};

export { Table };
