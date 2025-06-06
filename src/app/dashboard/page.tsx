"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { LoadDashboard } from "@/components/Dashboard";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation("common");

  return (
    <Container>
      <SectionTitle preTitle={t("dashboard")} title={t("Data Dashboard")}>
        <div className="text-pretty text-justify mb-8">
          {t("dashboard_desc")}
        </div>
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          {/* <h3 className="text-lg font-semibold mb-4">Select the dataset</h3> */}
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-8">
                <div className="animate-pulse">Loading plot...</div>
              </div>
            }
          >
            <LoadDashboard />
          </Suspense>
        </div>
        {/* Additional section for sleep statistics */}
        {/* <div className="mt-8"> */}
        {/* <h4 className="text-md font-semibold">Sleep Statistics</h4> */}
        {/* Placeholder for future sleep statistics component */}
        {/* </div> */}
      </SectionTitle>
    </Container>
  );
}
