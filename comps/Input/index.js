import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';

import Router from 'next/router';

const Container = styled.div`
    // background-color: #dad;
    width: 100%;
`;

const Label = styled.h4``;

const InputBox = styled.input`
    width: 60%;
    // max-width: ${props=>props.width ? props.width : "300px"};
    min-height: 40px;
    background-color: #fff;
    // border: 1px solid #272834;
    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    font-family: "Lato";
    font-size: 18px;
`;

const Textarea = styled.textarea`
    min-width: 80%;
    // max-width: ${props=>props.width ? props.width : "300px"};
    min-height: 100px;
    background-color: #fff;
    // border: 1px solid #272834;
    border: none;
    box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
    font-family: "Lato";
    font-size: 16px;
`;

const Input = ({}) => {
    return <Container>
        <Label>name</Label>
        <InputBox type="text"/>

        <Label>email</Label>
        <InputBox type="text"/>

        <Label>message</Label>
        <Textarea/>
    </Container>
}

Input.defaultProps = {

};

export default Input;