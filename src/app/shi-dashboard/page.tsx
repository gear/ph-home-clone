"use client";

import { useTranslation } from "react-i18next";

export default function SHIDashboard() {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <h1 className="text-5xl font-bold text-gray-400">{t("shi-25-title")}</h1>

      <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
        <div className="mx-auto text-xl font-semibold"><strong>{t("shi-toc")}</strong></div>
        <ul className="mt-2 list-disc px-2 pl-6">
            <li>
                <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="/shi-dashboard/daily_hr_patterns">
                  {t("title-daily-hr")}
                </a>
            </li>
            <li>
                <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="/shi-dashboard/sleep_parameters">
                  {t("title-sleep-params")}
                </a>
            </li>
            <li>
                <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="/shi-dashboard/caffeine_effect">
                  {t("title-caffeine")}
                </a>
            </li>
            <li>
                <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="/shi-dashboard/activity_effect">
                  {t("title-activity")}
                </a>
            </li>
            <li>
                <a className="block hover:bg-gray-200 px-2 py-1 rounded" href="/shi-dashboard/screentime_effect">
                  {t("title-screen")}
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
}
