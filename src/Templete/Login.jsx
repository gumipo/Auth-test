import React from "react";
import { PrimaryButton } from "../Component/UIkit";
import { useDispatch } from "react-redux";
import { twitterSignIn } from "../Component/Users/operations";
import styled from "styled-components";
import { fetchTextAction } from "../Component/Tweets/actions";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <StyledLogin>
      <PrimaryButton
        label="ツイッターでログイン"
        onClick={() => {
          fetchTextAction([]);
          dispatch(twitterSignIn());
        }}
      ></PrimaryButton>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.section`
  width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
`;
