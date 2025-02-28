import { getGitHubRepos } from "@/api/githubAPI/get-github-repos";
import { GitHubRepository } from "@/api/githubAPI/interfaces/GithubRepository";
import { useQuery } from "@tanstack/react-query";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Repositories = () => {
  const { data: repositories } = useQuery({
    queryKey: ["repositories"],
    queryFn: async () => {
      return await getGitHubRepos();
    },
  });
  const groupedRepositories: GitHubRepository[][] | undefined =
    repositories?.reduce<GitHubRepository[][]>(
      (acc: GitHubRepository[][], repo: GitHubRepository, index: number) => {
        if (index % 2 === 0) {
          acc.push([repo]);
        } else {
          acc[acc.length - 1].push(repo);
        }
        return acc;
      },
      []
    );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        dragFree: true,
        duration: 8000,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
      className="py-6 w-full"
    >
      <CarouselContent className="h-full py-10 -ml-1 gap-2">
        {groupedRepositories?.map((repo: GitHubRepository[], index: number) => {
          return (
            <CarouselItem
              key={index}
              className="h-full flex flex-col md:basis-1/2 lg:basis-1/4 gap-4"
            >
              {repo.map((repo: GitHubRepository, index: number) => {
                return (
                  <Link href={repo.html_url} className="p-1" key={index}>
                    <Card
                      className="h-[40dvh] bg-gradient-to-br from-zinc-600/75 to-zinc-800/25 rounded-xl shadow-xl transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-xl hover:drop-shadow-2xl hover:shadow-2xl 
                        "
                    >
                      <CardContent className="h-[100%] w-full flex flex-col items-center justify-center p-6">
                        <h2 className="text-xl w-[100%] lg:text-3xl text-center font-bold p-6 text-wrap flex-wrap break-all mt-2">
                          {repo.name}
                        </h2>
                        <p className="text-md lg:text-lg mb-2 overflow-hidden text-ellipsis">
                          {repo.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Repositories;
