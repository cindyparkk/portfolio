import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";
import TopBanner from "comps/TopBanner";

export default function Medtrack() {

    return <div className="page">
        <Head>
        <title>medTrack | Cindy Park</title>
        <link rel="shortcut icon" type="image/x-icon" href="/logo-c.svg"></link>
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
        <TopBanner 
        imgurl="/medtrack-banner.svg" 
        bgcolor="#094D69"/>
        <Banner 
        overview="A team of 4 front-end developers and designers created a mobile medication tracker for patients diagnosed with the Alzheimer’s disease. This app’s functions include tracking medication usage, which pill to intake at a particular time of the day, along with displaying a variety of information about that medication."
        />
      </div>
      <Footer />
    </div>
}