import { useEffect } from 'react';

export const useScrollEvent = ({ onScrollUp, onScrollDown }) => {
  const [y, setY] = React.useState(0);
  const handleScroll = e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      onScrollUp(y);
    } else if (y < window.scrollY) {
      onScrollDown(y);
    }
    setY(window.scrollY);
  };
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });
};
