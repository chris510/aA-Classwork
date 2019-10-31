import React from 'react';


const mapStateToProps = (state) => ({
  id: state.session.id,
  users: state.entities.users
});

const mapDispatchToProps = (dipatch) => ({
  currentUser: () => dispatch(currentUser())
});