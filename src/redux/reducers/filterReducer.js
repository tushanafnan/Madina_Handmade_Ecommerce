import {
  APPLY_FILTER,
  CLEAR_RECENT_SEARCH,
  REMOVE_SELECTED_RECENT,
  RESET_FILTER,
  SET_BRAND_FILTER,
  SET_MAX_PRICE_FILTER,
  SET_MIN_PRICE_FILTER,
  SET_TEXT_FILTER,
} from "@/constants/constants";

const initialState = {
  recent: [],
  keyword: "",
  brand: "",
  minPrice: 0,
  maxPrice: 0,
  sortBy: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      const newKeyword = action.payload.toLowerCase();
      const isNewKeyword = state.recent.indexOf(newKeyword) === -1;
      const recentKeywords = isNewKeyword
        ? [newKeyword, ...state.recent]
        : state.recent;
      return {
        ...state,
        recent: recentKeywords,
        keyword: action.payload,
      };
    case SET_BRAND_FILTER:
      return {
        ...state,
        brand: action.payload,
      };
    case SET_MAX_PRICE_FILTER:
      return {
        ...state,
        maxPrice: action.payload,
      };
    case SET_MIN_PRICE_FILTER:
      return {
        ...state,
        minPrice: action.payload,
      };
    case RESET_FILTER:
      return initialState;
    case CLEAR_RECENT_SEARCH:
      return {
        ...state,
        recent: [],
      };
    case REMOVE_SELECTED_RECENT:
      return {
        ...state,
        recent: state.recent.filter((item) => item !== action.payload),
      };
    case APPLY_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
