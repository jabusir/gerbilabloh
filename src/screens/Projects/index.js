import styled from "styled-components";
import ProjectWindow from "../../components/ProjectWindow";
import TrailingProject from "../../components/TrailingProject";
import Navbar from "../../components/Navbar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

const Projects = (props) => {
  return (
    <Container>
      <ProjectWindow />
      <TrailingProject />
      <Navbar />
    </Container>
  );
};
export default Projects;
