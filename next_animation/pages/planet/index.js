import planet from "./Planet.module.scss";
const PlanetComponent = () => {
  return (
    <div className={planet.main}>
      <div className={planet.wrapper}>
        <div className={planet.planet}>
          <div className={planet.planetEarth}>
            <h2 className={planet.h2}>Earth</h2>
            <div className={planet.container}>
              <div className={planet.loader}>
                <span className={planet.loaderspan}></span>
              </div>
              <div className={planet.earth}></div>
            </div>
          </div>
        </div>
        <div className={planet.planet}>
          <div className={planet.planetMars}>
            <h2 className={planet.h2}>Mars</h2>
            <div className={planet.container}>
              <div className={planet.loader}>
                <span
                  className={planet.loaderspan}
                  style={{ background: "#190703" }}
                ></span>
              </div>
              <div className={planet.mars}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetComponent;
