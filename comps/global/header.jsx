import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

import Router from "next/router";
import { useMediaQuery } from "react-responsive";
// constants
import colors from "../../theme/colors";
import { pageRoutes } from "../../routes/pages";

function clicktoHome() {
  if (true) {
    Router.push("/");
  }
}

const Header = ({ onAbout, onContact }) => {
  const router = useRouter();
  // const [expanded, setExpanded] = useState(false);
  // const[selected, setSelected] = useState();

  const onRedirectPage = (route) => {
    router.push(route);
  };

  const path = usePathname();

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <HeaderBox>
      <FlexBox flex={6} justify={"flex-start"}>
        <Logo src="/logo-new.svg" onClick={clicktoHome} />
        <HeaderText onClick={() => onRedirectPage(pageRoutes[0].route)}>
          {pageRoutes[0].title}
        </HeaderText>
      </FlexBox>
      {/* {isDesktopOrLaptop && <Menu /> }
            {isTabletOrMobile && <Burger />} */}
      <FlexBox flex={2}>
        {pageRoutes.slice(1).map((item) => {
          return (
            <>
              <HeaderText
                active={item.route === path}
                onClick={() => {
                  onRedirectPage(item.route);
                }}
              >
                {item.title}
              </HeaderText>
            </>
          );
        })}
      </FlexBox>
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
  max-height: 75px;
  background-color: ${colors.beige};
  border-bottom: 1px solid #000;
  // add this when scrolled down
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: 0.2s;
  z-index: 1;
  padding: 0px;
`;

const FlexBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.justify ? props.justify : `space-between`};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  transition: 0.5s all;
`;

const HeaderText = styled.h5`
  color: ${colors.black};
  position: relative;
  display: block;
  cursor: pointer;
  text-decoration: ${(props) => props.active && `line-through`};

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    top: 50%;
    margin-top: -0.5px;
    background: ${colors.black};
  }

  &:before {
    left: -2.5px;
  }
  &:after {
    right: 2.5px;
    background: ${colors.black};
    transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:before {
    background: ${colors.black};
    width: 100%;
    transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover:after {
    background: transparent;
    width: 100%;
    transition: 0s;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  max-width: 50px;
  height: auto;
  margin-right: 10px;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
`;
