import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Header({ navItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems?.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white.main",
                  "&:hover": {
                    backgroundColor: "accent.main",
                  },
                }}
                href={"#" + item}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
      <Drawer
        anchor="top"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          disableScrollLock: true,
        }}
        hideBackdrop={true}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar />
        <Box
          onClick={handleDrawerToggle}
          sx={{ backgroundColor: "primary.main" }}
        >
          <List>
            {navItems?.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "accent.main",
                    },
                    color: "white.main",
                  }}
                  href={"#" + item}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
