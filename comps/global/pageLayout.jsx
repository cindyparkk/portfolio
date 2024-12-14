import { useState } from "react";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

// comps
import PageHead from "./pageHead";
import Header from "./header";
import Footer from "./footer";
import SideNav from "./sideNav";
// constants
import colors from "../../theme/colors";

const PageLayout = (props) => {
  const { pageContent, isBorder } = props;

  const [isDarkMode, setIsDarkMode] = useState(false);
  const path = usePathname();

  return (
    <>
      <PageHead />
      {path === "/" ? (
        <BlankHeader isDarkMode={isDarkMode} />
      ) : (
        <Header path={path} isDarkMode={isDarkMode} />
      )}
      <Page isBorder={isBorder} isDarkMode={isDarkMode}>
        {pageContent}
      </Page>
      <SideNav path={path} isDarkMode={isDarkMode} />
      <RightBar isDarkMode={isDarkMode} />
      {/* pass out isDarkMode from footer */}
      <Footer
        isDarkMode={isDarkMode}
        onSetDarkMode={() => setIsDarkMode((state) => !state)}
      />
    </>
  );
};

export default PageLayout;

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
