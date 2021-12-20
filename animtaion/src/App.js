import "./App.css";
import forestImg from "./image/forest.png";
import cloud1Img from "./image/cloud1.png";
import cloud2Img from "./image/cloud2.png";
import cloud3Img from "./image/cloud3.png";
import { useEffect } from "react";
import ForestComponent from "./components/ForestComponent";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        Example
        <li className="list">
          <Link to="/">Home </Link>
        </li>
        <li className="list">
          <Link to="/forest">Forest </Link>
        </li>
        <Switch>
          <Route path="/" component={ForestComponent} />
          <Route path="/forest" component={ForestComponent} />
          <Redirect to={ForestComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
