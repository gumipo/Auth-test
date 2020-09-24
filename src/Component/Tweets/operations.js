import { FirebaseTimestamp, db } from "../../Firebase";
import { fetchTextAction } from "./actions";

const tweetRef = db.collection("tweets");

export const fetchText = () => {
  return async (dispatch) => {
    tweetRef
      .orderBy("updated_at", "desc")
      .get()
      .then((snapshots) => {
        const tweetList = [];
        snapshots.forEach((snapshot) => {
          const text = snapshot.data();
          tweetList.push(text);
          console.log(tweetList);
        });
        dispatch(fetchTextAction(tweetList));
      });
  };
};

export const saveText = (text) => {
  return async () => {
    if (text.length === 0) {
      alert("なにも書いてないじゃん");
      return false;
    } else {
      const timestamp = FirebaseTimestamp.now();
      const data = {
        text: text,
        updated_at: timestamp,
      };
      return tweetRef.doc().set(data);
    }
  };
};
