import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../JS/actions";

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const loading = useSelector((state) => state.userReducer.loading);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    // history.push("/profile");
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return loading ? (
    <h1 className="text-dark">Please wait.....</h1>
  ) : (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={loginUser}>
          <h3>Login</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <label className="form-group">
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Your Mail</span>
            <span className="border"></span>
          </label>

          <label className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Your Password</span>
            <span className="border"></span>
          </label>

          <button>
            Submit
            <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
