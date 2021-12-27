// import "./App.css";
import forestImg from "./image/forest.png";
import cloud1Img from "./image/cloud1.png";
import cloud2Img from "./image/cloud2.png";
import cloud3Img from "./image/cloud3.png";
import { useEffect } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingComponent from "./components/Loading/LoadingComponent";
import { KeyboardComponent } from "./components/keyboard/KeyboardComponent";
import ForestComponent from "./components/Forest/ForestComponent";
import ColorfulRainComponent from "./components/ColorfulRain/ColorfulRainComponent";
import CigaretteComponent from "./components/Cigaratte/CigaretteComponent";
import PlanetComponent from "./components/Planet/PlanetComponent";
import styled from "./App.module.scss";
function App() {
  const animations = [
    "forest",
    "colorfulrain",
    "loading",
    "keyboard",
    "cigarette",
    "planet",
  ];
  return (
    <BrowserRouter>
      <div className={styled.App}>
        <li className={styled.list}>
          <Link to="/">Home </Link>
        </li>
        {animations.map((elem, index) => {
          return (
            <button className={styled.btn}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={"/" + elem}
              >
                {elem}
              </Link>
            </button>
          );
        })}
        <Switch>
          <Route exact path="/" component={ForestComponent} />
          <Route path="/forest" component={ForestComponent} />
          <Route path="/colorfulrain" component={ColorfulRainComponent} />
          <Route path="/loading" component={LoadingComponent} />
          <Route path="/keyboard" component={KeyboardComponent} />
          <Route path="/cigarette" component={CigaretteComponent} />
          <Route path="/planet" component={PlanetComponent} />

          <Redirect to={ColorfulRainComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
