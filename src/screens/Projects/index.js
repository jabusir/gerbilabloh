import styled from "styled-components";
import ProjectWindow from "../../components/ProjectWindow";
import TrailingProject from "../../components/TrailingProject";
import Navbar from "../../components/Navbar";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;

const listOfProjets = [
  {
    title: "WTFCKJAY WORLD",
    website: "https://www.wtfckjay.world",
    projectImage: { src: "./assets/wtf-world.png", alt: "wtf-world" },
    desc: {
      partA: "E-commerce and gallery website done for photographer @wtfckjay",
      partB:
        "Based out of NYC, Jay specializes in capturing key cultural figures in their elements, through film photography.",
    },
    socialsObj: {
      ig: "wtfckjay",
      twitter: "wtfckjay",
    },
  },
  {
    title: "gabethedumbidiot",
    website: "https://www.gabethedumbidiot.com",
    projectImage: { src: "./assets/hotwings.gif", alt: "dumb-idiot" },
    desc: {
      partA: "Landing page work for Gabe (the dumb idiot)",
      partB:
        "The most entertaining streamer on Twitch.tv, and the most entertaining man in the world",
    },
    socialsObj: {
      ig: "gabethedumbidiot",
      twitter: "gabedumbidiot",
    },
  },
];

const Projects = (props) => {
  return (
    <>
      <Container>
        {listOfProjets.map(
          ({ title, website, projectImage, desc, socialsObj }) => (
            <ProjectWindow
              title={title}
              website={website}
              projectImage={projectImage}
              desc={desc}
              socialsObj={socialsObj}
            />
          )
        )}
        <TrailingProject />
      </Container>
      <Navbar />
    </>
  );
};
export default Projects;
