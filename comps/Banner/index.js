import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    // width: 100%;
    min-height: 200px;
    background-color: #F4F5F5;
    display: flex;
    padding: 15px 50px;
`;

const Left = styled.div`
    flex: 2;
    // background-color: #dad;
    margin: 0px 20px 0px 0px;
    // width: 45%;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    text-transform: capitalize;
    margin: 35px 0px 20px 15px;
`;

const Text = styled.h6`
    margin: 5px 50px 10px 15px;
    line-height: 1.75;
`;

const DefText = styled.p`
    margin: 5px 50px 10px 15px;
    line-height: 1.75;
`;

const HR = styled.hr`
    width: 100%;
    height: 0.5px;
    opacity: 0.3;
    margin: 20px 0px;
`;

const Banner = ({title1, title2, title3, role1, role2, role3, date, overview, lang1, lang2}) => {
    return <Container >
        <Left>
            <Title>{title1}</Title>
            <DefText>{overview}</DefText>
            <Title>{title3}</Title>
            <Text>{lang1}</Text>
            <Text>{lang2}</Text>
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
    overview:"",
    title2:"role",
    role1:"Project Manager",
    role2:"Lead Developer",
    role3:"Lead UI Designer, User Research, Prototyping & Testing",
    date:"Jan—Feb 2021",
    title3:"language",
    lang1:"Create React App",
    lang2:"mySQL, Express"
};

export default Banner;