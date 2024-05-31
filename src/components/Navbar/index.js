import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  TextInput,
} from "react95";

import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Navbar.css";

const CustomAppBar = styled(AppBar)`
  bottom: 0;
  top: auto;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <CustomAppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                bottom: "100%",
                width: "200px",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <Link to="/">
                  <span className="icon" role="img" aria-label="home">
                    🏠
                  </span>
                  Home
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link to="/images">
                  <span className="icon" role="img" aria-label="images">
                    🖼️
                  </span>
                  Images
                </Link>
              </MenuListItem>
              <Separator />
              <MenuListItem>
                <Link to="/videos">
                  <span className="icon" role="img" aria-label="videos">
                    🎥
                  </span>
                  Videos
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link to="/audio">
                  <span className="icon" role="img" aria-label="audio">
                    🎵
                  </span>
                  Audio
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link to="/info">
                  <span className="icon" role="img" aria-label="info">
                    ℹ️
                  </span>
                  Info
                </Link>
              </MenuListItem>
            </MenuList>
          )}
        </div>

        <TextInput placeholder="Search..." width={150} />
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
