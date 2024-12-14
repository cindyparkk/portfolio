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
  const path = usePathname();

  return (
    <>
      <PageHead />
      {path !== "/" && <Header path={path} />}
      <Page isBorder={isBorder}>{pageContent}</Page>
      <SideNav path={path} />
      <RightBar />
      <Footer />
    </>
  );
};

export default PageLayout;

const RightBar = styled.div`
  background-color: ${colors.beige};
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
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.isBorder && `1px solid ${colors.black}`};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
`;
