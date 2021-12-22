import "./App.css";
import forestImg from "./image/forest.png";
import cloud1Img from "./image/cloud1.png";
import cloud2Img from "./image/cloud2.png";
import cloud3Img from "./image/cloud3.png";
import { useEffect } from "react";
import ForestComponent from "./components/ForestComponent";
import ColorfulRainComponent from "./components/ColorfulRainComponent";
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const animations = ["forest", "colorfulrain", "loading"];
  return (
    <BrowserRouter>
      <div className="App">
        Example
        <li className="list">
          <Link to="/">Home </Link>
        </li>
        {animations.map((elem, index) => {
          return (
            <li className="list">
              <Link to={"/" + elem}> {elem}</Link>
            </li>
          );
        })}
        {/* <li className="list">
          <Link to="/forest">Forest </Link>
        </li>
        <li className="list">
          <Link to="/colorfulrain">ColorFul Rain </Link>
        </li>
        <li className="list">
          <Link to="/loading">loading</Link>
        </li> */}
        <Switch>
          <Route exact path="/" component={ForestComponent} />
          <Route path="/forest" component={ForestComponent} />
          <Route path="/colorfulrain" component={ColorfulRainComponent} />
          <Route path="/loading" component={LoadingComponent} />
          <Redirect to={ColorfulRainComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
