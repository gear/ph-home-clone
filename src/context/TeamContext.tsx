"use client";

import { Info } from "@/types";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { publications } from "@/cron";

interface TeamContextType {
  members: Info[];
  affiliationFilter: string;
  interestFilter: string[];
  setAffiliationFilter: (affiliation: string) => void;
  setInterestFilter: (interests: string[]) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

const TeamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [affiliationFilter, setAffiliationFilter] = useState<string>("");
  const [interestFilter, setInterestFilter] = useState<string[]>([]);

  // Extract member info from publications
  const members: Info[] = useMemo(() => {
    return publications.reduce((acc, publication) => {
      if (Array.isArray(publication.info)) {
        return [...acc, ...publication.info];
      } else {
        return [...acc, publication.info];
      }
    }, [] as Info[]);
  }, []);

  return (
    <TeamContext.Provider
      value={{
        members,
        affiliationFilter,
        interestFilter,
        setAffiliationFilter,
        setInterestFilter,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

const useTeamContext = (): TeamContextType => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeamContext must be used within a TeamProvider");
  }
  return context;
};

export { TeamProvider, useTeamContext };
