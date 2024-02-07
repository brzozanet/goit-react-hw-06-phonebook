import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contacstSlice";
import { filterReducer } from "../redux/filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
