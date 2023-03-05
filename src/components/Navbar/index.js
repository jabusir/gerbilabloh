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
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/featured">
                  <span role="img" aria-label="📂">
                    📂
                  </span>
                  Featured Work
                </Link>
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="💡">
                  💡
                </span>
                Answers to life's ?'s
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
