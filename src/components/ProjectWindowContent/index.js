import styled from "styled-components";
import { Anchor } from "react95";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectWindowContent = ({ mode }) => {
  if (mode === "desc") {
    return (
      <Container>
        <p>
          This project was great and awesome to work on for photographer
          <Anchor href="https://www.instagram.com/wtfckjay" target="_blank">
            @wtfckjay
          </Anchor>
          . It was really cool and awesome and great. I want to do more like
          this soon.
        </p>
      </Container>
    );
  }
  if (mode === "socials") {
    return (
      <Container>
        <p>socials</p>
      </Container>
    );
  }
  return (
    <Container>
      <img src="/globe.png" alt="head-bust" width="200px" />
    </Container>
  );
};

export default ProjectWindowContent;
