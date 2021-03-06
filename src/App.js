import "./styles.css";
import { Switch, Route, Link } from "react-router-dom";
import InProgress from "./comnponent/InProgress";
import Closed from "./comnponent/Closed";
import NotStarted from "./comnponent/NotStarted";
import { useState } from "react";
import { story } from "./mocky-data/stories";

export default function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [points, setPoints] = useState("");
  const addStrories = (e) => {
    e.preventDefault();
    story.push({
      name: name,
      description: desc,
      storyPoint: points,
      stage: "NotStarted",
      assignedTo: ""
    });
  };
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
          <label>
            Story Name
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description
            <input
              type="text"
              name="desc"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
          <br />
          <label>
            Stroy Points
            <input
              type="text"
              name="points"
              id="points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
