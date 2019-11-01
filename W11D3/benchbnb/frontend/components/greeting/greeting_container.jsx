import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout } from '../../actions/session_actions'


const mapStateToProps = (state) => ({
  // id: state.session.id,
  // users: state.entities.users
  currentUser: state.entities.users[state.session.id] //user functionality
});

const mapDispatchToProps = (dispatch) => ({
  // currentUser: () => dispatch(currentUser()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);