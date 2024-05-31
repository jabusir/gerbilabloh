import styled from "styled-components";
import ThreeText from "../../components/ThreeText";
import Navbar from "../../components/Navbar";
import Icons from "../../components/Icons";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  overflow: hidden;
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
      <Icons />
      <Navbar />
    </Container>
  );
};

export default LandingPage;
