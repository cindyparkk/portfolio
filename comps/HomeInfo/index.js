import React from 'react';
import styled from 'styled-components';
import Button from "comps/Button";

const Container = styled.div`
    min-width: ${props=>props.width ? props.width : "60%"};
    // max-width: 75%;
    min-height: ${props=>props.width ? "auto" : "320px"};
    display: flex;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#73BFB8"};
    align-items: center;
    justify-items: flex-end;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin-top: 20px;

    &:hover {
        transform: scale(1.01);
        transition: transform 0.5s;
    }
`;

const InfoImage = styled.img`
    width: 30%;
    height: auto;
    // padding: 20px 50px 20px 0px;
    padding: ${props=>props.padding ? props.padding : "20px 50px 20px 0px"};
`;

const Box = styled.div`
    @include flexIt();
    max-width: 400px;
`;

const InfoTitle = styled.h5`
    font-family: "GMarketSansBold";
    font-size: 45px;
    color: #fff;
    margin: 0;
    // max-width: 60%;
`;

const InfoText = styled.p`
    // max-width: 333px;
    color: #fff;
    // text-align: center;
    width: 100%;
    margin-right: 0;
`;

const Bottom = styled.div`
    // align-items: flex-end;
    width: 100%;
    margin-top: 30px;
`;

const HomeInfo = ({bgcolor, imgurl, title, text, onClick, width, padding}) => {
    return <Container bgcolor={bgcolor} width={width}>
        <InfoImage src={imgurl} padding={padding}/>
        <Box>
            <InfoTitle>{title}</InfoTitle>
            {text ? <InfoText>{text}</InfoText> : null}
            <Bottom>
                <Button border="5px solid #fff" bgcolor="transparent" title="view project" onClick={onClick}/>
            </Bottom>
        </Box>
    </Container>
}

HomeInfo.defaultProps = {
    bgcolor: null,
    imgurl: null,
    title: "campused",
    text:null,
    onClick:()=>{},
    width: null,
    padding: null
};

export default HomeInfo;