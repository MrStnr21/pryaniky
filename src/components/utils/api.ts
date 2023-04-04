import { BASE_URL } from "./data";

import {
  IResponse,
  ILoginResponse,
  IGetDocResponse,
} from "../../services/types/data";

type TOptions = {
  headers: { "x-auth"?: string; "Content-Type": string };
  method?: string;
  body?: string;
};

//шаблон запроса
function checkRes<T>(res: IResponse<T>): Promise<T> | Promise<never> {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject([`Ошибка ${res.status}`, res.json()]);
}

function request<T>(url: string, options: TOptions): Promise<T> {
  return fetch(url, options).then(checkRes);
}

//запрос на авторизацию
function loginApi(userInfo: { [name: string]: string }) {
  return request<ILoginResponse>(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      name: userInfo.name,
      password: userInfo.password,
    }),
  });
}

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

export { loginApi, getDataDocApi };
