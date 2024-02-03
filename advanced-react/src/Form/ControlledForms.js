import { useState } from "react";
import { validateEmail } from "../Utilities/utils";
import ConditionalInput from "./ConditionalInput";
import OptionalInput from "./OptionalInput";
import "./ControlledForms.css";

function ControlledForms() {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [role, setRole] = useState("role");

  function handleRoleInputChanges(event) {
    event.preventDefault();
    setRole(event.target.value);
  }

  const isFormValid = () => {
    return (
      isFirstNameValid && isEmailValid && isPasswordValid && role !== "role"
    );
  };

  const clearForm = () => {
    setRole("role");
  };

  const handleSubmit = (event) => {
    console.log(event.target);
    event.preventDefault();
    alert("Account created successfully!");
    clearForm();
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign up</h2>
          <ConditionalInput
            labelText="First name"
            inputID="firstName"
            type="text"
            placeholder="First name"
            minLength={3}
            maxLength={50}
            errorMessage="First name should be at least 3 characters and less than 50 characters long."
            isValid={(firstName) => {
              setIsFirstNameValid(firstName.value.length >= 3);
            }}
            validate={(firstName) => {
              return firstName.isTouched && firstName.value.length < 3;
            }}
          />
          <OptionalInput
            labelText="Last name"
            inputID="lastName"
            type="text"
            placeholder="Last name"
            maxLength={50}
          />
          <ConditionalInput
            labelText="Email Address"
            inputID="email"
            type="email"
            placeholder="Email Address"
            minLength={null}
            maxLength={null}
            errorMessage="Please enter a valid email address."
            isValid={(email) => {
              setIsEmailValid(validateEmail(email.value));
            }}
            validate={(email) => {
              return email.isTouched && !validateEmail(email.value);
            }}
          />
          <ConditionalInput
            labelText="Password"
            inputID="password"
            type="password"
            placeholder="Password"
            minLength={8}
            maxLength={null}
            errorMessage="Password should have at least 8 characters."
            isValid={(password) => {
              setIsPasswordValid(password.value.length >= 8);
            }}
            validate={(password) => {
              return password.isTouched && password.value.length < 8;
            }}
          />
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select id="role" value={role} onChange={handleRoleInputChanges}>
              <option value="role">Select a Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!isFormValid()}>
            Create Account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlledForms;
