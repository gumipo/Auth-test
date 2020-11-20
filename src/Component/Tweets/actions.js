export const FETCH_TEXT = "FETCH_TEXT";
export const fetchTextAction = (tweets) => {
  return {
    type: "FETCH_TEXT",
    payload: tweets,
  };
};
