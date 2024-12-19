import "./app.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
// comps
import PageHead from "../comps/layout/pageHead";
import Header from "../comps/layout/header";
import Footer from "../comps/layout/footer";
import SideNav from "../comps/layout/sideNav";
// constans
import { colors } from "../theme";
import { pageRoutes } from "../routes/pages";

function MyApp({ Component, pageProps }) {
  const path = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pageHeadTitle = (pathname) => {
    let pageTitle = "";
    if (pathname !== "/") {
      pageRoutes.map((page) => {
        if (page.route === pathname) pageTitle = page.title;
      });
      return pageTitle;
    }
  };

  return (
    <>
      <PageHead title={pageHeadTitle(path)} />
      {path === "/" ? (
        <BlankHeader isDarkMode={isDarkMode} />
      ) : (
        <Header path={path} isDarkMode={isDarkMode} />
      )}
      <Page isDarkMode={isDarkMode} isBorder={!path.includes("/work/")}>
        <Component {...pageProps} isDarkMode={isDarkMode} />
      </Page>
      <SideNav
        path={path}
        isDarkMode={isDarkMode}
        isShowTitle={path.includes("/work/")}
      />
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
