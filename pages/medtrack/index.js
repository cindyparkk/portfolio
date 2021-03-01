import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";
import TopBanner from "comps/TopBanner";
import Content from 'comps/Content';
import ContentImage from 'comps/ContentImage';

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
        <Content 
        text="As a team, we initially began to research for possible tracking list solutions for a niche community and came across applications that track medication intake and dosage. However, we found that most of the already existing applications are targeted towards a general audience, providing a lower level of accessibility. For example, most of the text were below 18pt, required a certain level of learning (i.e., hidden gestures), and/or had an overwhelming number of functionalities that can possibly be over-complicated for some users."
        />
        <div className="content_flexbox">
          <ContentImage imgurl="/medtrack-fig1.jpg" />
          <Content         
          title="background (research)"
          text="With our target market being both the people in mild to moderate stage of Alzheimer’s and the caregivers or family members who take care of Alzheimer's patients, the general age range of the audience is age of 60 or older. The basic characteristics of the users include:"
          display="block"
          item1="Possibility of living alone"
          item2="Inactive lifestyle"
          item3="Stubbornness"
          item4="Closed bonds and social relationships"
          item5="Difficulty moving"
          item6="Chance of having chronic diseases"/>
        </div>
      </div>
      <Footer />
    </div>
}