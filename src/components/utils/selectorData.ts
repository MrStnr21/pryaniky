import { TStore } from "../../services/types";

const authSel = (store: TStore) => store.auth;
const documentsSel = (store: TStore) => store.documents;
const addDocumentSel = (store: TStore) => store.addDocument;
const deleteDocumentSel = (store: TStore) => store.deleteDocument;

export { authSel, documentsSel, addDocumentSel, deleteDocumentSel };
