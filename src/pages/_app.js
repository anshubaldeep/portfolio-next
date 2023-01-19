import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div id="root" style={{ visibility: mounted ? 'visible' : 'hidden' }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
