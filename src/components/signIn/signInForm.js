import React, { useState } from "react";
import signStyle from "../signIn/signIn.module.css";

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <div className={signStyle.logo}>

            <form onSubmit={submitHandler} className={signStyle.loginform}>
                <h2>Login</h2>

                {(error != "") ? (<div className="error">{error}</div>) : ""}

                {/* error */}

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>

                <div>
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <button type="submit" vlaue="login">Log In</button>

        
            </form>
        </div>
    )
}
export default LoginForm;