import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import styleTable from "./table.module.css";

import LogoutIcon from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";
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
import {
  addDocumentSel,
  documentsSel,
  editDocumentSel,
} from "../utils/selectorData";
import { deleteDocumentSel } from "../utils/selectorData";

import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";

import { logoutAction } from "../../services/actions/authorization";
import { getDataDocAction } from "../../services/actions/data-doc";

import { TDoc } from "../../services/types/data";

import { TableElement } from "../table-element/table-element";
import { Modal } from "../modal/modal";
import { DocumentForm } from "../document-form/document-form";
import { Loader } from "../loader/loader";

const Table: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const { documents, documentsRequest } = useAppSelector(documentsSel);
  const { addDocSuccess } = useAppSelector(addDocumentSel);
  const { deleteDocSuccess } = useAppSelector(deleteDocumentSel);
  const { editDocSuccess } = useAppSelector(editDocumentSel);

  useEffect(() => {
    dispatch(getDataDocAction());
  }, [dispatch, addDocSuccess, deleteDocSuccess, editDocSuccess]);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate(routesUrl.login);
  };

  const handleOpenModalAdd = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <section className={styleTable.section}>
      <div className={styleTable.controlContainer}>
        <Button variant="outlined" onClick={handleOpenModalAdd}>
          <PostAddIcon />
          <h2 className={styleTable.docControl}>Добавить новый документ</h2>
        </Button>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          <LogoutIcon />
          <h2 className={styleTable.docControl}>Выйти из аккаунта</h2>
        </Button>
      </div>
      <TableContainer component={Paper}>
        <TableTemplate size="medium">
          <TableHead>
            <TableElement heading document={tableHeading} />
          </TableHead>
          <TableBody>
            {documents.map((document: TDoc) => (
              <TableElement document={document} key={document.id} />
            ))}
          </TableBody>
        </TableTemplate>
      </TableContainer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        heading={"Добавить новый документ"}
        children={
          <DocumentForm
            submitHeading={"Добавить документ"}
            type={"addDocument"}
            onClose={handleCloseModal}
          />
        }
      />
      {documentsRequest ? <Loader /> : null}
    </section>
  );
};

export { Table };
