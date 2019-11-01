import React from "react";
import { Route } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute } from "../util/route_util";


const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
    </header>
  </div>
);

export default App;