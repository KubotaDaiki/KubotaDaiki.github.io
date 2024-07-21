import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import { client } from "../libs/client";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { theme } from "../styles/theme";
import { Top } from "./components/Top";
import { contentfulFilter } from "../libs/contentfulFilter";
import { Certification } from "./components/Certification";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Works } from "./components/Works";

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

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.getEntries().catch((err) => console.log(err));
  return {
    props: {
      data: data,
    },
  };
};
