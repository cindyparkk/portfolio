import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../theme/colors";

import Router from "next/router";
import { useMediaQuery } from "react-responsive";

function clicktoHome() {
  if (true) {
    Router.push("/");
  }
}

const Header = ({ onAbout, onContact }) => {
  // const [expanded, setExpanded] = useState(false);
  // const[selected, setSelected] = useState();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <HeaderBox>
      <MenuLogo onClick={clicktoHome}>
        <Logo src="/logo-new.svg" />
      </MenuLogo>
      {/* {isDesktopOrLaptop && <Menu /> }
            {isTabletOrMobile && <Burger />} */}
    </HeaderBox>
  );
};

Header.defaultProps = {};

export default Header;

const Container = styled.div`
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  width: 100%;
  max-height: 100px;
  background-color: #dad;
  // box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
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
  min-height: 75px;
  background-color: ${colors.beige};
  // box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  // add this when scrolled down
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
  cursor: pointer;
`;

const Logo = styled.img`
  max-width: 65px;
  height: auto;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;
