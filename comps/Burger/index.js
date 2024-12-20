import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import RightNav from "comps/RightNav";

import Router from 'next/router';

const Container = styled.div`
    // & > img {
    //     width: 30px;
    //     height: auto;
    //     cursor: pointer;
    //     margin-right: 20px;
    //     opacity: ${({ open }) => open ? 0 : 1};
    // }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#272834'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({}) => {
    const [open, setOpen] = useState(false);

    return <Container>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
        <RightNav open={open}/>
    </Container>
};

Burger.defaultProps = {

}

export default Burger;