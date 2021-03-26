import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    min-height: 650px;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#F4F5F5"};
    display: flex;
    // padding-top: 80px;
    padding-left: 20px;
    // margin-botom: -50px;

    @media(max-width: 1224px){
        min-height: 500px;
    }

    @media(max-width: 768px){
        min-height: 350px;
        padding-left: 20px;
    }
`;

const Box = styled.div`
    width: 100%;
    // padding-right: -50px;
    background: url(${props=>props.imgurl ? props.imgurl : "/.svg"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media(max-width: 1224px){
        background-position: left;
        background-size: 140%;
    }
    @media(max-width: 768px){
        background-position: left;
        background-size: 180%;
    }
`;

const Title = styled.h3`
    text-transform: capitalize;
    margin: 35px 0px 20px 15px;
`;

const Text = styled.p`
    margin: 5px 50px 10px 15px;
    line-height: 1.75;
`;

const TopBanner = ({ bgcolor, imgurl}) => {
    return <Container bgcolor={bgcolor}>
        <Box imgurl={imgurl}></Box>
    </Container>
}

TopBanner.defaultProps = {
    imgurl:null
};

export default TopBanner;