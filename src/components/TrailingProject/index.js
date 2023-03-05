import { Window, WindowHeader, WindowContent } from "react95";

import styled from "styled-components";
import Socials from "../Socials";

const CustomWindow = styled(Window)`
  max-width: 250px;
  margin-left: 25px;
  height: 400px;

  text-align: center;

  @media (max-width: 768px) {
    margin-left: 0;
    height: 300px;
  }
`;

const CenterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80%;
`;

const TrailingProject = () => {
  return (
    <CustomWindow className="window">
      <WindowHeader className="window-header">
        <span>What are you waiting for?</span>
      </WindowHeader>
      <CenterContainer>
        <WindowContent>
          You have a vision. Let's make it a reality. The sooner we start, the
          sooner you'll see results.
        </WindowContent>
        <Socials ig="jejo.eth" twitter="jejo2hood" mail="jabusir@gmail.com" />
      </CenterContainer>
    </CustomWindow>
  );
};

export default TrailingProject;
