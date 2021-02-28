import React, { Component, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
// import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  //   const isAuth = useSelector((state) => state.userReducer.isAuth);
  //   console.log(isAuth);

  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
}
