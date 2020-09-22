import { createSelector } from "reselect";

const usersSelector = (state) => state.tweets;

export const getTweetText = createSelector(
  [usersSelector],
  (state) => state.text
);
