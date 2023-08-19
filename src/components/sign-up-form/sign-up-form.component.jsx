import { useState } from "react";
import {
  registerUserWithEmailAndPassword,
  createUserProfileDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
const defalutFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defalutFormFields);
  const { displayName, email, password, confirmpassword } = formFields;
  console.log(formFields);
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
    <>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>userName</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></input>
        <label>password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></input>
        <label>Confirm password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmpassword"
          value={confirmpassword}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
export default SignUpForm;
