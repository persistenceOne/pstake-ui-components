import '../styles/globals.css'
// import "@persistenceone/pstake-ui-components/dist/build.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
