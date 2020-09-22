import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton, TextInput } from "../Component/UIkit";
import { signOut } from "../Component/Users/operations";
import { saveText } from "../Component/Tweets/operations";
import {
  getTwitterName,
  getUserImage,
  getUserName,
} from "../Component/Users/selector";
import { fetchText } from "../Component/Tweets/operations";
import { getTweetText } from "../Component/Tweets/selector";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userImage = getUserImage(selector);
  const twitterName = getTwitterName(selector);
  const tweetText = getTweetText(selector);

  const [text, setText] = useState("");

  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  useEffect(() => {
    dispatch(fetchText());
  }, [tweetText]);

  return (
    <>
      <h1>Home</h1>
      <img src={userImage} alt="ユーザー画像" />
      <p>{"ツイッターアカウント名:" + twitterName}</p>
      <p>{username + "さんおかえりなさい"}</p>
      <PrimaryButton label="ログアウト" onClick={() => dispatch(signOut())} />

      <TextInput
        fullWidth={true} //画面横幅  boorean
        label="tweet" //入力内容
        margin="dense"
        multiline={false} //複数行の入力するか  boorean
        required={true} // 必須入力項目か　boorean
        rows={1} //行数　multilineがtrueの時 number
        value={text} //受け取るusestate
        type="text" //入力タイプ "text   email   password number
        onChange={inputText} //関数　useCallback
      />
      <PrimaryButton
        label="tweet"
        onClick={() => {
          dispatch(saveText(text));
          setText("");
        }}
      />
      {tweetText.length > 0 && tweetText.map((tweet) => <p>{tweet.text}</p>)}
    </>
  );
};
export default Home;
