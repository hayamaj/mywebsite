import '../styles/globals.css'
import { Open_Sans } from "next/font/google";
require('dotenv').config();
import Head from 'next/head'

import localFont from 'next/font/local'

const didot = localFont({
  src: [
    {
      path: '../public/fonts/Didot.ttf',
      weight: '400'
    }
  ],
  variable: '--font-didot'
})

const didotdf = localFont({
  src: [
    {
      path: '../public/fonts/DidotDef.ttf',
      weight: '400'
    }
  ],
  variable: '--font-didotdf'
})

const proxnova = localFont({
  src: [
    {
      path: '../public/fonts/pnlight.otf',
      weight: '300'
    }
  ],
  variable: '--font-proxnova'
})



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
 
export default MyApp
