import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";

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
      <div className="content">
        <h5 className="content_title" id="adogpt">Adog<span>'pt</span></h5>
        <Banner 
        role1="co-lead developer"
        role2="co-lead designer"
        role3=""
        date="jan—may 2020"/>
      </div>
      <Footer />
    </div>
}