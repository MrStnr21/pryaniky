import { FC } from "react";

import stylesDocumentForm from "./document-form.module.css";
import { TextField, Button } from "@mui/material";
import { TDoc } from "../../services/types/data";

type TDocument = {
  document: TDoc;
};

const DocumentForm: FC<TDocument> = ({ document }) => {
  return (
    <form className={stylesDocumentForm.container}>
      <TextField
        className="materialUIInput"
        label={document.documentName}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <TextField
        className="materialUIInput"
        label={document.documentType}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <TextField
        className="materialUIInput"
        label={document.employeeNumber}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <TextField
        className="materialUIInput"
        label={document.employeeSignatureName}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <TextField
        className="materialUIInput"
        label={document.employeeSigDate}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <TextField
        className="materialUIInput"
        label={document.companySignatureName}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <TextField
        className="materialUIInput"
        label={document.companySigDate}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        required
      />
      <Button variant="outlined">Добавить документ</Button>
      <Button variant="outlined" color="error">
        закрыть
      </Button>
    </form>
  );
};

export { DocumentForm };
