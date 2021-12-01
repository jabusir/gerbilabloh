import styled from "styled-components";
import { Anchor } from "react95";
import Socials from "../Socials";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ProjectWindowContent = ({ mode }) => {
  if (mode === "desc") {
    return (
      <Container>
        <p style={{ marginBottom: "15px" }}>
          E-commerce and gallery website done for photographer
          <Anchor href="https://www.instagram.com/wtfckjay" target="_blank">
            @wtfckjay
          </Anchor>
        </p>
        <p>
          Based out of NYC, Jay specializes in capturing key cultural figures in
          their elements on film
        </p>
      </Container>
    );
  }
  if (mode === "socials") {
    return (
      <Container>
        <Socials ig="wtfckjay" twitter="wtfckjay" project={true} />
      </Container>
    );
  }
  return (
    <Container>
      <img
        src="/globe.png"
        alt="head-bust"
        width="200px"
        style={{ margin: "0 auto" }}
      />
    </Container>
  );
};

export default ProjectWindowContent;
