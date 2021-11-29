import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Divider,
  TextField,
} from "react95";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            {/* <img
      src={logoIMG}
      alt='react95 logo'
      style={{ height: '20px', marginRight: 4 }}
    /> */}
            Start
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                bottom: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <Link to="/">
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  Profile
                </Link>
              </ListItem>
              <Link to="/projects">
                <ListItem>
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  My account
                </ListItem>
              </Link>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
