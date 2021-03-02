import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} from "../constants/actionsTypes";
import axios from "axios";

export const showSnack = (msg, status, delay = 3000) => async (dispatch) => {
  dispatch({
    type: "SHOW_SNACKBAR",
    payload: { msg, status },
  });

  setTimeout(() => dispatch({ type: "HIDE_SNACKBAR" }), delay);
};

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });

  try {
    const addResult = await axios.post("/user/register", newUser);
    // localStorage.setItem("token", addResult.data.token);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: addResult.data,
    });
  } catch (error) {
    // console.log(error.response);
    // Array.isArray(error.response.data.errors) &&
    //   error.response.data.errors.forEach((el) =>
    //     dispatch(showSnack(el.msg, "success", 5000))
    //   );
    dispatch({ type: REGISTER_FAIL, payload: error.response.data });
  }
};

export const login = (loginCredentiels) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });

  try {
    const loginRes = await axios.post("/user/login", loginCredentiels);
    console.log(loginRes);
    localStorage.setItem("token", loginRes.data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

export const getProfile = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  dispatch({ type: GET_PROFILE });

  try {
    const user = await axios.get("/user/current", config);
    console.log(user);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
  }
};
