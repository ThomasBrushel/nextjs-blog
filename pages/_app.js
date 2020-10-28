// If you want some CSS to be loaded by every page

import "../styles/global.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}