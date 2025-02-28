import { useTranslations } from "next-intl";
import { ReactNode, RefObject } from "react";

interface SectionProps {
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
  titlePath: string;
  className?: string;
}

const SectionWraper = ({
  children,
  ref,
  titlePath,
  className,
}: SectionProps) => {
  const t = useTranslations();

  return (
    <div
      className={`w-full h-[100%] my-[14vh] md:my-0 flex flex-col items-center justify-center ${className} px-12`}
      ref={ref}
    >
      <h1 className="text-4xl md:text-6xl font-bold my-8">{t(titlePath)}</h1>
      {children}
    </div>
  );
};

export default SectionWraper;
