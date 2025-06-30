import { linksSHIDashboard } from "@/components/Navbar";
import { cn, getPrevNext } from "@/libs/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

interface PropsType {
  index: number;
}

const NavBarNextPrev = ({ index }: PropsType) => {
  const { t } = useTranslation("common");
  const nav = getPrevNext(linksSHIDashboard, index);

  return (
    <div className="flex justify-between py-4 items-center">
      <Link
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-lg font-normal no-underline rounded-md bg-blue-500 text-white  hover:bg-blue-600 focus:bg-indigo-100 focus:outline-none"
        )}
        href={nav.prev.href}
      >
        <ChevronLeftIcon width={18} height={18} />

        {t(nav.prev.label)}
      </Link>
      <Link
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-lg font-normal no-underline rounded-md bg-blue-500 text-white  hover:bg-blue-600 focus:bg-indigo-100 focus:outline-none"
        )}
        href={nav.next.href}
      >
        {t(nav.next.label)} <ChevronRightIcon width={18} height={18} />
      </Link>
    </div>
  );
};

export default NavBarNextPrev;
