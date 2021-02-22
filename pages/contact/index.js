import React, {useState, useEffect} from 'react';
import Header from "comps/Header";
import Footer from "comps/Footer";
import Input from "comps/Input";
import Button from "comps/Button";

export default function Contact() {
    return <div className="page contact">
        <Header/>
        <div className="contact_content">
            <h5>Let's get in touch:</h5>
            <Input />
        </div>
        <Footer />
    </div>
}