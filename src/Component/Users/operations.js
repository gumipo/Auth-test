import { signInAction, signOutAction } from "./actions";
import { push } from "connected-react-router";
//import firebase
import { auth, db, FirebaseTimestamp } from "../../Firebase/index";
import firebase from "firebase";

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                uid: uid,
                twitterName: data.twitterName,
                username: data.username,
                image: data.image,
              })
            );
          });
      } else {
        dispatch(push("/login"));
      }
    });
  };
};

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
        const user = result.user;

        const twitterName = result.additionalUserInfo.username;
        console.log(result.additionalUserInfo.username);
        const twitterId = result.user.providerData[0].uid;
        const username = result.user.providerData[0].displayName;
        const photoUrl = result.user.providerData[0].photoURL;

        const timestamp = FirebaseTimestamp.now();
        const uid = user.uid;

        const userData = {
          createed_at: timestamp,
          updated_at: timestamp,
          role: "customer",
          twitterId: twitterId,
          uid: uid,
          twitterName: twitterName,
          username: username,
          image: photoUrl,
        };

        //firebaseに登録
        db.collection("users")
          .doc(uid)
          .set(userData)
          .then(() => {
            dispatch(push("/"));
          });
      });
  };
};

//サインアウト
export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/login"));
    });
  };
};
