import styled from "styled-components";
import ProjectWindow from "../../components/ProjectWindow";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Projects = () => {
  return (
    <Container>
      <ProjectWindow />
    </Container>
  );
};
export default Projects;
