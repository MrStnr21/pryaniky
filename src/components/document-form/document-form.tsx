import { FC, useState, ChangeEvent, FormEvent } from "react";

import stylesDocumentForm from "./document-form.module.css";

import { TextField, Button } from "@mui/material";

import { initialDocumentState } from "../utils/data";

import { useAppDispatch } from "../../services/hooks/hooks";

import { addDocAction } from "../../services/actions/add-doc";

import { TDoc } from "../../services/types/data";

type TDocument = {
  documentInfo: TDoc;
  onClose: () => void;
};

const DocumentForm: FC<TDocument> = ({ documentInfo, onClose }) => {
  const [values, setValue] = useState<TDoc>(initialDocumentState);
  const dispatch = useAppDispatch();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmitAdd = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(addDocAction(values));
    onClose();
  };

  return (
    <form className={stylesDocumentForm.container} onSubmit={handleSubmitAdd}>
      <TextField
        name={"documentName"}
        className="materialUIInput"
        label={documentInfo.documentName}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.documentName || ""}
        required
      />
      <TextField
        name={"documentType"}
        className="materialUIInput"
        label={documentInfo.documentType}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.documentType}
        required
      />
      <TextField
        name={"documentStatus"}
        className="materialUIInput"
        label={documentInfo.documentStatus}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.documentStatus}
        required
      />
      <TextField
        name={"employeeNumber"}
        className="materialUIInput"
        label={documentInfo.employeeNumber}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.employeeNumber}
        required
      />
      <TextField
        name={"employeeSignatureName"}
        className="materialUIInput"
        label={documentInfo.employeeSignatureName}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.employeeSignatureName}
        required
      />
      <TextField
        name={"employeeSigDate"}
        className="materialUIInput"
        label={documentInfo.employeeSigDate}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.employeeSigDate}
        required
      />
      <TextField
        name={"companySignatureName"}
        className="materialUIInput"
        label={documentInfo.companySignatureName}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.companySignatureName}
        required
      />
      <TextField
        name={"companySigDate"}
        className="materialUIInput"
        label={documentInfo.companySigDate}
        variant="outlined"
        color="primary"
        style={{ width: 400 }}
        onChange={onChange}
        value={values.companySigDate}
        required
      />
      <Button type="submit" variant="outlined">
        Добавить документ
      </Button>
      <Button variant="outlined" color="error" onClick={onClose}>
        закрыть
      </Button>
    </form>
  );
};

export { DocumentForm };
