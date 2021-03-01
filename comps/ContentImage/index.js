import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    // display: flex;
    padding: 20px 50px;
    background-color: ${props=>props.bgcolor ? props.bgcolor : "#fff"};
`;

const Left = styled.div`
    background: url(${props=>props.imgurl ? props.imgurl : "/medtrack-fig1.jpg"});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    flex: 1;
    min-width: 55%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const ContentImage = ({imgurl, bgcolor}) => {
    return <Container bgcolor={bgcolor}>
        <Left imgurl={imgurl}></Left>
    </Container>
}

ContentImage.defaultProps = {
    bgcolor: null,
    imgurl:"/medtrack-fig1.jpg"
};

export default ContentImage;