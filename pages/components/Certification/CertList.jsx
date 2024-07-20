import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CertListItem } from "./CertListItem";

export function CertList({ certification }) {
  return (
    <List>
      {certification.map((cert) => (
        <ListItem key={cert.sys.id} sx={{ px: { xs: 0, md: 2 } }}>
          <CertListItem cert={cert}></CertListItem>
        </ListItem>
      ))}
    </List>
  );
}
