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

const SmallText = styled.div`
  font-size: 10px;
  padding-left: 2px;
`;

const AboutMeContent = ({ mode }) => {
  if (mode === "contact") {
    return (
      <>
        <div>Reach out on any of my socials, or by email.</div>
        <SmallText>
          (To do: eventually migrate this site to Next.js and build a conact
          form)
        </SmallText>
      </>
    );
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
