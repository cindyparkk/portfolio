import React from 'react';
import styled from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    width: 100%;
    min-height: 130px;
    // background-color: #272834;
    // position: absolute;
    // bottom: 0;
    display: flex;
    align-items: center;
    // padding-right: 40px;
    margin-top: 30px;
    
`;

const FooterEmail = styled.div`
    padding: 0px 30px;
    flex: 4;
    // padding-top: 20px;
    display: flex;
    justify-content: space-between;
     h3 {
        &:hover {
            color: #b0b0b0;
            transition: color 0.3s;
        }
    }

    @media(max-width: 1224px){
        display: flex;
        flex-flow: column nowrap;
        margin-top: 25px;
    }
`;

const Email = styled.h6`
    color: #272834;
    // flex: 4;
    cursor: pointer;
    font-family:"Lato";    
    font-weight: 700;
    padding: 5px;

    &:hover {
        background-color: #FEC601;
    }
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    & > * {
        margin-right: 15px;
    }

    @media(max-width: 1224px){
        display: flex;
        flex-flow: column nowrap;
        h6 {
            margin: 10px 0px;
        }
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;

    & > div > img {

        width: 25px;
        height: auto;
        padding-left: 5px;
        cursor: pointer;
    }
    @media(max-width: 1224px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -15px;
    }
`;

const Resume = styled.h6`
    cursor: pointer;
`;

const Footer = ({}) => {
    return <Container>
        <FooterEmail>
            <Box>
                <h6>Let's Connect &#x1F44B;</h6>
                <Email onClick={()=>Router.push("mailto:contact@cindypark.ca")}>contact@cindypark.ca</Email>
            </Box>
            {/* <Email onClick={clickEmail}>contact@cindypark.ca</Email> */}
            <Links>
                <Resume onClick={()=>Router.push("/Cindy_Park_Resume.pdf")}>Resume |</Resume>
                <div onClick={()=>Router.push("https://www.linkedin.com/in/cindypark-profile/")}>
                    <img src="/linkedin.svg"></img>
                </div>
            </Links>
        </FooterEmail>
    </Container>
}

Footer.defaultProps = {

};

export default Footer;