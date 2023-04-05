import { FC } from "react";

import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TDoc } from "../../services/types/data";

type TDocument = {
  document: TDoc;
};

const TableElement: FC<TDocument> = ({ document }) => {
  return (
    <>
      <TableRow>
        <TableCell align="left">{document.documentName}</TableCell>
        <TableCell align="left">{document.documentType}</TableCell>
        <TableCell align="left">{document.employeeNumber}</TableCell>
        <TableCell align="left">{document.employeeSignatureName}</TableCell>
        <TableCell align="left">{document.employeeSigDate}</TableCell>
        <TableCell align="left">{document.companySignatureName}</TableCell>
        <TableCell align="left">{document.companySigDate}</TableCell>
        <TableCell align="left">
          <IconButton type="button" aria-label="edit">
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="left">
          <IconButton type="button" aria-label="edit">
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export { TableElement };
