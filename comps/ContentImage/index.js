import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    // display: flex;
    padding: 5px 5px 0px 50px;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#fff"};
    height: 100%;

    @media(max-width: 1224px){
        height: 300px;
        padding: 0;
    }
`;

const Left = styled.div`
    background: url(${props=>props.imgurl ? props.imgurl : "/medtrack-fig1.jpg"});
    background-repeat: no-repeat;
    background-size: ${props=>props.bg ? props.bg : "contain"};
    background-position: ${props=> props.pos ? props.pos : "center"};
    flex: 1;
    min-width: 55%;
    min-height: 50vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
    // fix this scroll

    @media(max-width: 1224px){
        height: 100px;
        width: 95vw;
    }
`;

const Source = styled.a`
`;

const ContentImage = ({imgurl, bgcolor, src, bg, pos, width}) => {
    return <Container bgcolor={bgcolor}>
        <Left imgurl={imgurl} bg={bg} pos={pos}></Left>
        {src ? <Source href={src}>Source: {src}</Source> : null}
    </Container>
}

ContentImage.defaultProps = {
    bgcolor: null,
    imgurl:"/medtrack-fig1.jpg",
    src:"",
    bg:null,
    pos: null
};

export default ContentImage;