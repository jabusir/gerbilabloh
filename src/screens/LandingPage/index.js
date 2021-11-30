import styled from "styled-components";
import AboutMeSection from "../../components/AboutMeSection";

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
  height: 75%;
  width: 100%;
`;

const LandingPage = () => {
  return (
    <Container>
      <HeroSection src="/mtn.jpeg" alt="mtn" />
      <AboutMeSection />
    </Container>
  );
};

export default LandingPage;
