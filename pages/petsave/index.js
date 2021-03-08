import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";
import TopBanner from "comps/TopBanner";
import Content from 'comps/Content';
import ContentImage from 'comps/ContentImage';
import HomeInfo from 'comps/HomeInfo';

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
        overview="A team of 4 front-end developers and designers created a social media platform to create a community for individual animal rescuers and animal rescue organizations to safely interact and exchange valuable information. With strong encouragement of sharing users’ experience in animal rescue with no limits on their species, posts related to adoption are discouraged."
        role1="Co-lead Developer"
        role2="Co-lead Designer, User Research, Prototyping &amp; Testing"
        role3=""
        date="Feb—March 2021"/>
        <Content 
        left="50px" right="50px"
        text="Throughout market research, we found that there are existing platforms that provide services directly related to adopting rescued animals, and there is a lack of information provided as to how these rescues take place. Most of the animal rescue communities are organized by the rescue organizations themselves, where they provide a mass amount of information—rather than creating a “community,” including:"
        display="block"
        item1="Rescued animals that are available for adoption or for foster"
        item2="How to get involved with volunteering with that organization"
        item3="Information and resources for shelters and cat / dog owners"
        item4="Organization-specific news and events"
        item5="Information about their organization—their mission, board of directors, FAQ, vision, etc."
        item6="[Rarely] organization-specific goods, (i.e. T-shirts for sale)"
        />
        <Content 
        left="50px" right="50px" top="-30px" title=""
        text="In summary, most of these organizations and their websites only provide organization-specific information and resources, rather than general information about “animal rescue” itself. "/>
        <div className="content_flexbox">
          <ContentImage imgurl="/medtrack-fig1.jpg" 
          src="https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/alz.12068"/>
          <div className="content_flexbox_box">
            <Content         
            title="background (research)"
            text="We solve the lack of a structured community for animal rescuers by providing a social networking platform. Unlike the other existing applications or platforms available regarding animal rescue, this platform specifically targets those that are taking a part in rescuing animals as well as the local animal rescue organizations so that helpful tips and information can be shared amongst this niche community. A user can sign up using their email and username, and can share various posts with captions and photos, which then could be liked and commented by other registered users to create the bonding."
            />
          </div>
        </div>
        <div className="content_flexbox">
          <Content
          title="development"
          text="To be added"/>
        </div>
        <div className="content_flexbox">
          <Content
          title="takeaways" text=""
          display="block"
          item1="Simple is not always the answer. Over-simplifying a process or a function can create confusion to the users, even if they are comfortable with using technology."
          />
        </div>
        <div className="more">
          <HomeInfo 
            width="25%" 
            padding="20px 10px 20px 0px"
            onClick={()=>{
          if(true){
            Router.push("/medtrack");
          }
           }} 
           bgcolor="#094D69" title="medTrack"
           imgurl="/medtrack.svg"/>
          <HomeInfo 
          width="25%" 
          padding="20px 10px 20px 0px"
          onClick={()=>{
            if(true){
              Router.push("/campused");
            }
          }}
          imgurl="/campused.svg"
          />
          <HomeInfo 
          width="25%"
          padding="20px 10px 20px 0px"
          onClick={()=>{
            if(true){
              Router.push("/adogpt");
            }
          }} bgcolor="#F28482" title="Adog'pt"
          imgurl="adogpt.svg"/>
        </div>
      </div>
      <Footer />
    </div>
}