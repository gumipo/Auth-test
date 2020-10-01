import { createSelector } from "reselect";

const tweetsSelector = (state) => state.tweets;
const newTweetsSelector = (state) => state.newTweets;

export const getTweetText = createSelector(
  [tweetsSelector],
  (state) => state.list
);
