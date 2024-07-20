import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import { client } from "../libs/client";
import Background from "./components/Background";
import CardDialog from "./components/CardDialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import { theme } from "../styles/theme";
import { Top } from "./components/Top";
import { contentfulFilter } from "../libs/contentfulFilter";
import { Certification } from "./components/Certification";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";

export default function Home({ data }) {
  const skills = contentfulFilter(data, "skills")[0];
  const certification = contentfulFilter(data, "certification");
  const achievements = contentfulFilter(data, "achievement");
  const works = contentfulFilter(data, "work");
  const footer = contentfulFilter(data, "footer")[0];

  const navItems = ["トップ", "スキル", "資格", "実績", "制作物"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <Header navItems={navItems}></Header>
      <Stack alignItems="center">
        <Top></Top>
        <Skills skills={skills}></Skills>
        <Certification certification={certification}></Certification>
        <Achievements achievements={achievements}></Achievements>
        <Works works={works}></Works>
      </Stack>
      <Footer footer={footer}></Footer>
    </ThemeProvider>
  );
}

function Works({ works }) {
  const [open, setOpen] = useState([...Array(works.length).fill(false)]);

  return (
    <Section name="制作物">
      <Grid
        container
        spacing={3}
        columns={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          width: "100%",
        }}
      >
        {works.map((work, index) => {
          return (
            <Grid xs={1} key={work.sys.id}>
              <Card sx={{ aspectRatio: 1.7777777 }}>
                <CardActionArea
                  onClick={() =>
                    setOpen(open.map((_, i) => (i === index ? true : false)))
                  }
                  sx={{ height: "100%" }}
                >
                  <CardMedia
                    sx={{ height: "100%" }}
                    image={work.fields.img.fields.file.url}
                  />
                  <CardContent></CardContent>
                </CardActionArea>
              </Card>
              <Typography color="text.secondary" align="center" sx={{ mt: 1 }}>
                {work.fields.name}
              </Typography>

              <CardDialog
                open={open[index]}
                handleClose={() => setOpen(open.map(() => false))}
                title={work.fields.name}
              >
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  columns={{ xs: 1, md: 2 }}
                >
                  <Grid xs={1}>
                    <Image
                      src={`https:${work.fields.img.fields.file.url}`}
                      alt="works"
                      width={1920}
                      height={1080}
                      style={{
                        width: "100%",
                        height: "auto",
                        border: "solid 2px #eeeeee",
                      }}
                    />
                  </Grid>
                  <Grid xs={1}>
                    <Stack spacing={3}>
                      <Typography
                        variant="p"
                        component="div"
                        sx={{ whiteSpace: "pre-wrap" }}
                      >
                        {work.fields.description}
                      </Typography>
                      <Box>
                        <Typography
                          variant="p"
                          component="div"
                          sx={{ marginBottom: "5px" }}
                        >
                          使用技術
                        </Typography>
                        <Grid container spacing={0.5}>
                          {work.fields.technologyStack?.map(
                            (technologyStack) => {
                              return (
                                <Grid key={technologyStack}>
                                  <Chip label={technologyStack} size="small" />
                                </Grid>
                              );
                            }
                          )}
                        </Grid>
                      </Box>
                      <Stack spacing={0.5}>
                        <Typography variant="p">リンク</Typography>
                        <Link href={work.fields.github_url}>GitHub</Link>
                        {work.fields.demoVideo && (
                          <Link href={work.fields.demoVideo.fields.file.url}>
                            デモ動画
                          </Link>
                        )}
                        {work.fields.chromeExtensionUrl && (
                          <Link href={work.fields.chromeExtensionUrl}>
                            Chrome ウェブストア
                          </Link>
                        )}
                        {work.fields.demoSite && (
                          <Link href={work.fields.demoSite}>デモサイト</Link>
                        )}
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </CardDialog>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.getEntries().catch((err) => console.log(err));
  return {
    props: {
      data: data,
    },
  };
};
