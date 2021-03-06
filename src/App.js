import "./styles.css";
import { Switch, Route, Link } from "react-router-dom";
import InProgress from "./comnponent/InProgress";
import Closed from "./comnponent/Closed";
import NotStarted from "./comnponent/NotStarted";

export default function App() {
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
        <form>
          <lable for="name">Story Name</lable>
          <input type="text" name="name" id="name" />
          <br />
          <lable for="desc">Description</lable>
          <input type="text" name="desc" id="desc" />
          <br />
          <lable for="points">Stroy Points</lable>
          <input type="text" name="points" id="points" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
