import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";
import TopBanner from "comps/TopBanner";
import Content from 'comps/Content';
import ContentImage from 'comps/ContentImage';
import HomeInfo from 'comps/HomeInfo';

export default function Adogpt() {

    return <div className="page">
        <Head>
        <title>Adog'pt | Cindy Park</title>
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
          imgurl="/adogpt-banner.svg" 
          bgcolor="#B7D4A0"
          // bgcolor="#F28482"
          />
        <Banner 
          role1="co-lead developer"
          role2="co-lead designer"
          role3=""
          date="jan—may 2020"/>


        <div className="more">
          <HomeInfo 
            width="25%" 
            padding="20px 10px 20px 0px"
            onClick={()=>{
            if(true){
              Router.push("/medtrack");
            }}} 
            bgcolor="#094D69" title="medTrack"
            imgurl="/medtrack.svg"/>
          <HomeInfo 
            width="25%" 
            padding="20px 10px 20px 0px"
            onClick={()=>{
              if(true){
                Router.push("/petsave");
              }}}
            bgcolor="#231f20" title="petSave"
            imgurl="/petsave.svg"
            />
          <HomeInfo 
            width="25%"
            padding="20px 10px 20px 0px"
            onClick={()=>{
              if(true){
                Router.push("/campused");
              }}} 
            imgurl="campused.svg"/>
          </div>
      </div>
      <Footer />
    </div>
}