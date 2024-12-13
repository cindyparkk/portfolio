import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import HomeInfo from "comps/HomeInfo";
// import Menu from "comps/Menu";
// import NextLink from 'next/link';

import Router from "next/router";
// comps
import PageHead from "../comps/global/pageHead";
import Header from "../comps/global/header";
import Footer from "../comps/global/footer";
// constants
import colors from "../theme/colors";

export default function Home() {
  const titleRef = useRef();

  // function handleBackClick() {
  //   titleRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <>
      <PageHead />
      <div className="page">
        <Header id="header" />
        <TempPage>
          <h3>The following portfolio is currently under construction.</h3>
          <p>
            If you require access to the portfolio details, please contact
            cindypark31@gmail.com
          </p>
        </TempPage>
        <Footer />
        {/* <div className="page_title">
        <h1 id="title"></h1>
        <h1 id="title2"></h1>
        <NextLink className="scroll" href="/#href">
          <div className="page_down down" >
            <h2>see work</h2>
            <img src="/down.svg" 
            // onClick={handleBackClick}
            />
        </div>
        </NextLink>
      </div>
      <div className="page_left" id="href" ref={titleRef}>
        <h2>my recent work</h2>
      </div>
      <HomeInfo onClick={()=>{
        if(true){
          Router.push("/medtrack");
        }
      }} bgcolor="#094D69" title="medTrack"
      imgurl="/medtrack.svg"
      text="A medication tracker application for patients with Alzheimer's"/>
      <HomeInfo onClick={()=>{
        if(true){
          Router.push("/petsave");
        }
      }} bgcolor="#231f20" title="petSave"
      imgurl="/petsave.svg"
      text="A new social media platform for individual animal rescuers and animal rescue organizations"/>
      <HomeInfo 
      onClick={()=>{
        if(true){
          Router.push("/campused");
        }
      }}
      imgurl="/campused.svg"
      text="A smart solution for affordable furniture for students living on campus"
      />
      <HomeInfo onClick={()=>{
        if(true){
          Router.push("/adogpt");
        }
      }} bgcolor="#F28482" title="Adog'pt"
      imgurl="adogpt.svg"
      text="A simple educational application for those who are interested in adopting a dog"/>
      <Footer /> */}
      </div>
    </>
  );
}

const TempPage = styled.div`
  /* position: absolute; */
  top: 75px;
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 90vh;
`;
