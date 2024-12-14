import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";
import colors from "../../theme/colors";
import { ReactComponent as LinkedInIcon } from "../../public/icons/linkedin-icon.svg";
import { ReactComponent as EmailIcon } from "../../public/icons/email-icon.svg";

const Footer = () => {
  const router = useRouter();
  return (
    <Container>
      <div></div>
      <div>
        <span>copyright &copy; CINDY PARK all rights reserved.</span>
      </div>
      <Icons>
        <EmailIcon onClick={() => router.push("mailto:contact@cindypark.ca")} />
        <Link
          href="https://www.linkedin.com/in/cindypark-profile/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </Icons>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.beige};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 15px;
  }

  @media (max-width: 1224px) {
    display: flex;
    flex-flow: column nowrap;
    h6 {
      margin: 10px 0px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding-right: 60px;

  & > svg {
    width: 30px;
    height: auto;
    cursor: pointer;
  }

  & > svg:first-child {
    margin-right: 15px;
  }

  & > svg:hover,
  a:hover {
    opacity: 0.75;
    cursor: pointer;
  }

  @media (max-width: 1224px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
