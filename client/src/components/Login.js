import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../JS/actions";

const Login = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const loading = useSelector((state) => state.userReducer.loading);
  const history = useHistory();
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
    history.push("/profile");
  };

  return token ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <h1>Please wait</h1>
  ) : (
    <div className="container">
      <div className="col-md-8 offset-md-2">
        <div className="row">
          <h1>Login</h1>
        </div>

        <div className="row">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="row">
          <button type="submit" className="btn btn-primary" onClick={loginUser}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
