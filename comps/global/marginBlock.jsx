import styled from "styled-components";

import { useMediaQuery } from "react-responsive";

const MarginBlock = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return <Container isDesktopOrLaptop={isDesktopOrLaptop}></Container>;
};

export default MarginBlock;

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.isDesktopOrLaptop ? "48px" : "32px")};
`;
