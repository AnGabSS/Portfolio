import WriteMachine from "@/components/WriteMachine";
import terminal from "@/public/assets/images/coding.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RefObject } from "react";
import "./Home.style.css";

interface HomeProps {
  ref: RefObject<HTMLDivElement>;
}

const Home = ({ ref }: HomeProps) => {
  const t = useTranslations("apresentation");
  return (
    <section
      ref={ref}
      className="flex flex-col w-screen h-dvh my-10 justify-center items-center gap-8 home-apresentation"
    >
      <article className="flex flex-col py-14 bg-white bg-opacity-10 rounded-lg apresentation">
        <p className="font-bold">{t("apresentation-title")}</p>
        <h2 className="font-bold flex flex-row gap-8 items-center flex-nowrap">
          Angelo Gabriel{" "}
          <Image
            src={terminal}
            alt="coding terminal"
            className="ms-2 coding-photo"
          />
        </h2>
        <h2 className="font-bold flex-nowrap">
          <WriteMachine textToBeWritten={t("role")} />
        </h2>
        <p className="w-full justify-center text-center">
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ color: "#FFFFFF80" }}
            className="mt-5 cursor-pointer animated-arrow"
          />
        </p>
      </article>
    </section>
  );
};

export default Home;
