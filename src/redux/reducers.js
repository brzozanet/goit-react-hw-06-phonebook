import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filteredContacts } from "./actions";

const contactsInitialState = [
  { id: 1, name: "Amelia Sarnowska", phone: "652310257" },
  { id: 2, name: "Katarzyna Atemborska", phone: "632580125" },
  { id: 3, name: "Malgorzata Gwiazdon", phone: "500126987" },
  { id: 4, name: "Dorota Ruta", phone: "520147632" },
  { id: 5, name: "Ilona Cynk Kastelik", phone: "200126845" },
];

export const contactsReducer = createReducer(
  contactsInitialState,
  (builder) => {
    builder
      .addCase(addContact, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        return state.filter((contact) => contact.id !== action.payload.id);
      });
  }
);

const filterInitialState = "";

export const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(filteredContacts, (state, action) => {
    return action.payload.query;
  });
});
