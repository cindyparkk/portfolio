import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Header from "comps/Header";
import Footer from "comps/Footer";
import Input from "comps/Input";
import Button from "comps/Button";

export default function Contact() {
    return <div className="page contact">
        <Head>
            <title>Contact | Cindy Park</title>
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
        <div className="contact_content">
            <h5 className="content_title">Let's get in touch:</h5>
            <Input />
            <div className="page_button">
                <Button />
            </div>
        </div>
        <Footer />
    </div>
}