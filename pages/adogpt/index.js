import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";

export default function Adogpt() {

    return <div className="page">
        <Head>
        <title>Adog'pt | Cindy Park</title>
        <link rel="shortcut icon" type="image/x-icon" href="/logo3.svg"></link>
        <link
              rel="preload"
              href="/fonts/Kiona/Kiona-Regular.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/Metropolis/Metropolis-Black.oft"
              as="font"
              crossOrigin=""
            />
      </Head>
      <Header/>
      <Footer />
    </div>
}