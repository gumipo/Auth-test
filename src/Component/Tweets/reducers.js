import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const tweetsReducer = (state = initialState.tweets, action) => {
  switch (action.type) {
    case Actions.FETCH_TEXT:
      return {
        ...state,
        text: [...action.payload],
      };
    default:
      return state;
  }
};
