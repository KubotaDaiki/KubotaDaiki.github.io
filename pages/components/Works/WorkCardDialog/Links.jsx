import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function Links({ work }) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="p">リンク</Typography>
      <Link href={work.fields.github_url}>GitHub</Link>
      {work.fields.demoVideo && (
        <Link href={work.fields.demoVideo.fields.file.url}>デモ動画</Link>
      )}
      {work.fields.chromeExtensionUrl && (
        <Link href={work.fields.chromeExtensionUrl}>Chrome ウェブストア</Link>
      )}
      {work.fields.demoSite && (
        <Link href={work.fields.demoSite}>デモサイト</Link>
      )}
    </Stack>
  );
}
