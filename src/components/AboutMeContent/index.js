import styled from "styled-components";

const Text = styled.p`
  margin: 7px auto;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkillsHeader = styled.p``;
const SkillsIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const JSContainer = styled.div`
  height: 48px;
  display: flex;
`;

const AboutMeContent = ({ mode }) => {
  if (mode === "skills") {
    return (
      <SkillsContainer>
        <SkillsHeader>Frontend</SkillsHeader>
        <SkillsIcons>
          <JSContainer>
            <i
              className="fab fa-js fa-3x"
              style={{
                color: "#f0db4f",
                background: "#323330",
                height: "48px",
              }}
            ></i>
          </JSContainer>

          <img src="/ts.png" alt="TS" height="48px" width="48px" />
          <i
            className="fab fa-react fa-3x"
            style={{ color: "#61DBFB", background: "black" }}
          ></i>
        </SkillsIcons>
        <SkillsHeader>Backend</SkillsHeader>
        <SkillsIcons>
          <i className="fab fa-node-js fa-3x" style={{ color: "#3c873a" }}></i>
        </SkillsIcons>
        <SkillsHeader>Dev Ops</SkillsHeader>
        <SkillsIcons>
          <i className="fab fa-docker fa-3x" style={{ color: "#0db7ed" }}></i>
        </SkillsIcons>
      </SkillsContainer>
    );
  }
  if (mode === "contact") {
    return <></>;
  }
  return (
    <>
      <Text>
        People online call me Jejo. I'm currently working fulltime as a full
        stack developer at Cisco.
      </Text>
      <Text>
        When I'm not doing that, I'm looking for exciting ventures, communities,
        and creatives to work with.
      </Text>
    </>
  );
};

export default AboutMeContent;
