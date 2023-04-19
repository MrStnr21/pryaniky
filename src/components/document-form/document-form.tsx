import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";

import stylesDocumentForm from "./document-form.module.css";

import { TextField, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import dayjs from "dayjs";

import { initialDocumentState } from "../utils/data";
import { tableHeading } from "../utils/data";

import { useAppDispatch } from "../../services/hooks/hooks";

import { addDocAction } from "../../services/actions/add-doc";
import { editDocAction } from "../../services/actions/edit-doc";

import { TDoc } from "../../services/types/data";

type TDocument = {
  submitHeading: string;
  type: string;
  docValues?: TDoc;
  onClose: () => void;
};

const DocumentForm: FC<TDocument> = ({
  type,
  submitHeading,
  docValues,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const [addValues, setAddValue] = useState<TDoc>(initialDocumentState);

  useEffect(() => {
    if (type === "editDocument" && docValues) {
      setAddValue(docValues);
    }
  }, [docValues, type]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAddValue({
      ...addValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmitAdd = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(addDocAction(addValues));
    onClose();
  };

  const handleSubmitEdit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(editDocAction(addValues, addValues.id));
    onClose();
  };

  return (
    <form
      className={stylesDocumentForm.container}
      onSubmit={type === "addDocument" ? handleSubmitAdd : handleSubmitEdit}
    >
      <TextField
        name={"documentName"}
        className="materialUIInput"
        label={tableHeading.documentName}
        variant="outlined"
        color="primary"
        style={{ width: 425 }}
        onChange={onChange}
        value={addValues.documentName || ""}
        required
      />
      <TextField
        name={"documentType"}
        className="materialUIInput"
        label={tableHeading.documentType}
        variant="outlined"
        color="primary"
        style={{ width: 425 }}
        onChange={onChange}
        value={addValues.documentType || ""}
        required
      />
      <TextField
        name={"documentStatus"}
        className="materialUIInput"
        label={tableHeading.documentStatus}
        variant="outlined"
        color="primary"
        style={{ width: 425 }}
        onChange={onChange}
        value={addValues.documentStatus || ""}
        required
      />
      <TextField
        name={"employeeNumber"}
        className="materialUIInput"
        label={tableHeading.employeeNumber}
        variant="outlined"
        color="primary"
        style={{ width: 425 }}
        onChange={onChange}
        value={addValues.employeeNumber || ""}
        required
      />
      <div className={stylesDocumentForm.signature}>
        <TextField
          name={"employeeSignatureName"}
          className="materialUIInput"
          label={tableHeading.employeeSignatureName}
          variant="outlined"
          color="primary"
          style={{ width: 425 }}
          onChange={onChange}
          value={addValues.employeeSignatureName || ""}
          required
        />

        <DatePicker
          onChange={(arg) => {
            setAddValue({
              ...addValues,
              employeeSigDate: arg!.toISOString(),
            });
          }}
          value={dayjs(addValues.employeeSigDate)}
        />
      </div>
      <div className={stylesDocumentForm.signature}>
        <TextField
          name={"companySignatureName"}
          className="materialUIInput"
          label={tableHeading.companySignatureName}
          variant="outlined"
          color="primary"
          style={{ width: 425 }}
          onChange={onChange}
          value={addValues.companySignatureName || ""}
          required
        />
        <DatePicker
          onChange={(arg) => {
            setAddValue({
              ...addValues,
              companySigDate: arg!.toISOString(),
            });
          }}
          value={dayjs(addValues.companySigDate)}
        />
      </div>
      <Button style={{ width: 425 }} type="submit" variant="outlined">
        {submitHeading}
      </Button>
    </form>
  );
};

export { DocumentForm };
