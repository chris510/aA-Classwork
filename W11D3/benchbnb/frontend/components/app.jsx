import React from "react";
import { Route } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import BenchIndexContainer from "./bench/bench_index_container";
import SearchContainer from './bench/search_container';
import { AuthRoute } from "../util/route_util";


const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;