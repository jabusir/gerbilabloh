import styled from "styled-components";
import { Panel } from "react95";
import "./Socials.css";

const Container = styled.div`
  display: flex;
  width: 97%;
  justify-content: space-evenly;
  position: absolute;
  bottom: 4px;
`;

const CustomPanel = styled(Panel)`
  padding: 2.5px 15px;
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

const Socials = ({ ig, twitter, project, mail }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${mail}`;
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
        {mail ? (
          <div>
            <CustomImage
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              onClick={handleEmailClick}
            />
          </div>
        ) : null}
      </CustomPanel>
    </Container>
  );
};

export default Socials;
