import styled from "styled-components";
import AboutMeSection from "../../components/AboutMeSection";
import ThreeText from "../../components/ThreeText";
import Navbar from "../../components/Navbar";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const HeroSection = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const LandingPage = () => {
  return (
    <Container>
      <ThreeText />
      <HeroSection src="mtn.jpg" alt="mtn" />
      <AboutMeSection />
      <Navbar />
    </Container>
  );
};

export default LandingPage;
