import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  //Ustawia filtr do wyszukiwania kontaktów
  const handleFilter = (event) => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <>
      <div>
        Find contacts by name:
        <br />
        <input
          type="text"
          onChange={handleFilter}
          placeholder="Search name"
        ></input>
      </div>
    </>
  );
};
