import { RefObject } from "react";

export interface HeaderNavigationItems {
  home: RefObject<HTMLDivElement> | null;
  stacks: RefObject<HTMLDivElement> | null;
  repositories: RefObject<HTMLDivElement> | null;
  about: RefObject<HTMLDivElement> | null;
}
