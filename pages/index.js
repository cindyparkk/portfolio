import React, {useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import HomeInfo from "comps/HomeInfo";
import Menu from "comps/Menu";

import Router from 'next/router';

// window.onscroll = function() {scrollFunction()};

// function scrollFunction(){
//   if (document.body.scrollTop > 50 || 
//     document.documentElement.scrollTop > 50) {
//       document.getElementById("header").style.boxShadow = "0 0 0.5em rgba(0, 0, 0, 0.5)";
//     } else document.getElementById("header").style.boxShadow = "0px"
// }

function clicktoAbout() {
  if (true){
    Router.push("/about");
  }
}

function clicktoContact() {
  if (true){
    Router.push("/contact");
  }
}

export default function Home() {
  // var i = 0;
  // var text = "Hi, I'm Cindy,";

  // function typeWriter() {
  //   if (i < text.length) {
  //     document.getElementById("title").innerHTML += text.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, 100);
  //   } 
  // }

  // useEffect(()=>{
  //   typeWriter();
  // }, []);

  // var x= 0;
  // var text2 = "I code and design."

  // function typeWriter2(){
  //   if (x < text2.length) {
  //     document.getElementById("title2").innerHTML += text2.charAt(x);
  //     x++;
  //     setTimeout(typeWriter2, 100);
  //   } 
  // }

  // setTimeout(()=>{
  //   typeWriter2();
  // }, 2000);

  return (
    <div className="page">
      <Head>
        <title>Cindy Park | Portfolio</title>
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
      <Header id="header" />
      <div className="page_title">
        <h1 id="title"></h1>
        <h1 id="title2"></h1>
      </div>
      <HomeInfo />
      <HomeInfo bgcolor="#8093F1" title="Adog'pt"/>
      <HomeInfo bgcolor="#F28482" title="medTrack"/>
      <Footer />
    </div>
  )
}
