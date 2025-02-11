import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import WriteMachine from "@/components/WriteMachine";
import terminal from "@/public/assets/images/coding.png";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./Home.style.css";

const Home = () => {
  const t = useTranslations("apresentation");
  return (
    <>
      <header className="w-full flex flex-row justify-around flex-wrap p-4">
        <nav className="flex flex-row gap-4">
          <div className="border-b-2 text-md nav-item">{t("home")}</div>
          <div className="border-b-2 text-md nav-item">{t("stacks")}</div>
          <div className="border-b-2 text-md nav-item">{t("repositories")}</div>
          <div className="border-b-2 text-md nav-item">{t("about")}</div>
        </nav>
        <nav className="flex flex-row gap-4">
          <a href="https://github.com/AnGabSS" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ color: "#FFFFFF" }}
              className="text-md"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/angabss/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#FFFFFF" }}
              className="text-md"
            />
          </a>
          <a
            href="https://www.instagram.com/tech_padawan/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#FFFFFF" }}
              className="text-md"
            />
          </a>
        </nav>
        <nav className="flex flex-row gap-4">
          <LanguageSwitcher />
        </nav>
      </header>
      <main className="flex flex-col h-full justify-center align-middle gap-8 row-start-2 p-8">
        <section className="p-14 bg-white bg-opacity-10 rounded-lg apresentation">
          <p className="font-bold text-xl">{t("apresentation-title")}</p>
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
            <WriteMachine textToBeWritten={t("role")} />
          </h2>
          <p className="w-full justify-center text-center">
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ color: "#FFFFFF80" }}
              className="text-4xl mt-5 cursor-pointer animated-arrow"
            />
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
