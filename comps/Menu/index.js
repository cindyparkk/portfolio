import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Router from 'next/router';

const Container = styled.div`
    // width: 100%;
    display: flex;
    align-items: flex-start;
`;

const MenuItem = styled.h2`
    margin: 0px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    // font-size: ${props=>props.expanded ? "24px" : "26px"}

    &:hover {
        color: #b0b0b0;
        transition: color 0.3s;
    }
`;

const Icon = styled.svg`
    max-width: 20px;
    max-height: 20px;
    margin: 5px 20px 0px -10px;
    transform:${props=>props.expanded ? "rotate(-180deg)" : "rotate(0deg)"};
    transition: 0.8s;
    background-color: #000;
    -webkit-mask: url(/down.svg) no-repeat center;
    mask: url(/down.svg) no-repeat center;

    &:hover {
        background-color: #b0b0b0;
        transition: background-color 0.3s;
    }
`;

const Expand = styled.div`
    width: 190px;
    height: ${props=>props.expanded ? "216px" : "0px"};
    background-color: #fff;
    box-shadow: 0px 4px 25px 2px rgba(0, 0, 0, 0.2);
    z-index: 5;
    flex-direction: column;
    margin-top: 40px;
    display:${props=>props.expanded ? "inline-flex" : "none"};
    opacity:${props=>props.expanded ? 1 : 0};
    transition: height 0.5s;
    position: absolute;

    &:hover {
        // display:${props=>props.expanded ? "inline-flex" : "none"};
    }
`;

const Option = styled.div`
    min-height: 72px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.selected ? "#272834" : "#fff"};
    padding: 0px 15px;
    cursor: pointer;
    color: ${props=>props.selected ? "#fff" : "#272834"};

    &:hover {
        background-color: #272834;
        color: #fff;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExpandBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        color: #b0b0b0;
        transition: color 0.3s;
    }
`;

function clicktoAbout() {
    if (true){
      Router.push("/about");
    }
  }
  
  function clicktoContact() {
    if (true){
      Router.push("/contact");
    }
  }

const Menu = ({onAbout, onContact}) => {
    const [expanded, setExpanded] = useState(false);
    const[selected, setSelected] = useState();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return <Container>
            <Box>
                <ExpandBox expanded={expanded} onClick={()=>{setExpanded(!expanded);}}>
                    <MenuItem>
                        work</MenuItem>
                    <Icon expanded={expanded} src="/down.svg"/>
                </ExpandBox>
                {/* <MenuItem expanded={expanded} onClick={()=>{setExpanded(!expanded);}}>
                    work<Icon expanded={expanded} src="/down.svg"/>
                </MenuItem> */}
                <Expand expanded={expanded}>
                    <Option selected={selected === 1} onClick={() => {
                    setSelected(1);
                    if(true){
                        Router.push("/medtrack");
                      }
                    }}>
                        <h2>medTrack</h2>
                    </Option>
                    <Option selected={selected === 2} onClick={() => {
                    setSelected(2);
                    if(true){
                        Router.push("/petsave");
                      }
                    }}>
                        <h2>petsave</h2>
                    </Option>
                    <Option elected={selected === 3} onClick={() => {
                    setSelected(3);
                    if(true){
                        Router.push("/campused");
                      }
                    }}>
                        <h2>campused</h2>
                    </Option>
                    <Option elected={selected === 4} onClick={() => {
                    setSelected(4);
                    if(true){
                        Router.push("/adogpt");
                      }
                    }}>
                        <h2>adog'pt</h2>
                    </Option>
                </Expand>
            </Box>
            <MenuItem onClick={clicktoAbout}>about</MenuItem>
            <MenuItem onClick={clicktoContact}>contact</MenuItem>
    </Container>
}

Menu.defaultProps = {
    onAbout:()=>{},
    onContact:()=>{}
};

export default Menu;