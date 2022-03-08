export const MyButton = ({ children, clicked, ...others }) => {
  return (
    <>
      <button {...others} className={clicked ? 'clicked' : ''}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            border-bottom: '2px solid transparent';
            borderradius: 0;
            color: #1378bc;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            background-color: #f1f1f1;
            font-size: large;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            text-align: center;
            min-width: 100px;
            min-height: 40px;
            background-color: white;
          }
        `}
      </style>
    </>
  );
};

export default MyButton;
