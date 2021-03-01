import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";

export default function Campused() {

    return <div className="page">
        <Head>
        <title>campused | Cindy Park</title>
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
        <Banner 
        role2="Lead Front-end developer" 
        role3=""
        date="Sept—Dec 2020"
        />
      </div>
        <Footer />
    </div>
}