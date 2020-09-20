import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
//import firebase
import { auth } from "../../Firebase/index";
import firebase from "firebase";

//twitterでログイン
export const twitterSignIn = () => {
  return async (dispatch) => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().languageCode = "pt";
    provider.setCustomParameters({
      lang: "es",
    });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const uid = result.user.providerData[0].uid;
        const username = result.user.providerData[0].displayName;
        const photoUrl = result.user.providerData[0].photoURL;

        //storeに保存
        dispatch(
          signInAction({
            isSignedIn: true,
            uid: uid,
            username: username,
            image: photoUrl,
          })
        );
        dispatch(push("/"));
      });
  };
};

//next step　fireStoreに保存

//サインアウト
export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/login"));
    });
  };
};
