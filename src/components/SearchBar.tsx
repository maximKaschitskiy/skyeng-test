import { useSelector, useDispatch } from "react-redux";
import { searchUsers } from "../api/api";
import { popupShow } from "../redux/slice/uiSlice";
import { loadCards } from "../redux/slice/cardsSlice";
import { changeQuery, firstPage } from "../redux/slice/querySlice";
import { changeSearch } from "../redux/slice/uiSlice";
import { changeLoad } from "../redux/slice/uiSlice";
import type { RootState } from "../redux/store/store";
import SearchBarWrapper from "../styles/Blocks/SearchBarWrapper";
import SearchIcon from "../styles/Blocks/SearchIcon";
import SearchInput from "../styles/Blocks/SearchInput";
import SearchButton from "../styles/Blocks/SearchButton";
import SearchImage from "../assets/search.svg";

export const SearchBar = () => {

  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.query);
  const ui = useSelector((state: RootState) => state.ui);

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearch(event.target.value));
  };

  const handleClick = () => {
    dispatch(changeLoad(true));
    dispatch(changeQuery({ q: ui.query }));
    dispatch(firstPage());
    searchUsers({ ...query, q: ui.query, page: 1 })
      .then(res => {
        if (res.status === 200) {
          dispatch(loadCards(res.data));
        }
      })
      .catch((err) => {
        dispatch(popupShow({ ...ui, popupSubtitle: err.message, popupTitle: err.response.status }));
      })
      .finally(() => dispatch(changeLoad(false)))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && ui.query !== '') {
      handleClick();
    }
  };

  return (
    <SearchBarWrapper>
      <SearchIcon src={SearchImage} />
      <SearchInput value={ui.query} placeholder="Search user" onChange={handleChage} onKeyDown={handleKeyDown} />
      <SearchButton disabled={ui.query === ''} onClick={handleClick}>Search</SearchButton>
    </SearchBarWrapper>
  );
};
