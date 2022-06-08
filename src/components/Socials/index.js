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

const Socials = ({ ig, twitter, project }) => {
  return (
    <Container>
      <CustomPanel variant="well">
        <a
          href={`https://instagram.com/${ig}`}
          target="_blank"
          rel="noreferrer"
        >
          <IGContainer>
            <i className="fab fa-instagram fa-2x"></i>
          </IGContainer>
        </a>
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>

        {!project && (
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&view=cm&shva=1&su&to=jejo@gerbilabloh.com&tf=1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope-square fa-2x"></i>
          </a>
        )}
      </CustomPanel>
    </Container>
  );
};

export default Socials;
