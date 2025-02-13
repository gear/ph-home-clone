"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { initializeTab } from "@/lib/features/appSlice";
import { NavBar } from "@/types";
import { NAVBARS } from "@/constants";
import { usePathname } from "next/navigation";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  const pathname = usePathname();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // Initialize tab based on pathname
    const isValidTab = NAVBARS.some((tab) => tab === pathname);
    const currentTab = isValidTab ? (pathname as NavBar) : "home";
    storeRef.current.dispatch(initializeTab(currentTab));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
