import { BASE_URL } from "./data";

import { request } from "./api";

import {
  IAddDocResponse,
  IEditDocResponse,
  IDeleteDocResponse,
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
  return request<IDeleteDocResponse>(`${BASE_URL}/userdocs/delete/${id}`, {
    method: "POST",
    headers: {
      "x-auth": localStorage.getItem("x-auth")!,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

//запрос на редактирование документа
function editDocApi(docInfo: TDoc, id: string) {
  return request<IEditDocResponse>(`${BASE_URL}/userdocs/set/${id}`, {
    method: "POST",
    headers: {
      "x-auth": localStorage.getItem("x-auth")!,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(docInfo),
  });
}

export { addNewDocApi, deleteDocApi, editDocApi };
