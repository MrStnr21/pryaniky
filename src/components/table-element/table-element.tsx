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
        <TableCell align="right">{document.documentName}</TableCell>
        <TableCell align="right">{document.documentType}</TableCell>
        <TableCell align="right">{document.companySigDate}</TableCell>
        <TableCell align="right">{document.employeeNumber}</TableCell>
        <TableCell align="right">{document.employeeSignatureName}</TableCell>
        <TableCell align="right">{document.employeeSigDate}</TableCell>
        <TableCell align="right">{document.companySignatureName}</TableCell>
        <TableCell align="right">{document.companySigDate}</TableCell>
        <TableCell align="right">
          <IconButton type="button" aria-label="edit">
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <IconButton type="button" aria-label="edit">
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export { TableElement };
