import "./styles.css";
import { Switch, Route, Link } from "react-router-dom";
import InProgress from "./comnponent/InProgress";
import Closed from "./comnponent/Closed";
import NotStarted from "./comnponent/NotStarted";

export default function App() {
  const addStrories = () => {};
  return (
    <div className="App">
      <div>
        <Link to="/">Not Started Story </Link>
        <Link to="/progress">In Progress </Link>
        <Link to="/closed">Closed </Link>
      </div>
      <Switch>
        <Route path="/" component={NotStarted} exact />
        <Route path="/progress" component={InProgress} />
        <Route path="/closed" component={Closed} />
      </Switch>
      <hr />
      <div>
        <form onSubmit={addStrories}>
          <label for="name">
            Story Name
            <input type="text" name="name" id="name" />
          </label>
          <br />
          <label for="desc">
            Description
            <input type="text" name="desc" id="desc" />
          </label>
          <br />
          <label for="points">
            Stroy Points
            <input type="text" name="points" id="points" />
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
