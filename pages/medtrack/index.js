import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Banner from "comps/Banner";
import TopBanner from "comps/TopBanner";
import Content from 'comps/Content';
import ContentImage from 'comps/ContentImage';
import HomeInfo from 'comps/HomeInfo';

import Router from 'next/router';

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
        role3="Lead UI Designer, User Research, Prototyping &amp; Testing"
        />
        <Content 
        left="50px" right="50px"
        text="As a team, we initially began to research for possible tracking list solutions for a niche community and came across applications that track medication intake and dosage. However, we found that most of the already existing applications are targeted towards a general audience, providing a lower level of accessibility. For example, most of the text were below 18pt, required a certain level of learning (i.e., hidden gestures), and/or had an overwhelming number of functionalities that can possibly be over-complicated for some users."
        />
        <div className="content_flexbox">
          <ContentImage imgurl="/medtrack-fig1.jpg" 
          src="https://alz-journals.onlinelibrary.wiley.com/doi/full/10.1002/alz.12068"/>
          <div className="content_flexbox_box">
            <Content         
            title="background (research)"
            text="With our target market being both the people in mild to moderate stage of Alzheimer’s and the caregivers or family members who take care of Alzheimer's patients, the general age range of the audience is age of 60 or older. The basic characteristics of the users include:"
            display="block"
            item1="Possibility of living alone"
            item2="Inactive lifestyle"
            item3="Stubbornness"
            item4="Closed bonds and social relationships"
            item5="Difficulty moving"
            item6="Chance of having chronic diseases"
            left="10px"
            bottom="-30px"
            />
          </div>
        </div>
        <div className="content_flexbox">
          <div className="content_flexbox_box">
            <Content 
            title="exploration and iterations: Wireframing the idea"
            text="The biggest problem we aim to provide a solution to is: there are over 747,000 Canadians are living with Alzheimer's or another form of dementia, and they are most likely to forget to take their medication without reminder. Many of these users' limitations inlude the following:"
            display="block"
            item1="Older eyes are less able to distinguish the difference between blues and greens"
            item2="Lowered readability of text; requires large fonts"
            item3="Requirement of learnability of the UI (User Interface) must be low"
            />
            <Content 
            left="10px" top="-30px" title=""
            text="Moreover, there are also limitations to micro-interactions for patients with Alzheimer’s / elderly:"
            display="block"
            item1="More tapping than scrolling"
            item2="High color contrast (AAA) and large texts"
            item3="Simple, easy, and intuitive layout design. Shouldnot require many steps to complete tasks such as adding a new medication to track list"
            />
          </div>
          <ContentImage imgurl="/medtrack-wireframe.svg" bg="cover" pos="center top"/>
        </div>
        <div className="content_flexbox_box">
          <ContentImage imgurl="/medtrack-highfi1.svg" bg="cover" pos="center top" />
          <Content 
          title="Developing prototypes"
          text="Based on the background research and the wireframe, a team member and I developed the first version of the UI, having it ready for user testing. Major changes from the wireframe included:"
          display="block"
          item1="Change of the colour scheme from shades of purple to shades of dark blue, as there was a popular opinion that purple may trigger anxiety for some audience, based on the initial user research"
          item2="Based on the colour contrast levels, vast majority of the fonts were enlarged, with the minimum size being 18px"
          item3="In addition, buttons were also enlarged to assit with the tapping gesture and ease the accessibility for users"
          />
        </div>
        <div className="content_flexbox">
        <ContentImage imgurl="/medtrack-highfi2.svg" bg="cover" pos="center top" />
          <Content title="user testing"
          text="To identify possible errors and solutions to the application, we invited four participants to a Zoom or Screen Sharing (if MacOS user), to navigate through the prototype screen. We conducted four separate sessions, each with one participant and two of our team members—one recording documents, and one guiding the participant throughout. In each session, the participant was asked to share their screen so that we can follow their navigation and the participant can verbally explain their thoughts. Before they start trying out the given scenarios, participants were asked to answer some general questions. After they finish all the tasks, there are few more questions that need to be answered. Based on these participant's inputs, we iterated the final version of the prototype, as shown on the left.
          "/>
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
          item1="Focus on the problem. When it becomes greatly challenging to carry out both front-end coding and database coding, focus on the essential functions first, to manage time wisely."
          item2="Communication within the team is crucial. Especially when connecting the front-end to the database, the entire team not only needs to know the progress of the project but also the detailed work division to assist one another when needed. Our team focused on communication and collaboration through holding consistent virtual meetings through Discord, and Visual Studio Code’s LiveShare extension."
          />
        </div>
        <div className="more">
          <HomeInfo 
            width="25%"
            padding="20px 10px 20px 0px" 
            onClick={()=>{
          if(true){
            Router.push("/petsave");
          }
           }} 
           bgcolor="#231f20" title="petSave"
           imgurl="/petsave.svg"/>
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