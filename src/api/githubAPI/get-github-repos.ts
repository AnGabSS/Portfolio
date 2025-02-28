import axios from "axios";
import { GitHubRepository } from "./interfaces/GithubRepository";

export async function getGitHubRepos(): Promise<GitHubRepository[]> {
  const response = await axios.get<GitHubRepository[]>(
    "https://api.github.com/users/AnGabSS/repos"
  );
  return response.data.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
}
