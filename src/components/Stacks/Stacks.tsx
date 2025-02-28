import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { RefObject, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CarrouselDotsPage from "./CarrouselDotsPage/CarrouselDotsPage";
import { StacksInterface, StacksList } from "./Data/StacksList";

interface StacksProps {
  ref: RefObject<HTMLDivElement>;
}

const Stacks = ({ ref }: StacksProps) => {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl  font-bold my-16" ref={ref}>
        {t("stacks")}
      </h1>
      <div className="w-full flex flex-col h-full">
        <div className="w-[90%] h-full mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full h-[100dvh] md:h-[90%] flex flex-col items-center justify-center"
          >
            <CarouselContent>
              {StacksList.map((stack: StacksInterface, index) => (
                <CarouselItem key={index}>
                  <Card className="h-[100dvh] md:h-[76dvh]">
                    <CardContent className="h-full rounded-xl flex flex-col py-10 items-center bg-gray bg-gray-300 bg-opacity-20">
                      <p className="text-5xl font-bold py-10 rounded-xl md:p-4 drop-shadow-2xl drop-shadow-gray-600/25">
                        {stack.area}
                      </p>
                      <article className="w-full h-full flex flex-row flex-wrap justify-around items-center">
                        {stack.techs.map((tech, index) => (
                          <article
                            key={index}
                            className="w-full sm:w-1/6 h-96 flex flex-col items-center gap-5 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer bg-gray-900 bg-opacity-10 rounded-xl hover:drop-shadow-2xl hover:shadow-2xl p-6"
                          >
                            <Image
                              src={tech.icon}
                              width={250}
                              height={250}
                              alt=""
                              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 h-auto"
                            />

                            <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                              {tech.name}
                            </p>
                          </article>
                        ))}
                      </article>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            <CarrouselDotsPage
              currentPage={current}
              totalPages={count}
              onPageChange={(page) => api && api.scrollTo(page - 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
