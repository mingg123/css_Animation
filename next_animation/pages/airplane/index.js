import airplane from './Airplane.module.scss';

const AirplaneComponen = () => {
  var cloud1Style = { '--i': 1 };
  var cloud2Style = { '--i': 2 };
  var cloud3Style = { '--i': 3 };
  return (
    <div className={airplane.main}>
      <div className={airplane.wrapper}>
        <div className={airplane.section}>
          <div className={airplane.description}>Click AirPlane!</div>
          <div className={airplane.clouds}>
            <img src="/airplanecloud1.png" className={cloud1Style} />
            <img src="/airplanecloud2.png" className={cloud2Style} />
            <img src="/airplanecloud3.png" className={cloud3Style} />

            <div className={` ${airplane.cloud2}`}>
              <img src="/airplanecloud1.png" className={cloud1Style} />
              <img src="/airplanecloud2.png" className={cloud2Style} />
              <img src="/airplanecloud3.png" className={cloud3Style} />
            </div>
          </div>
          <div className={airplane.runway}></div>
          <img src="/airplane.png" className={airplane.plane} />
        </div>
      </div>
    </div>
  );
};

export default AirplaneComponen;
