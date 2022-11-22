import React, { useEffect, useState } from 'react';
import LoginForm from './signInForm.js';
import { Outlet } from 'react-router-dom';
import Assetant from '../assestant/assestant.js';

function SignIn() {

  const adminUser ={
    email: "deena.nairat@gmail.com",
    password:"deena123"
  }


  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Loggid in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }


  const Logout = () => {
    setUser({ name: "", email: "" });
  }
  return (

    <div id='signIn'>

      {(user.email != "") ? (
        <div className='welcome'>
          <h2>welcome, <span>{user.name}</span></h2>
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


