import { BASE_URL } from "./data";

import { request } from "./api";

import {
  IAddDocResponse,
  IEditDocResponse,
  TDoc,
} from "../../services/types/data";

//запрос на добавление нового документа
function addNewDocApi(docInfo: TDoc) {
  return request<IAddDocResponse>(`${BASE_URL}/userdocs/create`, {
    method: "POST",
    headers: {
      "x-auth": localStorage.getItem("x-auth")!,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(docInfo),
  });
}

//запрос на удаление документа
function deleteDocApi(id: string) {
  return request<IEditDocResponse>(`${BASE_URL}/userdocs/delete/${id}`, {
    method: "POST",
    headers: {
      "x-auth": localStorage.getItem("x-auth")!,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

export { addNewDocApi, deleteDocApi };
