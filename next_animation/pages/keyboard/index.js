import keyboard from './Keyboard.module.scss';

export const KeyboardComponent = ({}) => {
  return (
    <div className={keyboard.main}>
      <div className={keyboard.container}>
        <div className={keyboard.wrapper}>
          <span className={keyboard.boardspan}>
            <i>C</i>
          </span>
          <span className={keyboard.boardspan}>
            <i>S</i>
          </span>
          <span className={keyboard.boardspan}>
            <i>S</i>
          </span>
        </div>
        <div className={keyboard.wrapper}>
          <span className={keyboard.boardspan}>
            <i>O</i>
          </span>
          <span className={keyboard.boardspan}>
            <i>N</i>
          </span>
          <span className={keyboard.boardspan}>
            <i>L</i>
          </span>
          <span className={keyboard.boardspan}>
            <i>Y</i>
          </span>
        </div>
        <div className={keyboard.wrapper}>
          <span className={keyboard.boardspan} style={{ minWidth: '450px' }}>
            <i></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default KeyboardComponent;
