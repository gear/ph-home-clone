import { Publication } from "@/types";

import hoangnt from "./hoangnt.json";
import kaumad from "./kaumad.json";
import kishisvensson from "./kishisvensson.json";
import thomassvensson from "./thomassvensson.json";

export const hoangntPublication: Publication = {
  ...hoangnt,
  articles: hoangnt.articles.map((article) => ({
    ...article,
    topics: article.topics || [],
    publication: article.publication || null,
    cited_by_count: article.cited_by_count || 0,
  })),
};

export const kaumadPublication: Publication = {
  ...kaumad,
  articles: kaumad.articles.map((article) => ({
    ...article,
    topics: article.topics || [],
    publication: article.publication || null,
    cited_by_count: article.cited_by_count || 0,
  })),
};

export const kishisvenssonPublication: Publication = {
  ...kishisvensson,
  articles: kishisvensson.articles.map((article) => ({
    ...article,
    topics: article.topics || [],
    publication: article.publication || null,
    cited_by_count: article.cited_by_count || 0,
  })),
};

export const thomassvenssonPublication: Publication = {
  ...thomassvensson,
  articles: thomassvensson.articles.map((article) => ({
    ...article,
    topics: article.topics || [],
    publication: article.publication || null,
    cited_by_count: article.cited_by_count || 0,
  })),
};

export const publications: Publication[] = [
  hoangntPublication,
  kaumadPublication,
  kishisvenssonPublication,
  thomassvenssonPublication,
];
