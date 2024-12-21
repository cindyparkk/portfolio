import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
// constants
import { projects } from "../../constants/projects";
import { colors } from "../../theme";
import { password } from "../../constants/importantKeys";
// comps
import GlobalInput from "../../comps/global/input";
import WorkTitle from "../../comps/workTitle";
import GlobalButton from "../../comps/global/button";
// icons
import { ReactComponent as LockedIcon } from "../../public/icons/lock-icon-big.svg";
import { ReactComponent as LeftIcon } from "../../public/icons/chevron-left-icon.svg";

const Work = (props) => {
  const { isDarkMode } = props;
  const [isOpenLockedPage, setIsOpenLockedPage] = useState(false);
  const [isOpenLockedProjects, setIsOpenLockedProjects] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const onChange = (name, value) => {
    setEnteredPassword(value);
  };

  const handleSubmit = () => {
    if (enteredPassword === password) {
      setIsOpenLockedPage(false);
      setIsOpenLockedProjects(true);
    } else if (enteredPassword !== password) {
      setIsError(true);
    }
    setEnteredPassword("");
  };

  return (
    <>
      {isOpenLockedPage ? (
        <LockedWorkPage {...props}>
          <LockedIcon />
          <h3>This content is confidential.</h3>
          <h6>To view the recent projects, please enter the password.</h6>
          <InputBox>
            <GlobalInput
              {...props}
              placeholder="Enter password"
              type="password"
              isDarkMode={isDarkMode}
              error={isError}
              onChange={onChange}
              value={enteredPassword}
            />
            <GlobalButton
              text="submit"
              isDark={!isError}
              isError={isError}
              onClick={handleSubmit}
            />
          </InputBox>
          {isError && <span>The entered password is incorrect.</span>}
          <BackButtonBox
            onClick={() => {
              setIsOpenLockedPage(false);
              setIsError(false);
              setEnteredPassword("");
            }}
            {...props}
          >
            <LeftIcon />
            <p>Back to list of projects</p>
          </BackButtonBox>
        </LockedWorkPage>
      ) : (
        <WorkPage>
          {projects.slice(isOpenLockedProjects && 1).map((item, index) => {
            return (
              <>
                {item.isLocked && !isOpenLockedProjects ? (
                  <></>
                ) : (
                  <WorkTitle
                    title={item.title}
                    dateRange={item.dateRange}
                    isLocked={!isOpenLockedProjects && index === 0}
                    {...props}
                    onClick={() => {
                      if (index === 0 && item.title === "recent work") {
                        setIsOpenLockedPage(true);
                      } else {
                        //   const pathname = `/work/${item.title}`;
                        //   return router.push(pathname);
                      }
                    }}
                  />
                )}
              </>
            );
          })}
        </WorkPage>
      )}
    </>
  );
};

export default Work;

const WorkPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

const LockedWorkPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > svg {
    path {
      stroke: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
    }
  }
  & > * {
    margin-bottom: 15px;
  }
  & > span {
    margin-top: -10px;
    color: ${colors.red};
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: -30px;
  & > button {
    position: relative;
    left: -50px;
  }
`;

const BackButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    margin: 0;
  }
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid
      ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
  }
  & > svg {
    path {
      fill: ${(props) => (props.isDarkMode ? colors.beige : colors.black)};
    }
  }
`;
