import Link from 'next/link';
import '../styles/globals.css';
import MyButton from '../widget/MyButton';

function MyApp({ Component, pageProps }) {
  const animations = [
    'forest',
    'colorfulrain',
    'keyboard',
    'cigarette',
    'planet',
    'airplane',
    'blub',
  ];

  return (
    <>
      <div className="buttonWrapper">
        {animations.map((elem, index) => {
          return (
            <MyButton key={index}>
              <Link href={'/' + elem}>{elem}</Link>
            </MyButton>
          );
        })}
      </div>
      <style jsx>
        {`
          .buttonWrapper {
            display: flex;
            justify-content: center;
            gap: 70px;
            padding-top: 30px;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
