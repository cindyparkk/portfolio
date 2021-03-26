import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Content from "comps/Content";
import TopBanner from 'comps/TopBanner';
import ContentImage from 'comps/ContentImage';

export default function About() {

    // useEffect(()=>{
    //     document.getElementById("about").style.right = "100%";
    // }, 2000);

    return <div className="page" id="about">
        <Head>
        <title>About | Cindy Park</title>
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
            <div className="content_flexbox">
                <ContentImage 
                imgurl="/me.jpg"
                />
                <div className="content_flexbox_box">
                    <Content title="a little bit about me"
                    text="My name is Cindy Park and I'm passionate about making solutions for people to make their lives easier, in the digital world. I also find joy finding ways to make effective communication both online and in person! An active problem solver, well-organized person with high attention to detail."
                    bottom="-30px"
                    />
                    <Content 
                    title=""
                    text="I started my studies in Biological Sciences at the University of British Columbia (for their Bsc degree), and in my second year I realized that it was not my way at all. So I headed into exploring new areas, until I was able to learn basic coding while I was still at UBC. Around the same time I also had a chance to learn Adobe Photoshop! Then I knew it was the time for change and started my studies in Digital Design and Development at BCIT. And now I'm here—devoting my blood, sweat and tears into coding and design :')"
                    />
                </div>
            </div>
            <div className="content_flexbox about_banner">
                <Content 
                title="designer"
                text="" bgcolor="#F4F5F5"
                display="block"
                item1="'Oh, that look's nice!'"
                item2="UX design"
                item3="UI design"
                item4="Interaction design"
                item5="Research"
                />
                <img id="about_pie" src="/pie.svg" alt="Design vs. Coding"/>
                <Content 
                title="coder"
                text="" bgcolor="#F4F5F5"
                display="block"
                item1="Yelling to the computer occassionally"
                item2="HTML5, CSS"
                item3="JavaScript"
                item4="React js, Create React"
                item5="Other JS frameworks"
                item6="PHP, mySQL"
                />
            </div>
            <div className="content_flexbox_box">
                <h5>My Skills</h5>
                <img src="/bar.svg" alt="My Skills"/>
            </div>
            <div className="content_flexbox_box">
                <h5>Random Facts About Me</h5>
                <div className="content_flexbox">
                    <h6>
                        <ul>
                            <li>A swimmer (I could also teach, past tense because...)</li>
                            <li>Just started ballet</li>
                            <li>Love cooking (particularly the eating part @ end)</li>
                            <li>Love interior deisgn and architecture</li>
                            <li>A big foodie (1k followers on IG!)</li>
                            <li>K-drama expert</li>
                            <li>K-anything expert</li>
                        </ul>
                    </h6>
                    <ContentImage 
                    imgurl="/me2.jpg"
                    />
                </div>
            </div>
            {/* <div className="content_flexbox_box">
                <h5>What have I been doing with life?</h5>
                <p>To be added.</p>
            </div> */}
        </div>
        <Footer />
    </div>
}