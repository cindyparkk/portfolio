import React from 'react';
import styled from 'styled-components';
import Button from "comps/Button";

const Container = styled.div`
    min-width: 70%;
    min-height: 320px;
    display: flex;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#F89C55"};
    align-items: center;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    padding:0px 2% 0px 2%;
    margin-top: 2%;
`;

const InfoImage = styled.img``;

const Box = styled.div`
    @include flexIt();
`;

const InfoTitle = styled.h5`
    color: #fff;
    margin: 0;
`;

const InfoText = styled.p`
    max-width: 333px;
    color: #fff;
    text-align: center;
`;

const Bottom = styled.div`
    // align-items: flex-end;
    width: 100%;
`;

const HomeInfo = ({bgcolor, imgurl, title, text}) => {
    return <Container bgcolor={bgcolor}>
        <InfoImage src={imgurl}/>
        <Box>
            <InfoTitle>{title}</InfoTitle>
            <InfoText>{text}</InfoText>
            <Bottom>
                <Button border="5px solid #fff" bgcolor="transparent" title="view more"/>
            </Bottom>
        </Box>
    </Container>
}

HomeInfo.defaultProps = {
    bgcolor: null,
    imgurl: null,
    title: "campused",
    text:"a smart solution for affordable furniture for students living on campus"
};

export default HomeInfo;