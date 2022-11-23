import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import LoginForm from "./signInForm.js";
import { isUserExist } from "./../../utilities/signInUtility";

function SignIn() {
  const [user, setUser] = useState({ name: "", email: "", userType: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Login = (details) => {
    console.log(details);
    if (details.userName && details.password && isUserExist(details)) {
      const userType = isUserExist(details);
      setUser({
        name: details.name,
        email: details.email,
        userType: userType,
      });
      navigate(`/${userType}`);
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div id="signIn">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            welcome, <span>{user.userType}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

      <Outlet />
    </div>
  );
}

export default SignIn;
