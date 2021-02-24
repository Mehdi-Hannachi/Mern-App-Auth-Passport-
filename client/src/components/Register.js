import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../JS/actions";
import { Redirect, useHistory } from "react-router-dom";

const Register = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  //   const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, phoneNumber }));
    // history.push("/profile");
  };

  //   token ? (
  //     <Redirect to="/profile" />
  //   ) :

  return (
    <div className="container">
      {loading ? (
        <h1>Please wait !!</h1>
      ) : user ? (
        <Redirect to="/login" />
      ) : (
        <div className="col-md-8 offset-md-4">
          <div className="row">
            <h1>Register</h1>

            <div className="row mt-3">
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                className="form-control"
              />
            </div>
            <div className="row mt-3">
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="row mt-3">
              <input
                type="text"
                name="PhoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="form-control"
              />
            </div>
            <div className="row mt-3">
              <input
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="row mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addUser}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
