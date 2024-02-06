import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{" "}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
