import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  console.log(isAuth, "PRIVATECOMPONENT");
  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
