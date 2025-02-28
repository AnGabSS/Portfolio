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
    <article className="w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl  font-bold my-16">Repositories</h1>
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
        className="p-6 w-[90%] "
      >
        <CarouselContent className="-ml-1 gap-2">
          {groupedRepositories?.map(
            (repo: GitHubRepository[], index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="flex flex-col md:basis-1/2 lg:basis-1/4"
                >
                  {repo.map((repo: GitHubRepository, index: number) => {
                    return (
                      <Link href={repo.html_url} className="p-1" key={index}>
                        <Card className="h-[40dvh] bg-gray-700 bg-opacity-50 rounded-xl">
                          <CardContent className="h-[100%] w-full flex flex-col items-center justify-center p-6 gap-10">
                            <h2 className="text-3xl text-center font-bold my-6 py-6">
                              {repo.name}
                            </h2>
                            <p className="text-xl my-6 py-6">
                              {repo.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </CarouselItem>
              );
            }
          )}
        </CarouselContent>
      </Carousel>
    </article>
  );
};

export default Repositories;
