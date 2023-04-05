import { TStore } from "../../services/types";

const authSel = (store: TStore) => store.auth;
const documentsSel = (store: TStore) => store.documents;
const addDocumentSel = (store: TStore) => store.addDocument;

export { authSel, documentsSel, addDocumentSel };
