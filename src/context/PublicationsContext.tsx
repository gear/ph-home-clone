"use client";

import { publications } from "@/cron";
import { Article, Publication } from "@/types";
import moment from "moment";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

interface PublicationsContextType {
  publications: Publication[];
  topicFilter: string;
  yearFilter: number;
  setTopicFilter: (topic: string) => void;
  setYearFilter: (year: number) => void;
  articles: Article[];
}

const PublicationsContext = createContext<PublicationsContextType | undefined>(
  undefined
);

const PublicationsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const articles = useMemo(() => {
    return publications.reduce((acc, publication) => {
      return [...acc, ...publication.articles];
    }, [] as Article[]);
  }, [publications]);

  const [topicFilter, setTopicFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<number>(moment().year());

  return (
    <PublicationsContext.Provider
      value={{
        publications,
        topicFilter,
        yearFilter,
        setTopicFilter,
        setYearFilter,
        articles,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

const usePublicationsContext = (): PublicationsContextType => {
  const context = useContext(PublicationsContext);
  if (!context) {
    throw new Error(
      "usePublicationsContext must be used within a PublicationsProvider"
    );
  }
  return context;
};

export { PublicationsProvider, usePublicationsContext };
