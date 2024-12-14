import "./app.scss";
import { useState } from "react";
import {  usePathname } from "next/navigation";
import styled from "styled-components";
// comps
import PageHead from "../comps/global/pageHead";
import Header from "../comps/global/header";
import Footer from "../comps/global/footer";
import SideNav from "../comps/global/sideNav";

import { colors } from "../theme";

function MyApp({ Component, pageProps }) {
  const path = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <PageHead />
      {path === "/" ? (
        <BlankHeader isDarkMode={isDarkMode} />
      ) : (
        <Header path={path} isDarkMode={isDarkMode} />
      )}
      <Page isDarkMode={isDarkMode} isBorder={!path.includes("/work")}>
        <Component {...pageProps} isDarkMode={isDarkMode} />
      </Page>
      <SideNav path={path} isDarkMode={isDarkMode} />
      <RightBar isDarkMode={isDarkMode} />
      <Footer
        isDarkMode={isDarkMode}
        onSetDarkMode={() => setIsDarkMode((state) => !state)}
      />
    </>
  );
}

export default MyApp;

const BlankHeader = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  position: absolute;
  top: 0;
  height: 60px;
  width: 100vw;
`;

const RightBar = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 100vh;
`;

const Page = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  bottom: 60px;
  right: 60px;
  z-index: 600;
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.isBorder && `1px solid`};
  border-color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
`;
