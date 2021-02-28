import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px 30px;
`;

const Left = styled.div`
    // padding-right: -50px;
    background: url(${props=>props.imgurl ? props.imgurl : "/.svg"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Right = styled.div`

`;

const 

const LeftImage = ({imgurl}) => {
    return <Container>
        <Left imgurl={imgurl}></Left>
    </Container>
}

LeftImage.defaultProps = {
    imgurl:null
};

export default LeftImage;