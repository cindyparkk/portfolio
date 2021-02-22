import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    // width: 100%;
    min-height: 200px;
    background-color: #F4F5F5;
    display: flex;
    padding: 25px 0px;
`;

const Left = styled.div`
    flex: 2;
    // background-color: #dad;
    margin: 0px 30px;
    // width: 45%;
`;

const Right = styled.div`
    flex: 1;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    text-transform: capitalize;
    margin: 10px 0px 10px 15px;
`;

const Text = styled.h6`
    margin: 5px 0px 5px 15px;
    text-transform: capitalize;
`;

const HR = styled.hr`
    width: 100%;
    height: 0.5px;
    opacity: 0.3;
    margin: 20px 0px;
`;

const Banner = ({title1, title2, role1, role2, role3, date}) => {
    return <Container >
        <Left>
            <Title>{title1}</Title>
        </Left>
        <Right>
            <Title>{title2}</Title>
            <Text>{role1}</Text>
            <Text>{role2}</Text>
            <Text>{role3}</Text>
            <HR></HR>
            <Text>{date}</Text>
        </Right>
    </Container>
}

Banner.defaultProps = {
    title1: "overview",
    title2:"role",
    role1:"project manager",
    role2:"lead developer",
    role3:"lead UI designer",
    date:"jan—feb 2021"
};

export default Banner;