import React from "react";
import { PrimaryButton } from "../Component/UIkit";
import { useDispatch } from "react-redux";

import { twitterSignIn } from "../Component/Users/operations";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <PrimaryButton
        label="ツイッターでログイン"
        onClick={() => dispatch(twitterSignIn())}
      ></PrimaryButton>
    </section>
  );
};

export default Login;
