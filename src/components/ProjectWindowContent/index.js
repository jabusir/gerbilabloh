import styled from "styled-components";

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
          <a href="https://www.instagram.com/wtfckjay" target="_blank">
            @wtfckjay
          </a>
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
