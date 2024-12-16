import React, { useState, useEffect } from "react";
import styled from "styled-components";
// comps
import GlobalButton from "../comps/button";
import WorkExp from "../comps/workExp";
// icons
import { ReactComponent as DownloadIcon } from "../public/icons/download-icon.svg";
// constants
import { colors } from "../theme";
import { frontEndSkills, designSkills, softSkills } from "../constants/skills";
import { workExperiences } from "../constants/workExperiences";

export default function About(props) {
  return (
    <>
      <AboutPage>
        <FlexBox style={{ padding: "60px 0" }}>
          <PortraitBox>
            <Portrait src="/portrait-image.png" />
          </PortraitBox>
          <InfoBox>
            <h2>
              Hi! I'm Cindy;
              <br />I code and design.
            </h2>
            <p>
              I'm passionate about making solutions for people to make their
              lives easier in the digital world. Always thriving for
              user-centric designs that are not only accessible, but also
              reusable and scalable. I also find joy in looking for ways to make
              effective communication both online and in person! When in doubt,
              just ask—is my motto.
            </p>
            <p>
              I was born in Seoul sometime in the late 20th century and moved to
              Vancouver when I was still too small for rollercoasters. So I got
              to spend all of my childhood, youth, and early adulthood in one
              rainy city in Canada. Fast-forward to today, I’m back in Korea!
            </p>
            <p>
              Back in 2019, I found my passion for web design “codin (not a
              concrete concept at the time) and pursued my studies in front-end
              development / UIUX design. Immediately after achieving the degree,
              I’ve had the privilege of building data-heavy software for the
              public post-secondary institution where I finished my studies.
            </p>
            <p>
              When I’m not in front of the computer, you can catch me at the
              gym, reading, or devouring food with the chosen ones.
            </p>
            <FunFact {...props}>
              <b>
                Fun fact: I was a lifeguard / swimming instructor for 5 years!
              </b>
            </FunFact>
            <div style={{ marginTop: "10px" }}>
              <GlobalButton isDark text={"resume"} endIcon={<DownloadIcon />} />
            </div>
          </InfoBox>
        </FlexBox>
        <FlexBox style={{ padding: "60px 20px" }}>
          <FlexBox style={{ flexDirection: "column", flex: 1 }}>
            <h2>My career so far</h2>
            <FlexBox style={{ width: "80%", flexWrap: "wrap" }}>
              {frontEndSkills.map((item) => {
                {
                  return <Skill {...props}>{item.title}</Skill>;
                }
              })}
              {designSkills.map((item) => {
                {
                  return <Skill {...props}>{item.title}</Skill>;
                }
              })}
              {softSkills.map((item) => {
                {
                  return <Skill {...props}>{item.title}</Skill>;
                }
              })}
            </FlexBox>
          </FlexBox>
          <FlexBox style={{ flexDirection: "column", flex: 1 }}>
            {workExperiences.map((item) => {
              return <WorkExp {...item} />;
            })}
          </FlexBox>
        </FlexBox>
      </AboutPage>
    </>
  );
}

const AboutPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > h2 {
    margin-bottom: 10px;
  }
`;

const PortraitBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  padding-right: 2em;
  /* margin-top: 8em; */
`;

const Portrait = styled.img`
  width: 80%;
  border-radius: 50%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  padding-right: 50px;
  & > p {
    font-size: 14px;
    line-height: 1.5;
    margin: 8px 0px;
  }
`;

const FunFact = styled.p`
  text-decoration: none;
  display: block;
  font-weight: bold;
  position: relative;
  z-index: 1;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${(props) =>
    props.isDarkMode
      ? `linear-gradient(
    to right,
    ${colors.red},
    ${colors.red} 50%,
    ${colors.beige} 50%
  )`
      : `linear-gradient(
    to right,
    ${colors.red},
    ${colors.red} 50%,
    ${colors.black} 50%
  )`};
  background-size: 200% 100%;
  background-position: -100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    /* cursor: url("/lifeguard.png"), auto; */
    cursor: default;
    background-position: 0%;
    &:before {
      width: 100%;
    }
  }
`;

const Skill = styled.span`
  text-transform: uppercase;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid
    ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  margin-right: 7px;
  margin-top: 7px;
  max-height: 27px;

  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? colors.beige : colors.black};
    color: ${(props) => (props.isDarkMode ? colors.black : colors.beige)};
    cursor: default;
    transition: all 0.2s ease-in-out;
  }
`;
