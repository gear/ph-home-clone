"use client";

import { useTranslation } from "react-i18next";

export default function SHIDashboard() {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">


      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="z-10 flex flex-col items-center">
          <div className="text-5xl font-extrabold tracking-wider text-black text-center leading-tight mt-8">
            神奈川県立保健福祉大学
          </div>
          <div className="relative flex items-center justify-center mt-4 mb-0 w-full">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 rounded-full overflow-hidden z-0">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="stripes" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(30)">
                    <rect width="6" height="12" fill="#12d6fa" />
                  </pattern>
                </defs>
                <circle cx="128" cy="128" r="128" fill="url(#stripes)" />
              </svg>
            </div>
            <div className="text-[6rem] font-extrabold tracking-wide text-black text-center leading-none z-10 px-8">
              SUMMER SCHOOL
            </div>
          </div>
          <div className="text-[5rem] font-extrabold tracking-wide text-black text-center leading-none mt-4">
            IN KAWASAKI
          </div>
          <div className="text-2xl font-bold text-black text-center mt-8 flex flex-row gap-12">
            <span>ヘルスイノベーション研究科</span>
            <span>川崎キャンパス</span>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-lg px-8 py-6 max-w-5xl mx-auto text-black text-xl font-bold mt-8 leading-relaxed">
      <div className="mb-4">
  <div className="flex">
    <span className="font-bold flex-shrink-0 mr-2">開催日：</span>
    <div className="grid grid-cols-4 gap-x-2">
      <span className="font-extrabold col-span-1 whitespace-nowrap">2025 年 7 月</span>
      <span className="font-extrabold col-span-1 whitespace-nowrap">30 日</span>
      <span className="font-extrabold col-span-1 whitespace-nowrap">（水）</span>
      <span className="font-extrabold col-span-1 whitespace-nowrap">(高校生対象)</span>
      <span className="col-span-1"></span>
      <span className="font-extrabold col-span-1 whitespace-nowrap">31 日</span>
      <span className="font-extrabold col-span-1 whitespace-nowrap">（木）</span>
      <span className="font-extrabold col-span-1 whitespace-nowrap">(中学生対象)</span>
    </div>
  </div>
  <div className="ml-24 mt-1">
    <span>12：30～18：00</span>
  </div>
</div>

        <div className="mb-2">
          対象：<span className="font-normal">県内在住・在学の中学生および高校生</span>
        </div>
        <div className="mb-2">
          内容：<span className="font-normal">英語で保健医療福祉の最先端を学ぶ</span>
        </div>
        <div className="mb-2">
          <span className="underline">講義１　Smart Sleep</span>
          <span className="font-normal ml-6">～ウェアラブル技術による睡眠の測定・評価とその重要性について学ぶ～</span>
          <span className="font-normal ml-16">（スヴェンソン先生）</span>
        </div>
        <div className="mb-2">
          <span className="underline">講義２　SDGs and Universal Health Coverage</span>
          <span className="font-normal ml-6">～世界における医療を支える仕組みを知ろう～</span>
          <span className="font-normal ml-16">（ラハマン先生）</span>
        </div>
        <div className="mb-2">
          場所：<span className="font-normal">神奈川県立保健福祉大学　川崎キャンパス</span>
        </div>
        <div className="mb-2">
          定員：<span className="font-normal">各日 20 名（事前申込制）</span>
        </div>
        <div className="mb-2">
          募集期間：<span className="font-normal">6 月 10 日（火）～　7 月 3 日（金）</span>
        </div>
        <div className="mb-2 text-base font-normal text-gray-700">
          ※先着順ではございません。定員に達した場合は、後日抽選を行います。
        </div>
        <div className="mb-2">
          参加費：<span className="font-normal">無料</span>
        </div>
        <div className="mb-2">
          申込方法：<span className="font-normal">大学院ヘルスイノベーション研究科のHP からお申し込みください</span>
        </div>
        <div>
          問い合わせ先：<span className="font-normal">神奈川県立保健福祉大学（０４４）５８９－８１００</span>
        </div>
      </div>


      <div className="w-full max-w-md mx-auto bg-white px-6 py-5 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 text-cyan-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
          <h2 className="text-2xl font-bold tracking-wide text-gray-800">{t("shi-toc")}</h2>
        </div>
        <ul className="space-y-2">
          <li>
            <a
              className="block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
              href="/shi-dashboard/daily_hr_patterns"
            >
              {t("title-daily-hr")}
            </a>
          </li>
          <li>
            <a
              className="block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
              href="/shi-dashboard/sleep_parameters"
            >
              {t("title-sleep-params")}
            </a>
          </li>
          <li>
            <a
              className="block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
              href="/shi-dashboard/caffeine_effect"
            >
              {t("title-caffeine")}
            </a>
          </li>
          <li>
            <a
              className="block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
              href="/shi-dashboard/activity_effect"
            >
              {t("title-activity")}
            </a>
          </li>
          <li>
            <a
              className="block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
              href="/shi-dashboard/screentime_effect"
            >
              {t("title-screen")}
            </a>
          </li>
        </ul>
      </div>
      
    </div>

  );
}
