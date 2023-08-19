import { useEffect } from "react";
import {
  // auth,
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGooglrRedirect,
} from "../../utils/firebase/firebase.util";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function SignIn() {
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
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>welcome to SignIn</h1>;
      <button onClick={logGoogleUser}> Sign in with google</button>
      {/* <button onClick={signInWithGooglrRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignUpForm></SignUpForm>
    </div>
  );
}
export default SignIn;
