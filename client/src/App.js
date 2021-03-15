import "./App.css";
import { useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./JS/actions";

import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
// import SnackBar from "./components/SnackBar";
const App = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  console.log(isAuth, "APP COMPONENT");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Register {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />

        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
<<<<<<< HEAD

      <Errors />
=======
      {/* <SnackBar /> */}
>>>>>>> 4f455bc2e14d09eef749b0d6c598f9985f15ac16
    </div>
  );
};

export default App;
