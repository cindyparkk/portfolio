import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "../../comps/global/header";
import Footer from "../../comps/Footer";
import Banner from "../../comps/Banner";
import TopBanner from "../../comps/TopBanner";
import Content from "../../comps/Content";
import ContentImage from "../../comps/ContentImage";
import HomeInfo from "../../comps/HomeInfo";
import Router from 'next/router';

import { useMediaQuery } from 'react-responsive';

export default function Campused() {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
          <TopBanner 
          imgurl="/campused-banner.svg" 
          bgcolor="#EA7317"/>
          <Banner 
          overview="A team of 5 front-end developers, designers and a back-end developer collaborated to build a furniture market app for univeristy students living on campus in BC. The furniture that is sold on campused can be left in the seller's dorm for the buyer to use when they move into that dorm; or, the seller and buyer can meetup somewhere on campus to exchange a furniture item.
          Since our app is very niche and local towards the user’s school, they can develop small and friendly communities, and the furniture they buy and sell will always be nearby. "
          role2="Lead Front-end developer" 
          role3=""
          date="Sept—Dec 2020"
          lang1="Next.js"
          lang2="Database: firebase, nodeJS"
          />
          {isDesktopOrLaptop && <Content 
        left="50px" right="50px"
        text="Through a thorough research, we found several problems or issues that university / college students face while living on campus, including:"
        display="block"
        item1="Students spend too much time and effort cleaning and selling furniture that they have used while living on campus when it is time for them to move out"
        item2="Dealing with the amount of junk load on campus that increases during the move out season from students trying to throw away their used belongings"
        item3="Students that rely on public transit usually have low accessibility to furniture shops or bringing these products home by themselves, especially the cheap ones on campus"
        />}
        {isTabletOrMobile && <Content 
        left="10px"
        text="Through a thorough research, we found several problems or issues that university / college students face while living on campus, including:"
        display="block"
        item1="Students spend too much time and effort cleaning and selling furniture that they have used while living on campus when it is time for them to move out"
        item2="Dealing with the amount of junk load on campus that increases during the move out season from students trying to throw away their used belongings"
        item3="Students that rely on public transit usually have low accessibility to furniture shops or bringing these products home by themselves, especially the cheap ones on campus"
        />}
        <div className="content_flexbox">
          <ContentImage imgurl="/ubc.jpeg" bg="cover"
          src="https://you.ubc.ca/ubc-life/vancouver/residence/"/>
          <div className="content_flexbox_box">
            <Content         
            title="coming up with the solution"
            text="With our target market being the university students living on campus in BC, Canada, we aimed to solve the problems listed above, as follows:"
            display="block"
            item1="campused is an efficient and easy market service application that is used for selling and buying furniture in dorms on school campuses in BC. "
            item2="The furniture that is sold on campused can be left in the seller's dorm for the buyer to use when they move into that dorm; or, the seller and buyer can meetup somewhere on campus to exchange a furniture item."
            item3="Since our app is very niche and local towards the user’s school, they can develop small and friendly communities, and the furniture they buy and sell will always be nearby. "
            item4="While our competitors such as Facebook Marketplace and Craigslist fill a gap of buying and selling world-wide, campused is based more around niche communities, and it brings students together within certain schools and universities."
            />
          </div>
        </div>
        <div className="content_flexbox">
          <div className="content_flexbox_box">
            <Content 
            title="exploration and iterations: Wireframing the idea"
            text="As a team, we first developed the basic wireframe of the application, based on the general workflow that a user would should be able to go through on a market service platform. This workflow included the specific functionalities our app wished to feature. Some of the specifications of our app are:"
            display="block"
            item1="PayPal — With PayPal directly incorporated into the app, we aimed to ensure secure transactions while reducing the risk of fraud."
            item2="Chatbox — A messaging system for sellers and buyers to communicate within the app. This way, no no external applications are needed to buy or sell on campused as the payment and messaging is combined together into one."
            item3="User Rating — As another form of security; with the ability to rate sellers on the app, purchases are much more trustworthy and secure."
            />
          </div>
          <ContentImage imgurl="/campused-wireframe.svg" bg="contain" pos="center top"/>
        </div>
        <div className="content_flexbox">
          <Content title="user testing"
          text="During the early stages of this project, we conducted one round of user testing to solidify any possible errors and/or areas of improvement. Through the testings, we were able to develop the final version of the interface, having it prepared to code out. We invited five participants to a Zoom or Screen Sharing (if MacOS user), to navigate through the prototype screen. We conducted five separate sessions, each with one participant and two of our team members—one recording documents, and one guiding the participant throughout. In each session, the participant was asked to share their screen so that we can follow their navigation and the participant can verbally explain their thoughts. Before they start trying out the given scenarios, participants were asked to answer some general questions. The participants were given the following tasks to complete for both user tests:"
          display="block"
          item1="Sign up and fill in basic information"
          item2="Find your profile"
          item3="Choose a furniture category"
          item4="Create a listing"
          />
        </div>
        <div className="content_flexbox">
        <ContentImage imgurl="/campused-highfi1.svg" bg="120%" pos="left top" />
          <Content title="developing prototypes"
          text="Based on the feedback received from the users, our designers developed the prototype for the app, inspired by the Contra Wireframe kit on Figma. While converting the wireframe into a high-fidelity prototype, the designers focused on the following:"
          display="block"
          item1="Selection of colour scheme that best matches the app's purpose and mood"
          item2="Ensuring that components and pages have consistent design"
          item3="Adding additional pages (i.e. home landing page)"
          />
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
          item1="In general, our team struggled with the lack of knowledge in each other's areas: front-end developers did not know how to encode and decode back-end codes, and vice versa for the only back-end developer in our team. To overcome this, we held almost daily meetings to debug together while educating one another."
          item2="There must be precise and thorough (I repeat. T-h-o-r-o-u-g-h) communication to and from both ends in order to make a stable connection from the web to the database."
          item3="Each member in the team must know their tasks and their abilities, and when these are not communicated early on, the project outcome would not be of your expectation."
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
          <HomeInfo title="petSave"
          bgcolor="#231f20"
          width="25%" 
          padding="20px 10px 20px 0px"
          onClick={()=>{
            if(true){
              Router.push("/petsave");
            }
          }}
          imgurl="/petsave.svg"
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