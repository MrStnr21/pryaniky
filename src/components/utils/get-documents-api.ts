import { BASE_URL } from "./data";

import { request } from "./api";

import { IGetDocResponse } from "../../services/types/data";

//запрос получения массива данных для таблицы
function getDataDocApi() {
  return request<IGetDocResponse>(`${BASE_URL}/userdocs/get`, {
    method: "GET",
    headers: {
      "x-auth": localStorage.getItem("x-auth")!,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

export { getDataDocApi };
