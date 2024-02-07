import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacstSlice";

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);
  const filterValue = useSelector((state) => state.filter);

  //Usuwa kontakt z bazy danych na podstawie id
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  // Filtruje kontakty na podstawie przekazanej tablicy (contacts) i stringa (filter)
  const filteredArray = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <ul>
        {filteredArray.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{" "}
            <button type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
