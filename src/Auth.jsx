import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsSignedIn } from "./Component/Users/selector";
import { listenAuthState } from "./Component/Users/operations";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);

  if (!isSignedIn) {
    return <></>;
  } else {
    return children;
  }
};
export default Auth;
