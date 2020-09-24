import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GreyButton, TextInput } from "../Component/UIkit";
import { signOut } from "../Component/Users/operations";
import { saveText } from "../Component/Tweets/operations";
import {
  getTwitterName,
  getUserImage,
  getUserName,
} from "../Component/Users/selector";
import { fetchText } from "../Component/Tweets/operations";
import { getTweetText } from "../Component/Tweets/selector";
import styled from "styled-components";
import TextIndicate from "../Component/TextIndicate";

// const datetimeToString = (date) => {
//   return (
//     date.getFullYear() +
//     "-" +
//     ("00" + (date.getMonth() + 1)).slice(-2) +
//     "-" +
//     ("00" + date.getDate()).slice(-2) +
//     " " +
//     ("00" + date.getHours()).slice(-2) +
//     ":" +
//     ("00" + date.getMinutes()).slice(-2) +
//     ":" +
//     ("00" + date.getSeconds()).slice(-2)
//   );
// };

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userImage = getUserImage(selector);
  const twitterName = getTwitterName(selector);
  const tweets = getTweetText(selector);
  console.log(tweets);

  // const tweetDateTime = datetimeToString(tweets.updated_at);

  const [text, setText] = useState("");

  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  useEffect(() => {
    dispatch(fetchText());
  }, [tweets.length]);

  return (
    <section>
      <TweetHeader>
        <UserIcon src={userImage} alt="ユーザー画像" />
        <UserName>{"TwtterName : " + twitterName}</UserName>
      </TweetHeader>

      <NameBox>
        <TweetTitle>{username + " 様ようこそ"}</TweetTitle>
        <GreyButton label="ログアウト" onClick={() => dispatch(signOut())} />
      </NameBox>

      <TweetTitle>だれでもかきこめるチャット</TweetTitle>
      <TweetItem>
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
        <GreyButton
          label="tweet"
          onClick={() => {
            dispatch(saveText(text));
            setText("");
          }}
        />
      </TweetItem>
      <UsersTweet>
        {tweets.length > 0 &&
          tweets.map((tweet) => (
            <TextIndicate
              key={tweet.text}
              text={tweet.text}
              twitterName={twitterName}
              userImage={userImage}
            />
          ))}
      </UsersTweet>
    </section>
  );
};
export default Home;

const TweetHeader = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: teal;
  justify-content: flex-start;
`;
const UserName = styled.p`
  color: white;
`;

const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
  margin-left: 10px;
`;

const NameBox = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
`;

const TweetTitle = styled.h1`
  width: 600px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
`;

const TweetItem = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const UsersTweet = styled.div`
  width: 600px;
  margin: 0 auto;
`;
