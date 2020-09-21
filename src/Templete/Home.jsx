import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../Component/UIkit";
import { signOut } from "../Component/Users/operations";
import {
  getTwitterName,
  getUserImage,
  getUserName,
} from "../Component/Users/selector";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUserName(selector);
  const userImage = getUserImage(selector);
  const twitterName = getTwitterName(selector);
  console.log(userImage);

  return (
    <>
      <h1>Home</h1>
      <img src={userImage} alt="ユーザー画像" />
      <p>{"ツイッターアカウント名:" + twitterName}</p>
      <p>{username + "さんおかえりなさい"}</p>

      <PrimaryButton label="ログアウト" onClick={() => dispatch(signOut())} />
    </>
  );
};
export default Home;
