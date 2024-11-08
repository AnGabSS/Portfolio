import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.style.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import terminal from "@/public/assets/images/coding.png";
import WriteMachine from "@/components/WriteMachine";

const Home = () => {
  return (
    <>
      <header className="w-full flex flex-row justify-between">
        <nav className="flex flex-row gap-4">
          <div className="border-b-2 text-md nav-item">Home</div>
          <div className="border-b-2 text-md nav-item">Stacks</div>
          <div className="border-b-2 text-md nav-item">Repositories</div>
          <div className="border-b-2 text-md nav-item">About</div>
        </nav>
        <nav className="flex flex-row gap-4">
          <a href="https://github.com/AnGabSS" target="_blank">
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ color: "#FFFFFF" }}
              className="text-md"
            />
          </a>
          <a href="https://www.linkedin.com/in/angabss/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#FFFFFF" }}
              className="text-md"
            />
          </a>
          <a href="https://www.instagram.com/ang_g4b/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#FFFFFF" }}
              className="text-md"
            />
          </a>
        </nav>
      </header>
      <main className="flex flex-col h-full justify-center align-middle gap-8 row-start-2">
        <section className="p-10 bg-white bg-opacity-10 rounded-lg apresentation">
          <p className="font-bold text-xl">Hi, my name is</p>
          <h2 className="text-6xl font-bold flex flex-row items-center">
            Angelo Gabriel{" "}
            <Image
              src={terminal}
              width={80}
              height={80}
              alt="coding terminal"
              className="ms-2"
            />
          </h2>
          <h2 className="text-6xl font-bold">
            <WriteMachine textToBeWritten="Software Developer" />
          </h2>
          <p className="w-full justify-center text-center animated-arrow">
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ color: "#FFFFFF80" }}
              className="text-4xl animated-arrow mt-5 cursor-pointer"
            />
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
