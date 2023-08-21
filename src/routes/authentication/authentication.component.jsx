import { useEffect } from "react";
import {
  // auth,
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGooglrRedirect,
} from "../../utils/firebase/firebase.util";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  // useEffect(() => {
  //   const fetchRedirectResult = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserProfileDocumentFromAuth(
  //           response.user
  //         );
  //       }
  //     } catch (error) {
  //       console.log("error message is".error);
  //     }
  //   };
  //   fetchRedirectResult();
  // }, []);
  return (
    <div>
      <h1>Sign In Page</h1>
      {/* <button onClick={logGoogleUser}> Sign in with google</button> */}
      {/* <button onClick={signInWithGooglrRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
}
export default Authentication;
