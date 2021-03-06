import { useEffect } from 'react';
import Style from './ColorfulRain.module.scss';
const ColorfulRainComponent = () => {
  useEffect(() => {
    rain();
  }, []);
  return (
    <div className={Style.container}>
      <div id="main" className={Style.main}></div>
    </div>
  );
};
export default ColorfulRainComponent;

function rain() {
  let amount = 100;
  let body = document.querySelector('#main');
  let i = 0;
  while (i < amount) {
    let drop = document.createElement('i');

    let size = Math.random() * 5;

    let posX = Math.floor(Math.random() * window.innerWidth);

    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.width = 0.2 + size + 'px';
    drop.style.left = posX - 50 + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
    body.appendChild(drop);
    i++;
  }
}
