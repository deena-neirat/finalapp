import React, { useState } from "react";
import signStyle from "../signIn/signIn.module.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ userName: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className={signStyle.logo}>
      <form onSubmit={submitHandler} className={signStyle.loginform}>
        <h2>Login</h2>

        {error !== "" ? <div className="error">{error}</div> : ""}

        {/* error */}
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="userName"
            name="userName"
            id="userName"
            onChange={(e) =>
              setDetails({ ...details, userName: e.target.value })
            }
            value={details.email}
          />
        </div>

        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <button type="submit" vlaue="login">
          Log In
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
