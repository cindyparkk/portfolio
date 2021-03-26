import React, {useEffect, useRef} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import HomeInfo from "comps/HomeInfo";
import Menu from "comps/Menu";
import NextLink from 'next/link';

import Router from 'next/router';

// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//   if (document.body.scrollTop > 50 || 
//     document.documentElement.scrollTop > 50) {
//       document.getElementById("header").style.boxShadow = "0 0 0.5em rgba(0, 0, 0, 0.5)";
//     } else document.getElementById("header").style.boxShadow = "0px"
// }

export default function Home() {
  var i = 0;
  var text = "Hi, I'm Cindy, ";

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("title").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } 
  }

  useEffect(()=>{
    typeWriter();
  }, []);

  var x= 0;
  var text2 = "I code and design."

  function typeWriter2(){
    if (x < text2.length) {
      document.getElementById("title2").innerHTML += text2.charAt(x);
      x++;
      setTimeout(typeWriter2, 100);
    } 
  }

  setTimeout(()=>{
    typeWriter2();
  }, 2000);



  // for page down

  const titleRef = useRef()

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page">
      <Head>
        <title>Cindy Park | Portfolio</title>
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
      <Header id="header" />
      <div className="page_title">
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
      <Footer />
    </div>
  )
}
