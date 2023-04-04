import { useState, ChangeEvent } from "react";

import { TFormStateType } from "../types/data";

function useForm<T>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

const initialFormState: TFormStateType = {
  name: "",
  password: "",
};

export { useForm, initialFormState };
