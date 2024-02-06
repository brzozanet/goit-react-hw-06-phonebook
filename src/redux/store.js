import { createStore } from "redux";
import { combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const contactsInitialState = [
  { id: 1, name: "Amelia Sarnowska", phone: "652310257" },
  { id: 2, name: "Katarzyna Atemborska", phone: "632580125" },
  { id: 3, name: "Malgorzata Gwiazdon", phone: "500126987" },
  { id: 4, name: "Dorota Ruta", phone: "520147632" },
  { id: 5, name: "Ilona Cynk Kastelik", phone: "200126845" },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];
    case "contacts/deleteContact":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const initialFilter = "";

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case "filter/filteredContacts":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
