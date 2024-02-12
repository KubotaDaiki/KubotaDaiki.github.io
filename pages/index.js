import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import { client } from "../libs/client";
import Background from "./components/Background";
import CardDialog from "./components/CardDialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import SkillCard from "./components/SkillCard";

const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans JP"', "Arial", "sans-serif"].join(","),
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
      main: "#eeeeee",
    },
  },
});

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

function Top() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      id="トップ"
      sx={{ height: "100vh", width: "100%", backgroundColor: "primary.main" }}
    >
      <Box sx={{ width: "302px"}}>
        <Typography
          variant="p"
          sx={{ color: "white.main", paddingLeft: "5px" }}
          className="fadeIn"
        >
          UNIVERSITY STUDENT
        </Typography>
        <Typography
          variant="h1"
          sx={{ color: "white.main", fontSize: 80 }}
          className="fadeIn"
        >
          KUBOTA
        </Typography>
      </Box>
      <Avatar
        src="/profile.png"
        sx={{
          width: { xs: 150, md: 200 },
          height: { xs: 150, md: 200 },
        }}
        className="fadeIn"
      />
    </Stack>
  );
}

function Skills({ skills }) {
  const [open, setOpen] = useState([
    ...Array(skills.fields.skills.length).fill(false),
  ]);
  const [openOther, setOpenOther] = useState(false);

  return (
    <Section name="スキル">
      <Grid
        container
        columns={{ xs: 1, md: 2 }}
        spacing={2}
        sx={{ maxWidth: "800px" }}
      >
        {skills.fields.skills.map((skill, index) => (
          <Grid xs={1} key={skill.sys.id}>
            <SkillCard
              iconUrl={skill.fields.icon.fields.file.url}
              text={skill.fields.name}
              rank={skill.fields.rank}
              onClick={() =>
                setOpen(open.map((_, i) => (i === index ? true : false)))
              }
            ></SkillCard>
            <CardDialog
              open={open[index]}
              handleClose={() => setOpen(open.map(() => false))}
              title={skill.fields.name}
            >
              <Stack spacing={2}>
                <Stack spacing={2} direction={"row"} alignItems="center">
                  <Image
                    src={skill.fields.icon.fields.file.url}
                    width={42}
                    height={42}
                    alt="skillIcon"
                    style={{
                      filter:
                        "invert(29%) sepia(19%) saturate(296%) hue-rotate(169deg) brightness(90%) contrast(84%)",
                    }}
                  ></Image>
                  <Rating value={skill.fields.rank} readOnly />
                </Stack>
                <Typography variant="p" sx={{ whiteSpace: "pre-wrap" }}>
                  {skill.fields.detail}
                </Typography>
              </Stack>
            </CardDialog>
          </Grid>
        ))}
        {/* その他の項目を増やす場合は、以下をコメントアウト */}
        {/* <Grid xs={1}>
          <SkillCard
            iconUrl={
              "https://images.ctfassets.net/82ja9nmrxcu7/6GJUnr4O9VNz0LkLJxtLnV/39e279852a70c8d42a148d74c2e5e792/other.svg"
            }
            text={"その他"}
            onClick={() => setOpenOther(true)}
          ></SkillCard>
        </Grid>
        <CardDialog
          open={openOther}
          handleClose={() => setOpenOther(false)}
          title={"その他"}
        >
          <Stack spacing={2}>
            <Typography
              variant="p"
              sx={{ whiteSpace: "pre-wrap" }}
            ></Typography>
          </Stack>
        </CardDialog> */}
      </Grid>
    </Section>
  );
}

function Certification({ certification }) {
  return (
    <Section name="資格">
      <List>
        {certification.map((certification) => (
          <ListItem key={certification.sys.id} sx={{ px: { xs: 0, md: 2 } }}>
            <Box sx={{ mr: 1 }}>
              <Image
                src={certification.fields.icon.fields.file.url}
                width={15}
                height={15}
                alt="check"
              ></Image>
            </Box>
            <Typography variant="p">{certification.fields.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

function Achievements({ achievements }) {
  return (
    <Section name="実績">
      <List>
        {achievements.map((achievement) => (
          <ListItem key={achievement.sys.id} sx={{ px: { xs: 0, md: 2 } }}>
            <Box sx={{ mr: 1 }}>
              <Image
                src={`https:${achievement.fields.icon.fields.file.url}`}
                width={20}
                height={20}
                alt="achievement"
              ></Image>
            </Box>
            <Typography variant="p">{achievement.fields.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Section>
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
                          <Link href={work.fields.demoSite}>
                            デモサイト
                          </Link>
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

function contentfulFilter(data, id) {
  return data.items.filter((item) => item.sys.contentType.sys.id === id);
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
