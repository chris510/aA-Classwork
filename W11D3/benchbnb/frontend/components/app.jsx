import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    </header>
  </div>
);

export default App;