import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
// constants
import { defaultProjects, lockedProjects } from "../../constants/projects";
import { colors } from "../../theme";
// comps
import GlobalInput from "../../comps/global/input";
import WorkTitle from "../../comps/workTitle";
// icons
import { ReactComponent as LockedIcon } from "../../public/icons/lock-icon-big.svg";
import { ReactComponent as LeftIcon } from "../../public/icons/chevron-left-icon.svg";

const Work = (props) => {
  const [isOpenLockedPage, setIsOpenLockedPage] = useState(false);
  const [isOpenLockedProjects, setIsOpenLockedProjects] = useState(false);
  const router = useRouter();
  return (
    <>
      {isOpenLockedPage ? (
        <LockedWorkPage {...props}>
          <LockedIcon />
          <h3>This page is protected.</h3>
          <h6>
            To take a look at the recent project, please enter the password.
          </h6>
          <GlobalInput />
          <BackButtonBox onClick={() => setIsOpenLockedPage(false)} {...props}>
            <LeftIcon />
            <p>Back to list of projects</p>
          </BackButtonBox>
        </LockedWorkPage>
      ) : (
        <WorkPage>
          {defaultProjects?.length > 0 &&
            defaultProjects.map((item, index) => {
              return (
                <WorkTitle
                  {...item}
                  {...props}
                  onClick={() => {
                    if (index === 0) {
                      setIsOpenLockedPage(true);
                    } else {
                    //   const pathname = `/work/${item.title}`;
                    //   return router.push(pathname);
                    }
                  }}
                />
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
