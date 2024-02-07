import { addContact, deleteContact, filteredContacts } from "./actions";

const contactsInitialState = [
  { id: 1, name: "Amelia Sarnowska", phone: "652310257" },
  { id: 2, name: "Katarzyna Atemborska", phone: "632580125" },
  { id: 3, name: "Malgorzata Gwiazdon", phone: "500126987" },
  { id: 4, name: "Dorota Ruta", phone: "520147632" },
  { id: 5, name: "Ilona Cynk Kastelik", phone: "200126845" },
];

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];
    case deleteContact.type:
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const initialFilter = "";

export const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case filteredContacts.type:
      return action.payload.query;
    default:
      return state;
  }
};
