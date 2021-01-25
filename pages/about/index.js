import React, {useState, useEffect} from 'react';
import Header from "comps/Header";
import Footer from "comps/Footer";

export default function About() {

    // useEffect(()=>{
    //     document.getElementById("about").style.right = "100%";
    // }, 2000);

    return <div className="page" id="about">
        <Header/>
        <Footer />
    </div>
}