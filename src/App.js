import React from "react";
import Navgation from "../src/components/navbar/navbar.js";
import Home from "./components/home/home.js";
import SignIn from "../src/components/signIn/sigIn.js";
import SignUp from "../src/components/signUp/signUp.js";
import { Routes, Route } from "react-router-dom";
import Assistent from "./components/assistent/assistent.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navgation />}>
          <Route index element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/assistent" element={<Assistent />} />
          <Route path="/admin" element={<Assistent />} />
          <Route path="/student" element={<Assistent />} />
          <Route path="/doctor" element={<Assistent />} />
          <Route path="/secretary" element={<Assistent />} />
          <Route path="/radiographer" element={<Assistent />} />
          <Route path="/patiant" element={<Assistent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
