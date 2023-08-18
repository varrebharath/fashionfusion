import {
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.util";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>welcome to SignIn</h1>;
      <button onClick={logGoogleUser}> Sign in with google</button>
    </div>
  );
}
export default SignIn;
