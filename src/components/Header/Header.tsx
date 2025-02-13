import {
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  const t = useTranslations("apresentation");

  return (
    <header className="w-full flex flex-row justify-around flex-wrap p-4 mb-10">
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
  );
};

export default Header;
