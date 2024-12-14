import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

// comps
import PageLayout from "../comps/global/pageLayout";
// constants
import colors from "../theme/colors";
import { pageRoutes } from "../routes/pages";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <PageLayout
        isBorder
        pageContent={
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
              {pageRoutes.slice(1).map((item) => {
                return (
                  <>
                    <PageName
                      onClick={() => {
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
        }
      />
    </>
  );
}

const HomePage = styled.div`
  /* background-color: #dad; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

const PageList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* background-color: #dad; */
`;

const PageName = styled.h1`
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    border-bottom: 2.5px solid ${colors.black};
    transition: border 0.2s ease;
    /* text-decoration: underline; */
  }
`;
