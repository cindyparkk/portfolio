import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 70%;
    min-height: 320px;
    display: flex;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#C197D4"};
    align-items: center;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    padding:0px 2% 0px 2%;
    margin-top: 2%;
`;

const InfoImage = styled.img``;

const Box = styled.div`
    @include flexIt();

`;

const InfoTitle = styled.h4`
    color: #fff;
    margin: 0;
`;

const InfoText = styled.p`
    max-width: 333px;
    color: #fff;
    text-align: center;
`;

const HomeInfo = ({bgcolor, imgurl, title, text}) => {
    return <Container bgcolor={bgcolor}>
        <InfoImage src={imgurl}/>
        <Box>
            <InfoTitle>{title}</InfoTitle>
            <InfoText>{text}</InfoText>
        </Box>
    </Container>
}

HomeInfo.defaultProps = {
    bgcolor: null,
    imgulr: null,
    title: "campused",
    text:"a smart solution for affordable furniture for students living on campus"
};

export default HomeInfo;