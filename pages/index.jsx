import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

// constants
import colors from "../theme/colors";
import { pageRoutes } from "../routes/pages";

export default function Home(props) {
  const router = useRouter();

  return (
    <>
      <HomePage>
        <TopBox>
          <Name>CINDY PARK</Name>
          <h4>Front-end Developer & UIUX Designer</h4>
          <h6>
            <i>Based in Seoul, Korea / Established in Vancouver, Canada</i>
            <br></br>I build pixel-perfect, accessible interfaces and have a
            passion for intuitively implemented UX.
          </h6>
        </TopBox>
        <PageList>
          {pageRoutes.slice(1, 4).map((item) => {
            return (
              <>
                <PageName
                  onClick={() => {
                    // router.push(item.route, { scroll: true });
                    router.push(item.route);
                  }}
                >
                  {item.title}
                </PageName>
              </>
            );
          })}
        </PageList>
      </HomePage>
    </>
  );
}

const HomePage = styled.div`
  @keyframes page-appear {
    to {
      bottom: 0px;
      opacity: 1;
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  bottom: -100%;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: page-appear 0.8s ease forwards;
`;

const TopBox = styled.div`
  & > * {
    margin-bottom: 10px;
  }
  & > h6 {
    line-height: 1.5;
  }
`;

const Name = styled.h1`
  font-size: 10em;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const PageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* @keyframes text-appear {
    to {
      bottom: 0px;
      opacity: 1;
    }
  }
  position: fixed;
  bottom: -100%;
  opacity: 0;
  right: 0px;
  animation: text-appear 1s ease forwards;
  animation-delay: 0.5s; */
`;

const PageName = styled.h1`
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    /* border-bottom: 2.5px solid ${colors.black}; */
    /* text-decoration: underline; */
    transform: skew(-5deg) translate(15px);
    transition: transform 0.2s ease-in-out;
  }
`;
