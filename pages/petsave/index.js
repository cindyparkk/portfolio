import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";
import TopBanner from "comps/TopBanner";

export default function Petsave() {

    return <div className="page">
        <Head>
        <title>petSave | Cindy Park</title>
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
          imgurl="/petsave-banner.svg" 
          bgcolor="#54BAF3"/>
        <Banner 
        role1="Co-lead Developer"
        role2="Co-lead Designer"
        role3=""
        date="Feb—March 2021"/>
      </div>
      <Footer />
    </div>
}