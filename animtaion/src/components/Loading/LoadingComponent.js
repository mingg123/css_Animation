import { useEffect } from "react";
import "./Loading.css";

const LoadingComponent = () => {
  useEffect(() => {}, []);
  const count = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section>
      <div className="loader">
        {count.map((elem, idx) => {
          return (
            <span
              style={{
                transform: `rotate(calc(18deg * ${idx}))`,
              }}
            ></span>
          );
        })}
      </div>
    </section>
  );
};

export default LoadingComponent;
