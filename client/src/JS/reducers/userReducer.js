import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE,
} from "../constants/actionsTypes";

const initialState = {
  loading: false,
  user: null,
  errors: null,
  isAuth: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        token: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        loading: false,
        errors: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
