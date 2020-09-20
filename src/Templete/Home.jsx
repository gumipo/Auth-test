import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../Component/UIkit";
import { signOut } from "../Component/Users/operations";
import {
  getUserId,
  getUserImage,
  getUserName,
} from "../Component/Users/selector";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const userImage = getUserImage(selector);
  console.log(userImage);

  return (
    <>
      <h1>Home</h1>
      <p>{"id:" + uid}</p>
      <p>{username + "さんおかえりなさい"}</p>
      <img src={userImage[0]} alt="ユーザー画像" />

      <PrimaryButton label="ログアウト" onClick={() => dispatch(signOut())} />
    </>
  );
};
export default Home;
