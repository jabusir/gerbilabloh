import styled from "styled-components";
import AboutMeSection from "../../components/AboutMeSection";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <Container>
      <AboutMeSection />
    </Container>
  );
};

export default LandingPage;
