"use client"
import { useEffect, useState } from "react";
import Education from "./components/education";
import Header from "./components/header";
import ProExperience from "./components/pro-experience";
import ProSummary from "./components/pro-summary";
import TechSkills from "./components/tech-skills";
import { CommonLib } from "./lib/common.lib";
import { Cv } from "./models/cv.model";
import { CvService } from "./services/cv.service";

export default function Home() {
  const [cv, setCv] = useState<Cv>({ profile: { name: '', position: '' } } as Cv);
  
  useEffect(() => {
    const sp =  CommonLib.getSearchParams(window);
    
    (async () => {
      const data = await CvService.get(sp.s, sp.a);
      setCv(data);
    })();
  }, []);
  
  return (
    <>
      <Header data={cv.profile} />
      <ProSummary data={cv.summary} />
      <TechSkills data={cv.techStack} />
      <ProExperience data={cv.experience} />
      <Education data={cv.education} />
    </>
  );
}
