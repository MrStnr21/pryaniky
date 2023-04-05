import { TStore } from "../../services/types";

const authSel = (store: TStore) => store.auth;
const documentsSel = (store: TStore) => store.documents;

export { authSel, documentsSel };
