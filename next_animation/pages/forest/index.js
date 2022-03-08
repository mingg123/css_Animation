import Styled from './Forest.module.scss';
import { useEffect } from 'react';

const ForestComponent = () => {
  useEffect(() => {
    star();
  }, []);
  return (
    <div id="scene" className={Styled.scene}>
      <div className={Styled.moon}></div>
      <img src="/forest.png" className={Styled.forest}></img>
      <img src="/cloud1.png" className={Styled.cloud1}></img>
      <img src="/cloud2.png" className={Styled.cloud2}></img>
      <img src="/cloud3.png" className={Styled.cloud3}></img>
      <img src="/cloud1.png" className={Styled.cloud4}></img>
      <img src="/cloud2.png" className={Styled.cloud5}></img>
      <img src="/cloud3.png" className={Styled.cloud6}></img>
    </div>
  );
};

function star() {
  let count = 500;
  let scene = document.querySelector('#scene');
  let i = 0;
  while (i < count) {
    var star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = 1 + size + 'px';
    star.style.height = 1 + size + 'px';
    star.style.animationDuration = 5 + duration + 's';
    star.style.animationDelay = +duration + 's';
    scene.appendChild(star);
    i++;
  }
}
export default ForestComponent;
