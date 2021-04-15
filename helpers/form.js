import React, { useState } from "react";
import { Validation } from "../helpers/validation";

const Form = () => {
  const [state, setState] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();
    setShowErrors(true);
    const { email, password } = state;
    if (!Validation.email(email) || !Validation.password(password)){
      return;
    }
    setShowErrors(false);
    alert("form submitted successfully !!");
  };

  return (
    <div className="form">
      <h2>FORM VALIDATION</h2>
      <form onSubmit={handleSubmit}>
        <label
          className={
            showErrors && !Validation.email(state.email) ? "danger" : ""
          }
        >
          Enter Email
        </label>
        <br />
        <input
          className={
            showErrors && !Validation.email(state.email) ? "danger-border" : ""
          }
          placeholder="email"
          type="text"
          name="email"
          value={state.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <br />
        {showErrors && !Validation.email(state.email) && (
          <span className={"danger"}>
            <small>Enter a valid Email</small>
          </span>
        )}
        <br />
        <br />

        <label
          className={
            showErrors && !Validation.password(state.password) ? "danger" : ""
          }
        >
          Enter Password
        </label>
        <br />
        <input
          className={
            showErrors && !Validation.password(state.password)
              ? "danger-border"
              : ""
          }
          placeholder="password"
          type="password"
          name="password"
          value={state.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <br />
        {showErrors && !Validation.password(state.password) && (
          <span className={"danger"}>
            <small>Password must contain atleast 4 characters</small>
          </span>
        )}
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
