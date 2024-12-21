import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GlobalButton from "../global/button";
// constants
import colors from "../../theme/colors";
// icons
import { ReactComponent as LinkedInIcon } from "../../public/icons/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../../public/icons/email-icon.svg";
import { ReactComponent as MoonIcon } from "../../public/icons/moon-icon.svg";
import { ReactComponent as SunIcon } from "../../public/icons/sun-icon.svg";

const Footer = (props) => {
  const { onSetDarkMode, isDarkMode, isMobile } = props;
  const router = useRouter();
  return (
    <Container {...props}>
      <ButtonBox {...props}>
        {!isMobile && (
          <GlobalButton
            text={isDarkMode ? "light mode" : "dark mode"}
            startIcon={isDarkMode ? <SunIcon /> : <MoonIcon />}
            onClick={() => onSetDarkMode()}
            isDark={isDarkMode}
          />
        )}
      </ButtonBox>
      <div>
        <span>copyright &copy; CINDY PARK all rights reserved.</span>
      </div>

      <Icons {...props}>
        {!isMobile && (
          <>
            <Link href="mailto:contact@cindypark.ca">
              <EmailIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cindypark-profile/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </>
        )}
      </Icons>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: ${(props) =>
    props.isDesktopOrLaptop ? "60px" : props.isMobile ? "30px" : "50px"};
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) =>
    props.isDesktopOrLaptop ? "60px" : props.isMobile ? "30px" : "50px"};
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${(props) =>
    props.isDesktopOrLaptop ? "60px" : props.isMobile ? "30px" : "50px"};

  & > a {
    width: 30px;
    height: auto;
    cursor: pointer;

    path {
      fill: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
    }
  }

  & > a:first-child {
    margin-right: 15px;
  }

  & > a:hover {
    opacity: 0.75;
    cursor: pointer;
  }

  @media (max-width: 1224px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
