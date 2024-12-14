import styled from "styled-components";

import colors from "../../theme/colors";

const SideNav = (props) => {
  const { path } = props;

    const pageTitle = path && path.slice(1);

  return (
    <>
      <Container>
        <PageTitleText>{pageTitle}</PageTitleText>
      </Container>
    </>
  );
};

export default SideNav;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.beige};
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
`;
