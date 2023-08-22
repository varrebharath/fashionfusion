import { useState } from "react";
import {
  registerUserWithEmailAndPassword,
  createUserProfileDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";
const defalutFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defalutFormFields);
  const { displayName, email, password, confirmpassword } = formFields;
  // console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defalutFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert("paswswords do not match");
      return;
    }
    try {
      const { user } = await registerUserWithEmailAndPassword(email, password);

      await createUserProfileDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      }
      console.log("user creation encountered an error", error);
    }
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
          label="UserName"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>
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
        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmpassword"
          value={confirmpassword}
        ></FormInput>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}
export default SignUpForm;
