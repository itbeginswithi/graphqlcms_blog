import React, {useState, useEffect} from 'react';
import 'tailwindcss/tailwind.css';

import '../styles/globals.scss';
import {Layout} from '../components'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
