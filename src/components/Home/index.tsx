import WriteMachine from "@/components/WriteMachine";
import terminal from "@/public/assets/images/coding.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "./Home.style.css";

const Home = () => {
  const t = useTranslations("apresentation");
  return (
    <section className="flex flex-col h-max my-10 justify-center align-middle gap-8 p-10">
      <article className="p-14 bg-white bg-opacity-10 rounded-lg apresentation">
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
      </article>
    </section>
  );
};

export default Home;
