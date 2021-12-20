import "./App.css";
import forestImg from "./image/forest.png";
import cloud1Img from "./image/cloud1.png";
import cloud2Img from "./image/cloud2.png";
import cloud3Img from "./image/cloud3.png";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    {
      star();
    }
  }, []);
  return (
    <div className="App">
      <div className="scene">
        <div className="moon"></div>
        <img src={forestImg} className="forest"></img>
        <img src={cloud1Img} className="cloud1"></img>
        <img src={cloud2Img} className="cloud2"></img>
        <img src={cloud3Img} className="cloud3"></img>
        <img src={cloud1Img} className="cloud4"></img>
        <img src={cloud2Img} className="cloud5"></img>
        <img src={cloud3Img} className="cloud6"></img>
      </div>
    </div>
  );
}

function star() {
  let count = 500;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    var star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";
    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = +duration + "s";
    scene.appendChild(star);
    i++;
  }
}
export default App;
