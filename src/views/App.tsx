import React from "react";
import Header from "../components/Header/Header";
import Jobs from "../components/Jobs/Jobs";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { ResumeLinkWrapper, ResumeLink } from "./styles";
import Resume from "../assets/resume.pdf";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ResumeLinkWrapper>
        <ResumeLink target="_blank" href={Resume}>
          📜 resume
        </ResumeLink>
      </ResumeLinkWrapper>
      <Header />
      <Jobs />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default App;
