import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../../redux/actions";
import PropTypes from "prop-types";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  console.log(typeof contacts, contacts);

  const handleDeleteContact = () => dispatch(deleteContact(contacts.id));

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}{" "}
            <button onClick={handleDeleteContact}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired, //NOTE: why undefined? see L7
};
