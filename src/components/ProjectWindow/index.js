import { useState } from "react";
import {
  Window,
  WindowHeader,
  WindowContent,
  Toolbar,
  Button,
  Panel,
} from "react95";
import ProjectWindowContent from "../ProjectWindowContent";
import styled from "styled-components";

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomWindow = styled(Window)`
  max-width: 400px;
`;

const ProjectWindow = () => {
  const [mode, setMode] = useState("intro");

  return (
    <CustomWindow resizable className="window">
      <WindowHeader className="window-header">
        <span>WTFCKJAY World</span>
      </WindowHeader>
      <Toolbar>
        <Button
          onClick={() => setMode("intro")}
          variant="menu"
          size="sm"
          disabled={mode === "intro"}
        >
          Intro
        </Button>
        <Button
          onClick={() => setMode("desc")}
          variant="menu"
          size="sm"
          disabled={mode === "desc"}
        >
          Description
        </Button>
        <Button
          onClick={() => setMode("socials")}
          variant="menu"
          size="sm"
          disabled={mode === "socials"}
        >
          Socials
        </Button>
      </Toolbar>
      <WindowContent>
        <ProjectWindowContent mode={mode} />
      </WindowContent>
      <BottomRow>
        <a href="https://www.wtfckjay.world" target="_blank">
          <Button style={{ margin: "0 auto" }}>
            <span>Visit</span>
          </Button>
        </a>
      </BottomRow>
    </CustomWindow>
  );
};

export default ProjectWindow;
