import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";

export default function Campused() {

    return <div className="page">
        <Head>
        <title>campused | Cindy Park</title>
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
        <div className="content">
        <h5 className="content_title" id="campused">camp<span>used</span></h5>
        <Banner 
        role2="lead front-end developer" 
        role3=""
        date="sept—dec 2020"
        />
      </div>
        <Footer />
    </div>
}