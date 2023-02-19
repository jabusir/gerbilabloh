import styled from "styled-components";
import { Panel } from "react95";
import "./Socials.css";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const CustomPanel = styled(Panel)`
  padding: 0 15px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

const IGContainer = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const CustomImage = styled.img`
  max-width: 30px;
`;

const Socials = ({ ig, twitter, project }) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jabusir@gmail.com";
  };
  return (
    <Container>
      <CustomPanel variant="well">
        <a
          href={`https://instagram.com/${ig}`}
          target="_blank"
          rel="noreferrer"
        >
          <IGContainer>
            <CustomImage src="./assets/ig.png" />
          </IGContainer>
        </a>
        <div>
          <CustomImage
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            onClick={handleEmailClick}
          />
        </div>
      </CustomPanel>
    </Container>
  );
};

export default Socials;
