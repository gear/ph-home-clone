"use client";

import { useTranslation } from "react-i18next";

export default function SHIDashboard() {
  const { t } = useTranslation("common");
  return (
    <div className='flex flex-col px-6 max-w-screen-xl mx-auto gap-4'>
      <div className='relative w-full flex flex-col items-center justify-center overflow-hidden'>
        <div className='z-10 flex flex-col items-center'>
          <div className='text-5xl font-extrabold tracking-wider text-black text-center leading-tight mt-8'>
            {t("school_name")}
          </div>
          <div className='relative flex items-center justify-center mt-4 mb-0 w-full'>
            <div className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 rounded-full overflow-hidden z-0'>
              <svg width='100%' height='100%'>
                <defs>
                  <pattern
                    id='stripes'
                    patternUnits='userSpaceOnUse'
                    width='12'
                    height='12'
                    patternTransform='rotate(30)'>
                    <rect width='6' height='12' fill='#12d6fa' />
                  </pattern>
                </defs>
                <circle cx='128' cy='128' r='128' fill='url(#stripes)' />
              </svg>
            </div>
            <div className='text-[6rem] font-extrabold tracking-wide text-black text-center leading-none z-10 px-8'>
              {t("summer_school")}
            </div>
          </div>
          <div className='text-[5rem] font-extrabold tracking-wide text-black text-center leading-none mt-4'>
            {t("in_kawasaki")}
          </div>
          <div className='text-2xl font-bold text-black text-center mt-8 flex flex-row gap-12'>
            <span>{t("department")}</span>
            <span>{t("campus")}</span>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-lg px-8 py-6 max-w-5xl mx-auto text-black text-xl font-bold mt-8 leading-relaxed'>
        <div className='mb-4'>
          <div className='flex'>
            <div className='flex gap-6 items-start mb-6 justify-center items-center'>
              {/* July 30: For High School Students */}
              <div className='bg-blue-50 rounded-xl p-4 min-w-[170px] shadow flex flex-col items-center'>
                <div className='text-xl font-extrabold text-blue-900 mb-1'>
                  {t("year_month")}
                </div>
                <div className='flex items-baseline gap-2'>
                  <div className='text-4xl font-extrabold text-blue-800'>
                    {t("date_30")}
                  </div>
                  <div className='text-base text-blue-700'>
                    {t("weekday_wed")}
                  </div>
                </div>
                <div className='text-sm font-medium text-blue-700 mt-1'>
                  {t("for_high_school")}
                </div>
                <div className='mt-4 text-base font-semibold text-blue-900'>
                  {t("event_time")}
                </div>
              </div>

              {/* July 31: For Junior High School Students */}
              <div className='bg-green-50 rounded-xl p-4 min-w-[170px] shadow flex flex-col items-center'>
                <div className='text-xl font-extrabold text-green-900 mb-1'>
                  {t("year_month")}
                </div>
                <div className='flex items-baseline gap-2'>
                  <div className='text-4xl font-extrabold text-green-800'>
                    {t("date_31")}
                  </div>
                  <div className='text-base text-green-700'>
                    {t("weekday_thu")}
                  </div>
                </div>
                <div className='text-sm font-medium text-green-700 mt-1'>
                  {t("for_junior_high")}
                </div>
                <div className='mt-4 text-base font-semibold text-green-900'>
                  {t("event_time")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-2'>
          {t("target_label")}
          <span className='font-normal'>{t("target_text")}</span>
        </div>
        <div className='mb-2'>
          {t("content_label")}
          <span className='font-normal'>{t("content_text")}</span>
        </div>
        <div className='mb-2'>
          <span className='underline'>{t("lecture1_title")}</span>
          <span className='font-normal ml-6'>{t("lecture1_desc")}</span>
          <span className='font-normal ml-16'>{t("lecture1_teacher")}</span>
        </div>
        <div className='mb-2'>
          <span className='underline'>{t("lecture2_title")}</span>
          <span className='font-normal ml-6'>{t("lecture2_desc")}</span>
          <span className='font-normal ml-16'>{t("lecture2_teacher")}</span>
        </div>
        <div className='mb-2'>
          {t("place_label")}
          <span className='font-normal'>{t("place_text")}</span>
        </div>
        <div className='mb-2'>
          {t("capacity_label")}
          <span className='font-normal'>{t("capacity_text")}</span>
        </div>
        <div className='mb-2'>
          {t("application_period_label")}
          <span className='font-normal'>{t("application_period_text")}</span>
        </div>
        <div className='mb-2 text-base font-normal text-gray-700'>
          {t("note_lottery")}
        </div>
        <div className='mb-2'>
          {t("fee_label")}
          <span className='font-normal'>{t("fee_text")}</span>
        </div>
        <div className='mb-2'>
          {t("application_method_label")}
          <span className='font-normal'>{t("application_method_text")}</span>
        </div>
        <div>
          {t("contact_label")}
          <span className='font-normal'>{t("contact_text")}</span>
        </div>
      </div>

      <div className='w-full max-w-md mx-auto bg-white px-6 py-5 rounded-2xl shadow-md border border-gray-200'>
        <div className='flex items-center mb-4'>
          <svg
            className='w-6 h-6 text-cyan-400 mr-2'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'
            />
          </svg>
          <h2 className='text-2xl font-bold tracking-wide text-gray-800'>
            {t("shi-toc")}
          </h2>
        </div>
        <ul className='space-y-2'>
          <li>
            <a
              className='block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
              href='/shi-dashboard/daily_hr_patterns'>
              {t("title-daily-hr")}
            </a>
          </li>
          <li>
            <a
              className='block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
              href='/shi-dashboard/sleep_parameters'>
              {t("title-sleep-params")}
            </a>
          </li>
          <li>
            <a
              className='block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
              href='/shi-dashboard/caffeine_effect'>
              {t("title-caffeine")}
            </a>
          </li>
          <li>
            <a
              className='block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
              href='/shi-dashboard/activity_effect'>
              {t("title-activity")}
            </a>
          </li>
          <li>
            <a
              className='block transition-all duration-150 rounded-lg px-4 py-2 text-lg font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
              href='/shi-dashboard/screentime_effect'>
              {t("title-screen")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
