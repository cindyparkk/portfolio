import styled from "styled-components";

const WorkExp = (props) => {
  const { dateRange, jobTitle, companyName, location, description } = props;
  return (
    <>
      <Container>
        <DateRange>{dateRange}</DateRange>
        <ExpBox>
          <h6>{jobTitle}</h6>
          <p>
            <b>{companyName}</b>
          </p>
          <p style={{ textTransform: "uppercase" }}>{location}</p>
          {description?.length > 1 &&
            description.map((item) => {
              return <p style={{ margin: "15px 0px" }}>- {item}</p>;
            })}
        </ExpBox>
      </Container>
    </>
  );
};

export default WorkExp;

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const DateRange = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  width: 100%;
  margin-top: 5px;
  padding-right: 10px;
  text-align: right;
`;

const ExpBox = styled.div`
  & > h6 {
    font-weight: 900;
    font-family: "Inter-Bold";
  }
  & > p {
    font-size: 14px;
    margin: 3px 0px;
    line-height: 1.25;
  }
`;
