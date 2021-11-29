import { useState, useEffect } from "react";
import {
  Window,
  WindowHeader,
  WindowContent,
  Toolbar,
  Button,
  Panel,
} from "react95";
import styled from "styled-components";
import AboutMeContent from "../AboutMeContent";

const Container = styled.div`
  display: flex;
  margin: 50px auto 0 auto;
  justify-content: center;
  width: 300px;
`;

const CustomWindow = styled(Window)`
  display: ${(props) => (props.closed ? "none" : "inline")};
`;

const CustomWindowHeader = styled(WindowHeader)`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const AboutMeSection = () => {
  const [windowClosed, setWindowClosed] = useState(false);
  const [mode, setMode] = useState("about");

  useEffect(() => {
    setWindowClosed(false);
  }, []);

  return (
    <Container>
      <CustomWindow closed={windowClosed}>
        <CustomWindowHeader>
          <span>Hi, I'm Jehad</span>
          <Button onClick={() => setWindowClosed(true)}>
            <span>X</span>
          </Button>
        </CustomWindowHeader>
        <Toolbar>
          <Button onClick={() => setMode("about")} variant="menu" size="sm">
            About
          </Button>
          <Button onClick={() => setMode("skills")} variant="menu" size="sm">
            Skills
          </Button>
          <Button onClick={() => setMode("contact")} variant="menu" size="sm">
            Contact
          </Button>
        </Toolbar>
        <WindowContent>
          <AboutMeContent mode={mode} />
        </WindowContent>
        <Panel variant="well">Socials</Panel>
      </CustomWindow>
    </Container>
  );
};

export default AboutMeSection;
