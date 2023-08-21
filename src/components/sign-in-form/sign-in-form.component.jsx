import { useState } from "react";
import {
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
const defalutFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defalutFormFields);
  const { email, password } = formFields;
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defalutFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const res = await createUserProfileDocumentFromAuth(user);
    console.log(res);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2> Dont have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <Button type="submit">Sign In</Button>
      </form>
      <Button
        onSubmit={handleSubmit}
        buttonType="google"
        onChange={signInWithGoogle}
      >
        Google Sign In
      </Button>
    </div>
  );
}
export default SignInForm;
