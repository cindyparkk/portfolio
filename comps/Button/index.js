import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    min-width: 120px;
`;

const ButtonBox = styled.button`
    min-height: 60px;
    width: 40%;
    background-color: #272834;
    color: #fff;
    border-radius: 2px;
    border: none;
    font-family: "GMarketSans";
    font-size: 18px;
    text-transform: uppercase;
`;


const Button = ({title}) => {
    return <Container>
        <ButtonBox>{title}</ButtonBox>
    </Container>
}

Button.defaultProps = {
    title: "submit"
};

export default Button;