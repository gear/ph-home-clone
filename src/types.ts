import { NAVBARS } from "@/constants";

export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export interface SelectOption<T> {
  value: T;
  label: string;
}

export type NavBar = (typeof NAVBARS)[number];

export type Publication = {
  info: Info;
  "co-authors": Author[];
  articles: Article[];
};

export type Info = {
  name: string;
  affiliations: string;
  email: string;
  interests: string[];
};

export type Author = {
  name: string;
  profile_link: string;
  affiliation: string;
};

export type Article = {
  title: string;
  link: string;
  authors: string[];
  publication: string | null;
  publication_year: number | null;
  cited_by_count: number | null;
  topics: string[];
};
