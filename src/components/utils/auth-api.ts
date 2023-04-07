import { BASE_URL } from "./data";

import { request } from "./api";

import { ILoginResponse } from "../../services/types/data";

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

export { loginApi };
