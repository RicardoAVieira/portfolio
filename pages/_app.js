import '../styles/globals.css'
import '../components/layout/Footer.module.css'
import '../components/layout/Header.module.css'
import '../components/contador/Contador.module.css'
import '../components/mega/Mega.module.css'

import React from 'react'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
