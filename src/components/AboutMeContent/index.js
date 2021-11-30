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

const AboutMeContent = ({ mode }) => {
  if (mode === "skills") {
    return (
      <SkillsContainer>
        <SkillsHeader>Frontend</SkillsHeader>
        <SkillsIcons>
          <i class="fab fa-js fa-3x"></i>
          <img src="/ts.png" alt="TS" height="48px" width="48px" />
          <i class="fab fa-react fa-3x"></i>
        </SkillsIcons>
        <SkillsHeader>Backend</SkillsHeader>
        <SkillsIcons>
          <i class="fab fa-node-js fa-3x"></i>
        </SkillsIcons>
        <SkillsHeader>Dev Ops</SkillsHeader>
        <SkillsIcons>
          <i class="fab fa-docker fa-3x"></i>
        </SkillsIcons>
      </SkillsContainer>
    );
  }
  if (mode === "contact") {
    return <p>Contact</p>;
  }
  return (
    <>
      <Text>
        People across the www call me Jejo. I'm currently working fulltime as a
        full stack developer at Cisco.
      </Text>
      <Text>
        When I'm not doing that, I'm looking for exciting ventures, communities,
        and creatives to work with.
      </Text>
    </>
  );
};

export default AboutMeContent;
