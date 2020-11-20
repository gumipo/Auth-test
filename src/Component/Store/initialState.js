const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    username: "",
    image: "",
    twitterName: "",
  },
  tweets: {
    list: [],
  },
  newTweets:  {
    list: [],
  },
};
export default initialState;
