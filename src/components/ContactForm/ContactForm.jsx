import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacstSlice";
import { nanoid } from "nanoid";

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts);

  // Tworzy kontakt i modyfikuje state dodajac do niego nowy kontakt
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Tworzy nowy obiekt - kontakt na podstawie danych z inputów
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    // Walidacja - sprawdza czy kontakt jest już dodany
    if (
      contacts.some(
        (person) => person.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} already in contacts`);
    }

    dispatch(addContact(contact));
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Name:
            <br />
            <input
              type="text"
              name="name"
              id=""
              placeholder="Contact name"
              pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            Number:
            <br />
            <input
              type="tel"
              name="number"
              placeholder="Contact number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
