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
  useCallback,
} from "react";

interface PublicationsContextType {
  publications: Publication[];
  topicFilter: string;
  yearFilter: number;
  handleSetTopicFilter: (topic: string) => void;
  handleSetYearFilter: (year: number) => void;
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
  }, []);

  const [topicFilter, setTopicFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<number>(moment().year());

  const handleSetYearFilter = useCallback((year: number) => {
    setYearFilter(year);
  }, []);

  const handleSetTopicFilter = useCallback((topic: string) => {
    setTopicFilter(topic);
  }, []);

  return (
    <PublicationsContext.Provider
      value={{
        publications,
        topicFilter,
        yearFilter,
        handleSetTopicFilter,
        handleSetYearFilter,
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
