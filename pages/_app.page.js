import "./global.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Kubota&apos;s Portfolio</title>
      <Component {...pageProps} />
    </>
  );
}
