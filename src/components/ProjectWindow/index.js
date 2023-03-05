import { useState } from "react";
import { Window, WindowHeader, WindowContent, Toolbar, Button } from "react95";
import ProjectWindowContent from "../ProjectWindowContent";
import styled from "styled-components";

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  align-content: end;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const CustomWindow = styled(Window)`
  max-width: 400px;
  position: relative;
  height: 400px;
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const ProjectWindow = ({ title, website, projectImage, desc, socialsObj }) => {
  const [mode, setMode] = useState("intro");

  return (
    <CustomWindow className="window">
      <WindowHeader className="window-header">
        <span>{title}</span>
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
        <ProjectWindowContent
          mode={mode}
          projectImage={projectImage}
          desc={desc}
          socialsObj={socialsObj}
        />
      </WindowContent>
      <BottomRow>
        <a href={website} target="_blank" rel="noreferrer">
          <Button style={{ margin: "0 auto" }}>
            <span>Visit</span>
          </Button>
        </a>
      </BottomRow>
    </CustomWindow>
  );
};

export default ProjectWindow;
