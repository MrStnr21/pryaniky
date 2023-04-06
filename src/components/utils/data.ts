import { TDoc } from "../../services/types/data";

const tableHeading: TDoc = {
  companySigDate: "Дата подписания",
  companySignatureName: "Подпись компании",
  documentName: "Имя документа",
  documentStatus: "Статус",
  documentType: "Тип документа",
  employeeNumber: "Число сотрудников",
  employeeSigDate: "Дата подписания",
  employeeSignatureName: "Подпись сотрудников",
};

const initialDocumentState: TDoc = {
  companySigDate: "",
  companySignatureName: "",
  documentName: "",
  documentStatus: "",
  documentType: "",
  employeeNumber: "",
  employeeSigDate: "",
  employeeSignatureName: "",
};

const BASE_URL: string =
  "https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs";

export { BASE_URL, tableHeading, initialDocumentState };
