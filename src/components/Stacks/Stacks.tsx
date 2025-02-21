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
import { StacksInterface, StacksList } from "./Data/StacksList";

interface StacksProps {
  ref: RefObject<HTMLDivElement>;
}

const Stacks = ({ ref }: StacksProps) => {
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
    <div className="flex flex-col items-center h-full">
      <h1 className="text-6xl font-bold" ref={ref}>
        Stacks
      </h1>
      <div className="w-screen flex flex-col justify-center">
        <div className="w-full mx-auto max-w-xl">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {StacksList.map((stack: StacksInterface, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center bg-gray">
                      <span className="text-4xl font-semibold py-10">
                        {stack.area}
                      </span>
                      <article className="flex flex-row flex-nowrap py-10">
                        {stack.techs.map((tech, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center"
                          >
                            {tech.name}
                          </div>
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
            Slide {current} of {count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
