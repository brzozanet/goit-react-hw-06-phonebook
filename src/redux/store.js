import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [
    { id: 1, name: "Amelia Sarnowska", phone: 652310257 },
    { id: 2, name: "Katarzyna Atemborska", phone: 632580125 },
    { id: 3, name: "Malgorzata Gwiazdon", phone: 500126987 },
    { id: 4, name: "Dorota Ruta", phone: 520147632 },
    { id: 5, name: "Ilona Cynk Kastelik", phone: 200126845 },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
