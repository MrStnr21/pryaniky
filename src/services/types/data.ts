//типизация путей
export type TRoutesUrl = {
  readonly [name: string]: string;
};

//типизация данных пользователя
export type TUser = {
  name: string;
  password: string;
};

//типизация документа
export type TDoc = {
  readonly companySigDate: string;
  readonly companySignatureName: string;
  readonly documentName: string;
  readonly documentStatus: string;
  readonly documentType: string;
  readonly employeeNumber: string;
  readonly employeeSigDate: string;
  readonly employeeSignatureName: string;
  readonly id?: string;
};

//типизация запросов api
export interface IResponse<T> extends Response {
  json(): Promise<T>;
}

export interface IResBody {
  error_code: number;
}

export interface IUserResponse extends IResBody {
  user: {
    name: string;
    password: string;
  };
  data: {
    token: string;
  } | null;
}

export interface ILoginResponse extends IUserResponse {}

export interface IGetDocResponse {
  data: TDoc[];
  error_code: number;
  error_message: string;
}

//типизация хука useForm
export type TFormStateType = {
  name?: string;
  password?: string;
};
