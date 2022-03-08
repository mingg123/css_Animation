import ciga from "./Cigarette.module.scss";
import { useEffect } from "react";

const CigaretteComponent = () => {
  return (
    <div className={ciga.main}>
      <div className={ciga.wrapper}>
        <div className={ciga.container}>
          <CigaRotationX />
          <CigaRotationY />
        </div>
      </div>
    </div>
  );
};

const CigaRotationY = () => {
  var style1 = { "--i": 1 };
  var style2 = { "--i": 2 };
  var style3 = { "--i": 3 };
  var style4 = { "--i": 4 };
  var style5 = { "--i": 5 };
  var style6 = { "--i": 6 };
  var style7 = { "--i": 7 };
  var style8 = { "--i": 8 };
  var style9 = { "--i": 9 };
  var style10 = { "--i": 10 };
  return (
    <div className={ciga.mainWrapper}>
      <div className={`${ciga.cigarette} ${ciga.cigaretteY}`}>
        <span style={style1}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style2}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style3}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style4}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style5}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style6}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style7}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style8}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style9}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style10}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
      </div>
    </div>
  );
};
const CigaRotationX = () => {
  var style1 = { "--i": 1 };
  var style2 = { "--i": 2 };
  var style3 = { "--i": 3 };
  var style4 = { "--i": 4 };
  var style5 = { "--i": 5 };
  var style6 = { "--i": 6 };
  var style7 = { "--i": 7 };
  var style8 = { "--i": 8 };
  var style9 = { "--i": 9 };
  var style10 = { "--i": 10 };
  return (
    <div className={ciga.mainWrapper}>
      <div className={`${ciga.cigarette} ${ciga.cigaretteX}`}>
        <span style={style1}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style2}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style3}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style4}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style5}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style6}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style7}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style8}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style9}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
        <span style={style10}>
          <i>Noooo</i>
          Smooooooking
          <i>I</i>
        </span>
      </div>
    </div>
  );
};
export default CigaretteComponent;
