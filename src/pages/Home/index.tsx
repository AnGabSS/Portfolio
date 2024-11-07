import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <header className="w-full flex flex-row justify-between">
        <section className="flex flex-row gap-4">
          <div className="border-b-2 text-sm">Home</div>
          <div className="border-b-2 text-sm">Stacks</div>
          <div className="border-b-2 text-sm">Repositories</div>
          <div className="border-b-2 text-sm">About</div>
        </section>
        <section className="flex flex-row gap-4">
          <div>
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ color: "#FFFFFF" }}
              className="text-sm"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#FFFFFF" }}
              className="text-sm"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#FFFFFF" }}
              className="text-sm"
            />
          </div>
        </section>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="font-bold">Hi, my name is</p>
        <h2 className="text-5xl font-bold">Angelo Gabriel</h2>
        <h2 className="text-5xl font-bold">Software Developer</h2>
      </main>
    </>
  );
};

export default Home;
