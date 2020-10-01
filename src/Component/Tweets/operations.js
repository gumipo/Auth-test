import { FirebaseTimestamp, db } from "../../Firebase";
import { fetchTextAction } from "./actions";

const tweetRef = db.collection("tweets");

export const fetchNewTweetText = (text) => {
  return async (dispatch) => {
    dispatch(fetchTextAction(text));
  };
};

//Textのdb登録
export const saveText = (text) => {
  return async (dispatch, getState) => {
    if (text.length === 0) {
      alert("なにも書いてないじゃん");
      return false;
    } else {
      const users = getState().users;
      const user = users.twitterName;
      const image = users.image;
      const uid = users.uid;

      const timestamp = FirebaseTimestamp.now();
      const data = {
        text: text,
        user: user,
        uid: uid,
        image: image,
        updated_at: timestamp,
      };
      tweetRef.doc().set(data);
    }
  };
};
