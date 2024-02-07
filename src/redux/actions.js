import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/addContact", (name, phone) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      phone,
    },
  };
});

export const deleteContact = createAction("contacts/deleteContact");
export const filteredContacts = createAction("filter/filteredContacts");
