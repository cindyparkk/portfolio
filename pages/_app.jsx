import "./app.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
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

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

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
      <Page isDarkMode={isDarkMode} padding={path.includes("/work/") && "0"}>
        <Component
          {...pageProps}
          isDarkMode={isDarkMode}
          isDesktopOrLaptop={isDesktopOrLaptop}
          isTablet={isTablet}
          isMobile={isMobile}
        />
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
  z-index: 50;
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
`;
