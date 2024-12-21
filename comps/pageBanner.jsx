import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { colors } from "../theme";

const PageBanner = (props) => {
  const { color, title } = props;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <Container {...props}>
      <h1>{title}</h1>
    </Container>
  );
};

export default PageBanner;

const Container = styled.div`
  @keyframes text-appear {
    to {
      bottom: 15vh;
      opacity: 1;
    }
  }
  @keyframes banner-appear {
    to {
      top: 0px;
      opacity: 1;
    }
  }
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${(props) => (props.color ? props.color : colors.black)};
  color: ${colors.beige};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -100%;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: banner-appear 1s ease forwards;
  & > h1 {
    position: fixed;
    bottom: -100%;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: text-appear 1s ease forwards;
    animation-delay: 0.5s;
    text-align: center;
    font-size: 200px;
    margin: 0;
  }
`;
