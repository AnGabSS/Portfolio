import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Profile from "public/assets/images/profile.jpeg";
import React from "react";
import SectionWraper from "../SectionWraper/SectionWraper";

interface Job {
  title: string;
  company: string;
  date: string;
  description: string;
}

interface Course {
  title: string;
  institution: string;
  date: string;
}

const Biography = () => {
  const t = useTranslations("about");

  return (
    <article className="bg-gradient-to-tl from-zinc-400/30 from-10% via-zinc-600/50 to-zinc-700/50 border border-white p-2 md:p-6 rounded-xl">
      <article className="w-full flex flex-row items-center justify-between flex-wrap">
        <Image
          src={Profile}
          width={250}
          height={250}
          className="w-96 h-96 rounded-full drop-shadow-2xl object-cover p-6"
          alt={"Foto de perfil"}
        />
        <p className="w-4/5 h-full font-semibold text-2xl leading-[3.2rem]">
          {t("biography")}
        </p>
      </article>

      <SectionWraper
        titlePath="about.experience"
        className="w-full flex flex-col items-center justify-center gap-4 py-6"
      >
        {t.raw("jobs")?.map((job: Job, index: number) => (
          <React.Fragment key={job.title}>
            {" "}
            {/* Use a unique identifier for the key */}
            {index !== 0 && (
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-3xl text-zinc-200/60"
              />
            )}
            <article className="w-full md:w-5/6 h-full p-6 bg-zinc-700/20 rounded-xl border-l-4 border-b-4 border-zinc-500/90 shadow-xl">
              <p className="text-2xl font-bold">{job.title}</p>
              <p className="text-lg">{job.company}</p>
              <p className="text-lg">{job.date}</p>
              <p className="text-lg overflow-auto max-h-[200px]">
                {job.description}
              </p>
            </article>
          </React.Fragment>
        ))}
      </SectionWraper>

      <SectionWraper
        titlePath="about.education"
        className="w-full flex flex-col items-center justify-center gap-4 py-6"
      >
        {t.raw("courses")?.map((course: Course, index: number) => (
          <React.Fragment key={course.title}>
            {" "}
            {/* Use a unique identifier for the key */}
            {index !== 0 && (
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-3xl text-zinc-400/60"
              />
            )}
            <article className="w-5/6 h-full p-6 bg-zinc-700/20 rounded-xl border-l-4 border-b-4 border-zinc-500/90 shadow-xl">
              <p className="text-2xl font-bold">{course.title}</p>
              <p className="text-lg">{course.institution}</p>
              <p className="text-lg">{course.date}</p>
            </article>
          </React.Fragment>
        ))}
      </SectionWraper>
    </article>
  );
};

export default Biography;
