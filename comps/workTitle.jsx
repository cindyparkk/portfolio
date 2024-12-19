import styled from "styled-components";
import { colors } from "../theme";
import { ReactComponent as LockIcon } from "../public/icons/lock-icon.svg";

const WorkTitle = (props) => {
  const { title, isLocked, dateRange, onClick } = props;
  return (
    <>
      <Container>
        <DateBox {...props}>
          {isLocked ? <LockIcon /> : <div />}
          <h6>{dateRange}</h6>
        </DateBox>
        <h1 onClick={onClick}>{title}</h1>
      </Container>
    </>
  );
};

export default WorkTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  & > h1 {
    text-transform: uppercase;
  }

  &:hover {
    & > h1 {
      cursor: pointer;
      transform: skew(-5deg) translate(15px);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const DateBox = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 10px;
  & > h6 {
    text-transform: uppercase;
  }
  & > svg {
    path {
      fill: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
    }
  }
`;
