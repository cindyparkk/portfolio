import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

// constants
import colors from "../../theme/colors";
import { pageRoutes } from "../../routes/pages";

import { ReactComponent as Logo } from "../../public/logo-2024.svg";

const Header = (props) => {
  const { path, isDarkMode } = props;
  const router = useRouter();

  const onRedirectPage = (route) => {
    router.push(route, { scroll: true });
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <HeaderBox {...props}>
      <LogoBox {...props}>
        <Logo onClick={() => onRedirectPage(pageRoutes[0].route)} />
        <HeaderText
          {...props}
          style={{ textTransform: "uppercase" }}
          onClick={() => onRedirectPage(pageRoutes[0].route)}
        >
          {pageRoutes[0].title}
        </HeaderText>
      </LogoBox>
      <NavBox>
        {pageRoutes.slice(1, 4).map((item) => {
          return (
            <>
              <HeaderText
                key={item.id}
                {...props}
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
      </NavBox>
    </HeaderBox>
  );
};

Header.defaultProps = {};

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  transition: 0.2s;
  z-index: 20;
  padding: 0px;
`;

const LogoBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  padding-left: 60px;
  & > svg {
    cursor: pointer;
    max-width: 50px;
    height: auto;
    margin-right: 10px;
    path {
      fill: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
    }

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  transition: 0.5s all;
`;

const NavBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  transition: 0.5s all;
  padding-right: 60px;
`;

const HeaderText = styled.h5`
  color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
  position: relative;
  display: block;
  cursor: pointer;
  text-transform: lowercase;
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

// const Logo = styled.img`
//   cursor: pointer;
//   max-width: 50px;
//   height: auto;
//   margin-right: 10px;

//   &:hover {
//     transform: scale(1.1);
//     transition: transform 0.5s;
//   }
// `;
