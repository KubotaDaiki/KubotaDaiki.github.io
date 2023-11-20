import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  CssBaseline,
  Container,
  Link,
} from "@mui/material/";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import * as React from "react";
import { client } from "../libs/client";
import CardDialog from "./components/CardDialog";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import SocialIcon from "./components/SocialIcon";
import SubSection from "./components/SubSection";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Home({ page }) {
  const [open, setOpen] = React.useState([
    ...Array(page.works.length).fill(false),
  ]);

  const handleClickOpen = (index) => {
    setOpen(open.map((_, i) => (i === index ? true : false)));
  };
  const handleClose = () => {
    setOpen(open.map(() => false));
  };

  const theme = createTheme({
    typography: {
      fontFamily: ['"Noto Sans JP"', "Arial", "sans-serif"].join(","),
      fontSize: 16,

      p: { color: "#6b767c" },
      h1: { fontSize: 80 },
      h2: { fontSize: 48, marginTop: 40, marginBottom: 20 },
      h3: { fontSize: 26 },
    },
    palette: {
      primary: {
        main: "#282828",
      },
      secondary: {
        main: "#495057",
      },
      accent: {
        main: "#6283C2",
      },
      white: {
        main: "#dddddd",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Kubota&apos;s Portfolio</title>
        <link rel="icon" type="image/x-icon" href={page.favicon.url} />
      </Head>
      <CssBaseline />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3CGJWZE398" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3CGJWZE398');
        `}
      </Script>
      <Box sx={{ display: "flex" }}>
        <Sidebar>
          <Avatar
            src={page.profile_icon.url}
            sx={{
              width: 150,
              height: 150,
              border: 6,
              borderColor: "#5e5e5e",
              margin: 3,
            }}
          />
          {["トップ", "スキル", "資格&実績", "制作物"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                href={"#" + text}
                sx={{
                  "&:hover": {
                    bgcolor: "accent.main",
                  },
                }}
              >
                <ListItemText primary={text} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </Sidebar>
        <Box sx={{ width: "100%" }}>
          <Section id="トップ" height="100vh">
            <Typography variant="h1">{page.name}</Typography>
            <p style={{ color: "#b8b8b8", fontSize: "1rem" }}>
              Email: {page.email}
            </p>
            <Typography
              variant="p"
              component="div"
              dangerouslySetInnerHTML={{ __html: page.self_introduction }}
            />
            <Stack spacing={3} direction="row">
              {page.icon.map((icon) => (
                <SocialIcon
                  href={icon.url}
                  imgUrl={icon.img.url}
                  key={icon.id}
                />
              ))}
            </Stack>
          </Section>
          <Section id="スキル">
            <Typography variant="h2">スキル</Typography>
            <Typography variant="h3" sx={{ mb: 2 }}>
              プログラミング言語＆ツール
            </Typography>
            <List>
              {page.skill.map((skill) => (
                <ListItem key={skill.id}>
                  <Typography
                    variant="p"
                    className={skill.name}
                    sx={{ fontSize: 34, mx: 2 }}
                  ></Typography>
                  <Typography variant="p">{skill.description}</Typography>
                </ListItem>
              ))}
            </List>
          </Section>
          <Section id="資格&実績">
            <SubSection>
              <Typography variant="h2">資格</Typography>
              <List>
                {page.certification.map((certification) => (
                  <ListItem key={certification.id}>
                    <Box sx={{ mr: 1 }}>
                      <Image
                        src={certification.img.url}
                        width={15}
                        height={15}
                        alt="check"
                      ></Image>
                    </Box>
                    <Typography variant="p">{certification.name}</Typography>
                  </ListItem>
                ))}
              </List>
            </SubSection>
            <SubSection>
              <Typography variant="h2">実績</Typography>
              <List>
                {page.achievement.map((achievement) => (
                  <ListItem key={achievement.id}>
                    <Box sx={{ mr: 1 }}>
                      <Image
                        src={achievement.img.url}
                        width={20}
                        height={20}
                        alt="achievement"
                      ></Image>
                    </Box>
                    <Typography variant="p">{achievement.name}</Typography>
                  </ListItem>
                ))}
              </List>
            </SubSection>
          </Section>
          <Section id="制作物">
            <Typography variant="h2">制作物</Typography>
            <Grid
              container
              spacing={3}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
              sx={{ pl: 6, pr: 10 }}
            >
              {page.works.map((work, index) => {
                return (
                  <Grid item xs={1} key={work.id}>
                    <Card sx={{ aspectRatio: 1.7777777 }}>
                      <CardActionArea
                        onClick={() => handleClickOpen(index)}
                        sx={{ height: "100%" }}
                      >
                        <CardMedia
                          sx={{ height: "100%" }}
                          image={work.img.url}
                        />
                        <CardContent></CardContent>
                      </CardActionArea>
                    </Card>
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{ mt: 1 }}
                    >
                      {work.name}
                    </Typography>
                    <CardDialog open={open[index]} handleClose={handleClose}>
                      <Typography variant="h3">{work.name}</Typography>
                      <Grid
                        container
                        spacing={2}
                        direction="row-reverse"
                        columns={{ xs: 1, md: 2 }}
                      >
                        <Grid item xs={1}>
                          <Image
                            src={work.img.url}
                            alt="works"
                            width={1920}
                            height={1080}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <Typography
                            variant="p"
                            component="div"
                            dangerouslySetInnerHTML={{
                              __html: work.rich_text,
                            }}
                          />
                          <Link href={work.url}>GitHub</Link>
                        </Grid>
                      </Grid>
                    </CardDialog>
                  </Grid>
                );
              })}
            </Grid>
          </Section>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "top" });
  return {
    props: {
      page: data,
    },
  };
};
