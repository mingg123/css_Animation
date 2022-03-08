import Link from 'next/link';
import '../styles/globals.css';

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
      {animations.map((elem, index) => {
        return (
          <button key={index}>
            <Link href={'/' + elem}>{elem}</Link>
          </button>
        );
      })}
      <style jsx>
        {`
          button {
            height: 25px;
            margin-right: 3px;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
