import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  { id: 1, name: "Amelia Sarnowska", phone: "652310257" },
  { id: 2, name: "Katarzyna Atemborska", phone: "632580125" },
  { id: 3, name: "Malgorzata Gwiazdon", phone: "500126987" },
  { id: 4, name: "Dorota Ruta", phone: "520147632" },
  { id: 5, name: "Ilona Cynk Kastelik", phone: "200126845" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

// generatory akcji:
export const { addContact, deleteContact } = contactsSlice.actions;

// reducer slice'u
export const contactsReducer = contactsSlice.reducer;
