import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GreyButton, TextInput } from "../Component/UIkit";
import { signOut } from "../Component/Users/operations";
import { fetchNewTweetText, saveText } from "../Component/Tweets/operations";
import {
  getTwitterName,
  getUserImage,
  getUserName,
} from "../Component/Users/selector";

import { getTweetText } from "../Component/Tweets/selector";
import styled from "styled-components";
import TextIndicate from "../Component/TextIndicate";
import { db } from "../Firebase/index";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userImage = getUserImage(selector);
  const twitterName = getTwitterName(selector);

  //tweetSelector
  let tweetsList = getTweetText(selector);

  const [text, setText] = useState("");

  const inputText = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  useEffect(() => {
    const unsubscribe = db
      .collection("tweets")
      .orderBy("updated_at", "desc")
      .onSnapshot((snapshots) => {
        snapshots.docChanges().forEach((change) => {
          const tweet = change.doc.data();
          const changeType = change.type;
          switch (changeType) {
            case "added":
              tweetsList.splice(0, 0, tweet);
              break;
            default:
              break;
          }
        });
        dispatch(fetchNewTweetText(tweetsList));
      });
    return () => unsubscribe();
  }, []);

  return (
    <section>
      <TweetHeader>
        <UserIcon src={userImage} alt="ユーザー画像" />
        <UserName>{"TwtterName : " + twitterName}</UserName>
        <GreyButton label="ログアウト" onClick={() => dispatch(signOut())} />
      </TweetHeader>

      <NameBox>
        <p>{username + " 様ようこそ"}</p>
      </NameBox>

      <TweetTitle>なんでもかいてええで</TweetTitle>
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
        {tweetsList.length > 0 &&
          tweetsList.map((tweet, index) => (
            <TextIndicate
              key={index}
              text={tweet.text}
              twitterName={tweet.user}
              userImage={tweet.image}
              textUid={tweet.uid}
            />
          ))}
      </UsersTweet>
    </section>
  );
};
export default Home;

const TweetHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: teal;
  justify-content: center;
`;
const UserName = styled.p`
  margin-right: 100px;
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

const TweetTitle = styled.h2`
  width: 600px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
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
