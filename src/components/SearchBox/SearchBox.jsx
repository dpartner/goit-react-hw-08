import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchStr = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchWrap}>
      <input
        className={s.input}
        type="text"
        value={searchStr}
        onChange={handleSearch}
      />
      <p className={s.inputName}>Search contact:</p>
    </div>
  );
};

export default SearchBox;
