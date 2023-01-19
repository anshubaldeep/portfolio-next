import React from 'react';
import Head from 'next/head';
import AboutSection from '../components/About';
import ContactSection from '../components/ContactSection';
import JumbotronComponent from '../components/Jumbotron';
import MyJourney from '../components/MyJourney';
import WorkSection from '../components/WorkSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Baldeep Singh | Full-Stack Developer &amp; Designer</title>
        <meta name="author" content="Baldeep Singh" />
        <meta name="description" content="Full-Stack Software Developer &amp; Designer" />
        <meta property="og:description" content="Full-Stack Software Developer &amp; Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Baldeep Singh | Full-Stack Software Developer" />
        <meta
          property="og:description"
          content="Full-Stack Software Developer &amp; Designer"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/t9vnjnjlba/Avatar.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674086199069"
        />
        <meta name="google-site-verification" content="54b13YK2OKvITnZrWju2OdiHdXletfIMdYXHY8egh8g" />
      </Head>
      <header className="App-header">
        <JumbotronComponent />
        <AboutSection />
        <WorkSection />
        <MyJourney />
        <ContactSection />
      </header>
    </>
  );
}
