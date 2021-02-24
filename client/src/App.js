import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={(props) => <Register {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/profile"
          render={(props) => <Profile {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
