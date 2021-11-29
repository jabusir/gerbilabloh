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

  useEffect(() => {
    setWindowClosed(false);
  }, []);

  return (
    <Container>
      <CustomWindow closed={windowClosed} resizable>
        <CustomWindowHeader>
          <span>Hi, I'm Jehad</span>
          <Button onClick={() => setWindowClosed(true)}>
            <span>X</span>
          </Button>
        </CustomWindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <p>
            When you set &quot;resizable&quot; prop, there will be drag handle
            in the bottom right corner (but resizing itself must be handled by
            you tho!)
          </p>
        </WindowContent>
        <Panel variant="well">Socials</Panel>
      </CustomWindow>
    </Container>
  );
};

export default AboutMeSection;
