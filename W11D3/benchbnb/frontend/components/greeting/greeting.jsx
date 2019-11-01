import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  // debugger
  if (props.currentUser) {
    return (
      <div>
        <div>Welcome {props.currentUser.username}</div>
        <button onClick={props.logout}>Log Out</button>
      </div>
    )
  } 
  else {
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Log In</Link>
      </div>
    )
  }
}

export default Greeting;