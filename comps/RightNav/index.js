import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Router from 'next/router';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    background-color: #272834;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    transition: transform 0.8s ease-in-out;
`;

const Nav = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    // align-items: center;
    width: 100%;
    padding: 3.5rem;

    h3 {
        padding: 32px 0px;
        color: #fff;
        margin: 0;
        font-size: 35px;
      }
`;

const Work = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    // align-items: center;
    margin-top: -10px;
    padding-left: 30px;

    h5 {
        color: #fff;
        padding: 15px 0px;
        margin: 0;
        font-size: 22px;
    }

    div {
        display: flex;
        flex-flow: row nowrap;
        cursor: pointer;
        &:select
    }

    img {
        width: 20px;
        height: auto;
        margin-left: 10px;
        transform: rotate(-90deg);
    }
`;


const RightNav = ({open}) => {

    return <Container open={open}>
    <Nav open={open}>
        <h3 onClick={()=>{Router.push("/")}}>Home</h3>
        <h3>Work</h3>
        <Work>
            <div onClick={()=>{Router.push("/medtrack")}}>
                <h5>medTrack</h5>
                <img src="/down-white.svg" />
            </div>
            <div onClick={()=>{Router.push("/petsave")}}>
                <h5>petSave</h5>
                <img src="/down-white.svg" />
            </div>
            <div onClick={()=>{Router.push("/campused")}}>
                <h5>campused</h5>
                <img src="/down-white.svg" />
            </div>
            <div onClick={()=>{Router.push("/adogpt")}}>
                <h5>Adog'pt</h5>
                <img src="/down-white.svg" />
            </div>
        </Work>
        <h3 onClick={()=>{Router.push("/about")}}>About</h3>
        <h3 onClick={()=>{Router.push("/contact")}}>Contact</h3>
    </Nav>
    </Container>
};

RightNav.defaultProps = {

}

export default RightNav;