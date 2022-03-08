import { useState } from 'react';
import blub from './Blub.module.scss';
const BlubComponent = () => {
  const [check, setCheck] = useState(false);
  const onClick = () => {
    setCheck(!check);
  };
  return (
    <div className={blub.main}>
      <div className={blub.wrapper}>
        <label>
          <input type="checkbox" checked={check} onClick={onClick} />
          <span>{check ? 'ON' : 'OFF'}</span>
          <div className={blub.blub} />
        </label>
      </div>
    </div>
  );
};

export default BlubComponent;
