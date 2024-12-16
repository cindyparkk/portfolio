import React, { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";

export default function Petsave() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="page">
      {/* <Head>
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
      <Header />
      <div className="content">
        <TopBanner imgurl="/petsave-banner.svg" bgcolor="#54BAF3" />
        <Banner
          overview="A team of 4 front-end developers and designers created a social media platform to create a community for individual animal rescuers and animal rescue organizations to safely interact and exchange valuable information. With strong encouragement of sharing users’ experience in animal rescue with no limits on their species, posts related to adoption are discouraged."
          role1="Co-lead Developer"
          role2="Co-lead Designer, User Research, Prototyping &amp; Testing"
          role3=""
          date="Feb—March 2021"
          lang2="mySQL, Express, Multer"
        />
        {isDesktopOrLaptop && (
          <Content
            left="50px"
            right="50px"
            text="Throughout market research, we found that there are existing platforms that provide services directly related to adopting rescued animals, but there is a lack of information provided as to how these rescues take place. Most of the animal rescue communities are organized by the rescue organizations themselves, where they provide a mass amount of information—rather than creating a “community,” including:"
            display="block"
            item1="Rescued animals that are available for adoption or for foster"
            item2="How to get involved with volunteering with that organization"
            item3="Information and resources for shelters and cat / dog owners"
            item4="Organization-specific news and events"
            item5="Information about their organization—their mission, board of directors, FAQ, vision, etc."
            item6="[Rarely] organization-specific goods, (i.e. T-shirts for sale)"
          />
        )}
        {isTabletOrMobile && (
          <Content
            left="10px"
            text="Throughout market research, we found that there are existing platforms that provide services directly related to adopting rescued animals, but there is a lack of information provided as to how these rescues take place. Most of the animal rescue communities are organized by the rescue organizations themselves, where they provide a mass amount of information—rather than creating a “community,” including:"
            display="block"
            item1="Rescued animals that are available for adoption or for foster"
            item2="How to get involved with volunteering with that organization"
            item3="Information and resources for shelters and cat / dog owners"
            item4="Organization-specific news and events"
            item5="Information about their organization—their mission, board of directors, FAQ, vision, etc."
            item6="[Rarely] organization-specific goods, (i.e. T-shirts for sale)"
          />
        )}
        <Content
          left="50px"
          right="50px"
          top="-30px"
          title=""
          text="In summary, most of these organizations and their websites only provide organization-specific information and resources, rather than general information about “animal rescue” itself. "
        />
        <div className="content_flexbox">
          <ContentImage
            imgurl="/petsave-fig1.png"
            src="https://www.jotform.com/how-to-start-an-animal-rescue/"
          />
          <div className="content_flexbox_box">
            <Content
              title="background (Research)"
              text="We solve the lack of a structured community for animal rescuers by providing a social networking platform. Unlike the other existing applications or platforms available regarding animal rescue, this platform specifically targets those that are taking a part in rescuing animals as well as the local animal rescue organizations so that helpful tips and information can be shared amongst this niche community. A user can sign up using their email and username, and can share various posts with captions and photos, which then could be liked and commented by other registered users to create the bonding."
            />
          </div>
        </div>
        <div className="content_flexbox">
          <div className="content_flexbox_box">
            <Content
              title="exploration and iterations: Wireframing the idea"
              text="The following is a list of popular organizations / platforms we found online:"
              display="block"
              item1="C.A.R.E (https://carenorthshore.org/)"
              item2="Animal Rescue Community (https://animalrescuecommunity.org/)"
              item3="CARA (https://www.carams.org/)"
            />
            <Content
              left="10px"
              top="-30px"
              title=""
              text="After examining the three popular platforms, we want to focus on how to spread the adoption information and exchange adoption experience, so people will have a better understanding of animal rescue organizations/rescuers. We decided to include the following functions in our app:"
              display="block"
              item1="Allow users to update animal shelters’ information and current situation"
              item2="Allow users to discuss or leave comments under others’ posts"
              item3="Allow users to share their knowledge/experience/stories in their posts"
            />
          </div>
          <ContentImage
            imgurl="/petsave-wireframe.svg"
            bg="contain"
            pos="center top"
          />
        </div>
        <div className="content_flexbox">
          <ContentImage
            imgurl="/petsave-highfi1.svg"
            bg="120%"
            pos="left top"
          />
          <Content
            title="developing prototypes: first version of UI"
            text="Based on the background research and the wireframe, two of the team members developed the first version of the UI, having it ready for the first round of user testing. Major changes from the wireframe included:"
            display="block"
            item1="Visualizing the components into accessible and usable components (i.e. buttons)"
            item2="Adding colour scheme into the interface"
            item3="Adding additional pages (i.e. login page)"
          />
        </div>
        <div className="content_flexbox">
          <Content
            title="user testing"
            text="Throughout this project, we conducted two rounds of user testing to solidify any possible errors and/or areas of improvement. The first user test was carried out with the first version of the UI (User Interface), and the second test with the second version. Through both testings, we were able to develop the final version of the interface, having it prepared to code out. For each session, we invited four participants to a Zoom or Screen Sharing (if MacOS user), to navigate through the prototype screen. We conducted four separate sessions, each with one participant and two of our team members—one recording documents, and one guiding the participant throughout. In each session, the participant was asked to share their screen so that we can follow their navigation and the participant can verbally explain their thoughts. Before they start trying out the given scenarios, participants were asked to answer some general questions. The participants were given the following tasks to complete for both user tests:"
            display="block"
            item1="Create an account"
            item2="Create a post"
            item3="Comment on a post and visit the user's profile, then make an interaction (follow/email)"
          />
        </div>
        <div className="content_flexbox">
          <div className="content_flexbox_box">
            <Content
              title="second version of UI"
              text="Based on the first user test, the following are the feedback we received from the participants, as well as the improvements made on the UI:"
              display="block"
              item1="Include more visual feedback on interactions (i.e. a confirmation modal for creating a post)"
              item2="Create a logo for the application"
              item3="Change of the colour scheme, as orange and black does not portray a welcoming social media platform"
              item4="Clarify the purpose / goal of the application"
              item5="Add a logout option"
              item6="Replace some of the unnessary visuals, espeically the falcon image in the login page can be deceving"
            />
          </div>
          <ContentImage
            imgurl="/petsave-highfi2.svg"
            bg="cover"
            pos="center top"
          />
        </div>
        <div className="content_flexbox_box">
          <ContentImage
            imgurl="/petsave-highfi3.svg"
            bg="cover"
            pos="center top"
          />
          <Content
            title="final UI"
            text="We finally developed the final interface, which involved additional changes due to technical limitations during the development process. The following are the feedback we received from the participants, as well as the improvements made on the UI:"
            display="block"
            item1="Include the username of corresponding user on the top navigation bar, instead of [Profile]"
            item2="Ensure that the design of the components is consistent; make the comment input box similar to the normal input box that appears in the register / login pages, in terms of border-radius and colour"
            item3="Add more colours, rather than keeping the interface mainly black and white, as there was a feedback that the UI can look rather bland and incomplete"
            item4="Move the logout button elsewhere, as we aim to keep users mostly logged in"
            item5="Remove the disabled [Let's Start] button in the introduction pages, because it may create confusion as to when the user can 'start'"
          />
        </div>
        <div className="content_flexbox">
          <Content title="development" text="To be added" />
        </div>
        <div className="content_flexbox">
          <Content
            title="takeaways"
            text=""
            display="block"
            item1="It is important to lay out the number and types of requests the application needs to make to the database (POST, GET, PATCH, DELETE) in the beginning of the project so that all team members are on board."
            item2="The tables in the database must be built with consideration, because some rows may require building a separate table instead"
            item3="Simple is not always the answer. Over-simplifying a process or a function can create confusion to the users, even if they are comfortable with using technology."
            item4="Implementing an image upload requires thorough attention through both the server and the database, as the naming conventions apply strict rules (i.e. must call for an “image” in both front and back-end)"
          />
        </div>
        <div className="more">
          <HomeInfo
            width="25%"
            padding="20px 10px 20px 0px"
            onClick={() => {
              if (true) {
                Router.push("/medtrack");
              }
            }}
            bgcolor="#094D69"
            title="medTrack"
            imgurl="/medtrack.svg"
          />
          <HomeInfo
            width="25%"
            padding="20px 10px 20px 0px"
            onClick={() => {
              if (true) {
                Router.push("/campused");
              }
            }}
            imgurl="/campused.svg"
          />
          <HomeInfo
            width="25%"
            padding="20px 10px 20px 0px"
            onClick={() => {
              if (true) {
                Router.push("/adogpt");
              }
            }}
            bgcolor="#F28482"
            title="Adog'pt"
            imgurl="adogpt.svg"
          />
        </div>
      </div>
      <Footer /> */}
    </div>
  );
}
