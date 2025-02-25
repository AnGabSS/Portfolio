import { HeaderNavigationItems } from "@/interfaces/HeaderNavigationItems";
import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { RefObject } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.style.css";

interface HeaderProps {
  refs: HeaderNavigationItems;
}

const Header = ({ refs }: HeaderProps) => {
  const t = useTranslations("apresentation");
  const handleClick = (ref: RefObject<HTMLDivElement> | null): void => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full flex flex-row justify-around flex-wrap px-4 gap-4">
      <nav className="flex flex-row gap-4">
        <div
          className="border-b-2 text-md nav-item"
          onClick={() => handleClick(refs.home)}
        >
          {t("home")}
        </div>
        <div
          className="border-b-2 text-md nav-item"
          onClick={() => handleClick(refs.stacks)}
        >
          {t("stacks")}
        </div>
        <div
          className="border-b-2 text-md nav-item"
          onClick={() => handleClick(refs.repositories)}
        >
          {t("repositories")}
        </div>
        <div
          className="border-b-2 text-md nav-item"
          onClick={() => handleClick(refs.about)}
        >
          {t("about")}
        </div>
      </nav>
      <nav className="flex  flex-row items-center justify-between gap-4">
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
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
