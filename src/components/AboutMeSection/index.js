import { useState, useEffect } from "react";
import { Window, WindowHeader, WindowContent, Toolbar, Button } from "react95";
import styled from "styled-components";
import AboutMeContent from "../AboutMeContent";
import Socials from "../Socials";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
`;

const CustomWindow = styled(Window)`
  display: ${(props) => (props.closed ? "none" : "inline")};
  width: 300px;
`;

const CustomWindowHeader = styled(WindowHeader)`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const CustomWindowContent = styled(WindowContent)`
  padding: ${(props) => (props.mode === "contact" ? "0" : "16px")};
`;

const AboutMeSection = () => {
  const [windowClosed, setWindowClosed] = useState(false);
  const [mode, setMode] = useState({ activeTab: "about" });

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
          <Button
            onClick={() => setMode("about")}
            variant="menu"
            size="sm"
            disabled={mode === "about"}
          >
            About
          </Button>
          <Button
            onClick={() => setMode("contact")}
            variant="menu"
            size="sm"
            disabled={mode === "contact"}
          >
            Contact
          </Button>
        </Toolbar>
        <WindowContent>
          <AboutMeContent mode={mode} />
        </WindowContent>
        {mode !== "skills" && <Socials ig="jejo.eth" twitter="jejo2hood" />}
      </CustomWindow>
    </Container>
  );
};

export default AboutMeSection;
