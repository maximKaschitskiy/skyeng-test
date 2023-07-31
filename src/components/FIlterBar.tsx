import { useSelector, useDispatch } from "react-redux";
import type { OptionType, ChangeOptionType, QueryType } from "../types";
import { changeQuery, firstPage } from "../redux/slice/querySlice";
import { loadCards } from "../redux/slice/cardsSlice";
import { changeLoad, errShow } from "../redux/slice/uiSlice";
import { searchUsers } from "../api/api";
import type { RootState } from "../redux/store/store";
import FilterBarWrapper from "../styles/Blocks/FilterBarWrapper";
import ResultsCount from "../styles/Blocks/ResultsCount";
import Select from "../styles/Blocks/Select";
import SortCaption from "../styles/Blocks/SortCaption";

export const FilterBar = () => {

  const dispatch = useDispatch();

  const query = useSelector((state: RootState) => state.query);
  const cards = useSelector((state: RootState) => state.cards);
  const ui = useSelector((state: RootState) => state.ui);

  const orderOptions: OptionType[] = [
    { value: "desc", label: "Low to hight" },
    { value: "asc", label: "Hight to low" },
  ];

  const sortOptions: OptionType[] = [
    { value: "followers", label: "Followers" },
    { value: "repositories", label: "Repositories" },
    { value: "joined", label: "Joined" },
  ];

  const handleChage: ChangeOptionType = (item, param) => {
    if (query[param] !== item.value) {
      dispatch(changeLoad(true));
      dispatch(changeQuery({ [param]: item.value }));
      // place for change option in UI
      if (cards.items.length > 0) {
        dispatch(firstPage());
        searchUsers({ ...query, page: 1, [param]: item.value })
          .then((res) => {
            if (res.status === 200) {
              dispatch(loadCards(res.data));
            }
          })
          .catch((err) => {
            dispatch(
              errShow({...ui ,errMessage: err.message, errCode: err.response.status })
            );
          })
          .finally(() => dispatch(changeLoad(false)));
      }
    }
  };

  return (
    <FilterBarWrapper>
      <ResultsCount>
        {cards.items.length} from {cards.total_count} matching results
      </ResultsCount>
      <SortCaption>sort by:</SortCaption>
      <Select
        options={sortOptions}
        classNamePrefix="Select"
        defaultValue={sortOptions.filter((item) => item.value === query.sort)}
        onChange={(value, _action, param: keyof QueryType  = 'sort') => handleChage(value, param)}
      />
      <Select
        options={orderOptions}
        classNamePrefix="Select"
        defaultValue={orderOptions.filter((item) => item.value === query.order)}
        onChange={(value, _action, param: keyof QueryType = 'order') => handleChage(value, param)}
      />
    </FilterBarWrapper>
  );
};
