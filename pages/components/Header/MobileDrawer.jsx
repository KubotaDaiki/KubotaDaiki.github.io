import Drawer from "@mui/material/Drawer";

export function MobileDrawer({ mobileOpen, handleDrawerToggle, children }) {
  return (
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
      {children}
    </Drawer>
  );
}
