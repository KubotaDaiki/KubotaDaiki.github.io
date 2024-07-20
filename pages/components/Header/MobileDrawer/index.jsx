import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { MobileNavButton } from "./MobileNavButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";

export function MobileDrawer({ mobileOpen, onClick, navItems }) {
  return (
    <Drawer
      anchor="top"
      variant="temporary"
      open={mobileOpen}
      onClose={onClick}
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
      <Box onClick={onClick} sx={{ backgroundColor: "primary.main" }}>
        <List>
          {navItems?.map((item) => (
            <ListItem key={item} disablePadding>
              <MobileNavButton item={item}></MobileNavButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
