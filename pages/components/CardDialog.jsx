import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

export default function CardDialogs({ title, open, handleClose, children }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="lg"
      sx={{ p: 1 }}
      fullScreen={fullScreen}
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{ paddingX: { md: "50px" }, paddingY: "30px" }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
