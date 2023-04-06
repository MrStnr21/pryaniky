import { FC, FormEvent, FormEventHandler, useState } from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Modal } from "../modal/modal";
import { DocumentForm } from "../document-form/document-form";

import { TDoc } from "../../services/types/data";
import { useAppDispatch, useAppSelector } from "../../services/hooks/hooks";
import { deleteDocAction } from "../../services/actions/delete-doc";
import { documentsSel } from "../utils/selectorData";

type TDocument = {
  heading?: boolean;
  document: TDoc;
};

const TableElement: FC<TDocument> = ({ heading = false, document }) => {
  const dispatch = useAppDispatch();
  const { documents } = useAppSelector(documentsSel);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [idDoc, setIdDoc] = useState<string>();

  const documentItem = documents.find((item) => item.id === idDoc);

  const handleCloseModal = () => setOpenModal(false);

  const handleDelete = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(deleteDocAction(document.id));
  };

  const handleEdit = (evt: any) => {
    evt.preventDefault();

    setIdDoc(document.id);
    setOpenModal(true);
  };

  return (
    <>
      <TableRow>
        <TableCell align="left">{document.documentName}</TableCell>
        <TableCell align="left">{document.documentType}</TableCell>
        <TableCell align="left">{document.documentStatus}</TableCell>
        <TableCell align="left">{document.employeeNumber}</TableCell>
        <TableCell align="left">{document.employeeSignatureName}</TableCell>
        <TableCell align="left">{document.employeeSigDate}</TableCell>
        <TableCell align="left">{document.companySignatureName}</TableCell>
        <TableCell align="left">{document.companySigDate}</TableCell>
        {!heading ? (
          <>
            <TableCell align="center">
              <IconButton type="button" aria-label="edit" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <IconButton
                type="button"
                aria-label="edit"
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="left">Редакитровать</TableCell>
            <TableCell align="left">Удалить</TableCell>
          </>
        )}
      </TableRow>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        heading={"Редактировать документ"}
        children={
          <DocumentForm
            submitHeading={"Редактировать документ"}
            type={"editDocument"}
            onClose={handleCloseModal}
            docValues={documentItem}
          />
        }
      />
    </>
  );
};

export { TableElement };
