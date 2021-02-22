import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    // width: 100%;
    min-height: 200px;
    background-color: #F4F5F5;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    background-color: #dad;
    margin: 0px 30px;
    // width: 45%;
`;

const Right = styled.div`
    flex: 1;
    background-color: #fab;
    margin-right: 30px;
`;

const Banner = ({}) => {
    return <Container >
        <Left>
            overview
        </Left>
        <Right>
            role
        </Right>
    </Container>
}

Banner.defaultProps = {

};

export default Banner;