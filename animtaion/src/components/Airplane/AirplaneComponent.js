import airplane from "./Airplane.module.scss";
import airplaneImg from "../../image/airplane.png";
import cloudImg1 from "../../image/airplanecloud1.png";
import cloudImg2 from "../../image/airplanecloud2.png";
import cloudImg3 from "../../image/airplanecloud3.png";
const AirplaneComponen = () => {
  var cloud1Style = { "--i": 1 };
  var cloud2Style = { "--i": 2 };
  var cloud3Style = { "--i": 3 };
  return (
    <div className={airplane.main}>
      <div className={airplane.wrapper}>
        <div className={airplane.section}>
          <div className={airplane.description}>Click AirPlane!</div>
          <div className={airplane.clouds}>
            <img src={cloudImg1} className={cloud1Style} />
            <img src={cloudImg2} className={cloud2Style} />
            <img src={cloudImg3} className={cloud3Style} />

            <div className={` ${airplane.cloud2}`}>
              <img src={cloudImg1} className={cloud1Style} />
              <img src={cloudImg2} className={cloud2Style} />
              <img src={cloudImg3} className={cloud3Style} />
            </div>
          </div>
          <div className={airplane.runway}></div>
          <img src={airplaneImg} className={airplane.plane} />
        </div>
      </div>
    </div>
  );
};

export default AirplaneComponen;
