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

export default function Home({ data }) {
  const top = data.items.filter(
    (item) => item.sys.contentType.sys.id === "top"
  )[0];
  const skills = data.items.filter(
    (item) => item.sys.contentType.sys.id === "skills"
  )[0];
  const certifications = data.items.filter(
    (item) => item.sys.contentType.sys.id === "certification"
  );
  const achievements = data.items.filter(
    (item) => item.sys.contentType.sys.id === "achievement"
  );
  const works = data.items.filter(
    (item) => item.sys.contentType.sys.id === "work"
  );
  const [open, setOpen] = React.useState([...Array(works.length).fill(false)]);


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
        <link
          rel="icon"
          type="image/x-icon"
          href={top.fields.favicon.fields.file.url}
        />
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
            src={top.fields.profile_icon.fields.file.url}
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
            <Typography variant="h1">{top.fields.name}</Typography>
            <p style={{ color: "#b8b8b8", fontSize: "1rem" }}>
              Email: {top.fields.email}
            </p>
            <Typography
              variant="p"
              component="div"
              sx={{ "whiteSpace": "pre-wrap", mb: 3 }}
            >
              {top.fields.self_introduction}
            </Typography>
            <Stack spacing={3} direction="row">
              {top.fields.social_icons.map((icon) => (
                <SocialIcon
                  href={icon.fields.url}
                  imgUrl={icon.fields.img.fields.file.url}
                  key={icon.sys.id}
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
              {skills.fields.skills.map((skill) => (
                <ListItem key={skill.sys.id}>
                  <Typography
                    variant="p"
                    className={skill.fields.class}
                    sx={{ fontSize: 34, mx: 2 }}
                  ></Typography>
                  <Typography variant="p">
                    {skill.fields.description}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Section>
          <Section id="資格&実績">
            <SubSection>
              <Typography variant="h2">資格</Typography>
              <List>
                {certifications.map((certification) => (
                  <ListItem key={certification.sys.id}>
                    <Box sx={{ mr: 1 }}>
                      <Image
                        src={certification.fields.icon.fields.file.url}
                        width={15}
                        height={15}
                        alt="check"
                      ></Image>
                    </Box>
                    <Typography variant="p">
                      {certification.fields.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </SubSection>
            <SubSection>
              <Typography variant="h2">実績</Typography>
              <List>
                {achievements.map((achievement) => (
                  <ListItem key={achievement.sys.id}>
                    <Box sx={{ mr: 1 }}>
                      <Image
                        src={`https:${achievement.fields.icon.fields.file.url}`}
                        width={20}
                        height={20}
                        alt="achievement"
                      ></Image>
                    </Box>
                    <Typography variant="p">
                      {achievement.fields.name}
                    </Typography>
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
              {works.map((work, index) => {
                return (
                  <Grid item xs={1} key={work.sys.id}>
                    <Card sx={{ aspectRatio: 1.7777777 }}>
                      <CardActionArea
                        onClick={() =>
                          setOpen(
                            open.map((_, i) => (i === index ? true : false))
                          )
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
                    <Typography
                      color="text.secondary"
                      align="center"
                      sx={{ mt: 1 }}
                    >
                      {work.fields.name}
                    </Typography>
                    <CardDialog
                      open={open[index]}
                      handleClose={() => setOpen(open.map(() => false))}
                    >
                      <Typography variant="h3">{work.fields.name}</Typography>
                      <Grid
                        container
                        spacing={2}
                        direction="row-reverse"
                        columns={{ xs: 1, md: 2 }}
                      >
                        <Grid item xs={1}>
                          <Image
                            src={`https:${work.fields.img.fields.file.url}`}
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
                            sx={{ "whiteSpace": "pre-wrap", mt: 3 }}
                          >
                            {work.fields.description}
                          </Typography>
                          <Link href={work.fields.github_url}>GitHub</Link>
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
  const data = await client.getEntries().catch((err) => console.log(err));
  return {
    props: {
      data: data,
    },
  };
};
