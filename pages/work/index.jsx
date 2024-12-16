import styled from "styled-components";
import { useRouter } from "next/navigation";
import WorkTitle from "../../comps/workTitle";
// constants
import { defaultProjects, lockedProjects } from "../../constants/projects";

const Work = () => {
  const router = useRouter();
  return (
    <>
      <WorkPage>
        {defaultProjects?.length > 0 &&
          defaultProjects.map((item) => {
            return (
              <WorkTitle
                {...item}
                onClick={() => {
                  const pathname = `/work/${item.title}`;
                  return router.push(pathname);
                }}
              />
            );
          })}
      </WorkPage>
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
