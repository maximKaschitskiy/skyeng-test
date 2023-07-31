import { useSelector, useDispatch } from "react-redux";
import { searchUsers } from "../api/api";
import { popupShow } from "../redux/slice/uiSlice";
import { nextPage } from "../redux/slice/querySlice";
import { changeLoad } from "../redux/slice/uiSlice";
import { loadMore } from "../redux/slice/cardsSlice";
import type { RootState } from "../redux/store/store";
import SearchBarWrapper from "../styles/Blocks/SearchBarWrapper";
import SearchButton from "../styles/Blocks/SearchButton";

export const LoadMore = () => {

  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.query);
  const ui = useSelector((state: RootState) => state.ui);
  const cards = useSelector((state: RootState) => state.cards);

  const handleClick = () => {
    dispatch(changeLoad(true));
    dispatch(nextPage());
    searchUsers({ ...query, page: query.page + 1 })
      .then((res) => {
        if (res.status === 200) {
          dispatch(loadMore(res.data));
        }
      })
      .catch((err) => {
        dispatch(
          popupShow({...ui, popupSubtitle: err.message, popupTitle: err.response.status })
        );
      })
      .finally(() => dispatch(changeLoad(false)));
  };

  return (
    <SearchBarWrapper>
      {cards.items.length !== 0 ? (
        <SearchButton
          disabled={cards.items.length >= cards.total_count}
          onClick={handleClick}
        >
          Load More
        </SearchButton>
      ) : null}
    </SearchBarWrapper>
  );
};
