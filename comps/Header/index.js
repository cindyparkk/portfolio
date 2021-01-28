import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Menu from "comps/Menu";

const Container = styled.div`
    // width: 100%;
    // display: flex;
    // flex-direction: column;
    width: 100%;
    max-height: 100px;
    background-color: #fff;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    transition: 0.2s;
    z-index: 1;
    box-sizing: border-box;
`;

const HeaderBox = styled.div`
    width: 100%;
    min-height: 100px;
    background-color: #fff;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    transition: 0.2s;
    z-index: 1;
`;

const MenuLogo = styled.div`
    padding-left: 2%;    
    flex: 4;
`;

const Logo = styled.img`
    max-width: 85px;
    height: auto;
`;


const Header = ({onAbout, onContact}) => {
    // const [expanded, setExpanded] = useState(false);
    // const[selected, setSelected] = useState();

    return <Container>
        <HeaderBox>
            <MenuLogo>
                <Logo src="/logo2.svg" />
            </MenuLogo>
            <Menu />
            {/* <Box>
            <MenuItem onClick={()=>{setExpanded(!expanded);}}>
                work<Icon expanded={expanded} src="/down.svg"/>
            </MenuItem>
            </Box>
            <MenuItem onClick={onAbout}>about</MenuItem>
            <MenuItem onClick={onContact}>contact</MenuItem> */}
        </HeaderBox>
    </Container>
}

Header.defaultProps = {
};

export default Header;