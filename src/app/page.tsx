"use client";
import Biography from "@/components/Biography/Biography";
import Header from "@/components/Header/Header";
import Home from "@/components/Home";
import Repositories from "@/components/Repositories/Repositories";
import SectionWraper from "@/components/SectionWraper/SectionWraper";
import Stacks from "@/components/Stacks/Stacks";
import { HeaderNavigationItems } from "@/interfaces/HeaderNavigationItems";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRef } from "react";

config.autoAddCss = false;

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const stacksRef = useRef<HTMLDivElement>(null);
  const repositoriesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const headerNavigationRefs: HeaderNavigationItems = {
    home: homeRef,
    stacks: stacksRef,
    repositories: repositoriesRef,
    about: aboutRef,
  };

  return (
    <div className="w-screen items-start justify-items-center  sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Header refs={headerNavigationRefs} />
      <main className="w-full justify-center align-middle">
        <Home ref={homeRef} />
        <SectionWraper ref={stacksRef} titlePath="apresentation.stacks">
          <Stacks />
        </SectionWraper>
        <SectionWraper
          ref={repositoriesRef}
          titlePath="apresentation.repositories"
        >
          <Repositories />
        </SectionWraper>
        <SectionWraper ref={aboutRef} titlePath="apresentation.about">
          <Biography />
        </SectionWraper>
      </main>
    </div>
  );
}
