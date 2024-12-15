import styled from "styled-components";

import colors from "../../theme/colors";

const SideNav = (props) => {
  const { path, isDarkMode } = props;

  // only include paths after /work
    const pageTitle = path && path.slice(1);

  return (
    <>
      <Container {...props}>
        <PageTitleText {...props}>{pageTitle}</PageTitleText>
      </Container>
    </>
  );
};

export default SideNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isDarkMode ? colors.black : colors.beige};
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 100vh;
`;

const PageTitleText = styled.h4`
  transform: rotate(-90deg);
  font-family: "NewYork";
  text-transform: uppercase;
  color: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
`;