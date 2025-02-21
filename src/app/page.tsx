"use client";
import Header from "@/components/Header/Header";
import Home from "@/components/Home";
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
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
      <Header refs={headerNavigationRefs} />
      <main className="flex flex-col h-screen justify-center align-middle gap-10 row-start-2">
        <Home ref={homeRef} />
        <Stacks ref={stacksRef} />
      </main>
    </div>
  );
}
