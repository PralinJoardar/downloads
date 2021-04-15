import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isPaymentDone, ...rest }) => {
  return (
    isPaymentDone ? 
    <Route {...rest} component={Component} />
    :
    <Redirect to="/payments" />
  );
};

const mapStateToProps = (state) => {
  return ({
    isPaymentDone: state.auth.isPaymentDone
  })
}

export default connect(mapStateToProps)(ProtectedRoute);
