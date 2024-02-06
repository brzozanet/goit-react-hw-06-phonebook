import { nanoid } from "nanoid";

export const addContact = (name, phone) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: name,
      phone: phone,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: "contacts/deleteContact",
    payload: {
      id: id,
    },
  };
};
