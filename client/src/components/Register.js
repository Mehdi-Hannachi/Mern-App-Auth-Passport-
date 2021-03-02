import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../JS/actions";
import { useHistory } from "react-router-dom";
import "./signup.css";

const Register = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const errors = useSelector((state) => state.userReducer.errors);

  console.log(errors);

  const dispatch = useDispatch();

  const history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const addUser = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, phoneNumber }));

    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");

    history.push("/login");
  };

  return (
    <div>
      <div className="page-content">
        <div className="form-v4-content">
          <div className="form-left">
            <h2>INFOMATION</h2>
            <p className="text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p className="text-2">
              <span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc
              vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p>
            <div className="form-left-last">
              <input
                name="account"
                className="account"
                value="Have An Account"
                onClick={() => history.push("/login")}
              />
            </div>
          </div>
          <form className="form-detail">
            <h2>REGISTER FORM</h2>

            <div className="form-row">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                id="your_name"
                value={name}
                className="input-text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Your Email</label>
              <input
                type="text"
                name="email"
                id="your_email"
                value={email}
                className="input-text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Phone Number</label>
              <input
                type="number"
                name="phoneNumber"
                id="your_phoneNumber"
                value={phoneNumber}
                className="input-text"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                className="input-text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-checkbox">
              <label className="container">
                <p>
                  I agree to the{" "}
                  <span className="text">Terms and Conditions</span>
                </p>
                <input type="checkbox" name="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="form-row-last">
              <input
                name="register"
                className="register"
                value="Register"
                onClick={addUser}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
