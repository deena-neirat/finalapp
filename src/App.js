import React from "react";
import Navgation from "../src/components/navbar/navbar.js";
import Home from "./components/home/home.js";
import SignIn from "../src/components/signIn/sigIn.js";
import SignUp from "../src/components/signUp/signUp.js";
import { Routes, Route } from 'react-router-dom';
import Dental from "./components/assestant/assestant.js";

function App() {
  return (
    <div>


      <Routes>
        <Route path='/' element={<Navgation />} >
          <Route index element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
        </Route>
      </Routes>
{/* <Dental/> */}
    </div>
  );
}

export default App;
