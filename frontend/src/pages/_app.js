// pages/_app.js
import "../styles/globals.css"; // <-- move your global CSS import here

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
