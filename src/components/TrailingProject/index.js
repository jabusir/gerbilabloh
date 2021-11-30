import { Window, WindowHeader, WindowContent } from "react95";

import styled from "styled-components";

const CustomWindow = styled(Window)`
  max-width: 250px;
  margin-left: 25px;
  height: 400px;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0;
    height: 300px;
  }
`;

const TrailingProject = () => {
  return (
    <CustomWindow resizable className="window">
      <WindowHeader className="window-header">
        <span>POSSIBLY YOU???</span>
      </WindowHeader>
      <WindowContent>
        If you need a web or mobile app, general software, I'm always excited to
        hear your vision
      </WindowContent>
    </CustomWindow>
  );
};

export default TrailingProject;
