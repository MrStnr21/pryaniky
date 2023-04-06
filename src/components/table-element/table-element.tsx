import { FC } from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { TDoc } from "../../services/types/data";
import { useAppDispatch } from "../../services/hooks/hooks";
import { deleteDocAction } from "../../services/actions/delete-doc";

type TDocument = {
  heading?: boolean;
  document: TDoc;
};

const TableElement: FC<TDocument> = ({ heading = false, document }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (evt: any) => {
    evt.preventDefault();

    dispatch(deleteDocAction(document.id));
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
              <IconButton type="button" aria-label="edit">
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
    </>
  );
};

export { TableElement };
