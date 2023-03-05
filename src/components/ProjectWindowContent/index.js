import styled from "styled-components";
import { Anchor } from "react95";
import Socials from "../Socials";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectWindowContent = ({ mode, desc, projectImage, socialsObj }) => {
  if (mode === "desc") {
    return (
      <Container>
        <p style={{ marginBottom: "15px" }}>{desc.partA} </p>
        <p>{desc.partB}</p>
      </Container>
    );
  }
  if (mode === "socials") {
    return (
      <Container>
        Catch them on their site and socials
        <SocialsContainer>
          <Socials
            ig={socialsObj.ig}
            twitter={socialsObj.twitter}
            project={true}
          />
        </SocialsContainer>
      </Container>
    );
  }
  return (
    <Container>
      <img
        src={projectImage.src}
        alt={projectImage.alt}
        width="200px"
        style={{ margin: "0 auto" }}
      />
    </Container>
  );
};

export default ProjectWindowContent;
