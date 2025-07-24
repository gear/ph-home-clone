"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Logo from "@/assets/precision-health-logo.svg";
import { mont } from "./fonts";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { cn } from "@/libs/utils";
import { NavBar } from "@/types";
import AppDropdown from "./AppDropdown";

export const linksSHIDashboard = [
  {
    href: "/shi-dashboard",
    label: "shi-dashboard-home",
  },
  {
    href: "/shi-dashboard/daily_hr_patterns",
    label: "daily_hr_patterns",
  },
  { href: "/shi-dashboard/sleep_architecture", label: "sleep_architecture" },
  { href: "/shi-dashboard/sleep_parameters", label: "sleep_parameters" },
];

export const Navbar = () => {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  const getCurrentTab = (path: string): NavBar => {
    if (path === "/") return "home";
    if (path.startsWith("/research")) return "research";
    if (path.startsWith("/publications")) return "publications";
    if (path.startsWith("/members")) return "members";
    if (path.startsWith("/news")) return "news";
    if (path.startsWith("/datasets")) return "datasets";
    if (
      path.startsWith("/resources") ||
      path.startsWith("/dashboards") ||
      path.startsWith("/shi-dashboard")
    )
      return "resources";
    return "home";
  };

  const currentTab = getCurrentTab(pathname);

  const navigation = [
    { name: t("home"), href: "/", value: "home" },
    {
      name: t("research"),
      href: "/research",
      value: "research",
      links: [
        { href: "/research/healthy-aging", label: t("rp_title_flip_1") },
        { href: "/research/sleep-medicine", label: t("rp_title_flip_2") },
        { href: "/research/metabolic-syndrome", label: t("rp_title_flip_3") },
        { href: "/research/machine-learning", label: t("rp_title_flip_4") },
      ],
    },
    {
      name: t("our_lab"),
      href: "/members",
      value: "members",
      links: [
        { href: "/publications", label: t("publications") },
        { href: "/members", label: t("members") },
        { href: "/news", label: t("news") },
      ],
    },
    {
      name: t("resources"),
      href: "/resources",
      value: "resources",
      links: [
        { href: "/datasets", label: t("datasets") },
        { href: "/dashboards", label: t("dashboards") },
        { href: "/shi-dashboard", label: t("shi-dashboard") },
      ],
    },
  ];
  console.log(currentTab, navigation);
  return (
    <nav className="w-full container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between">
      {/* Logo  */}
      <Link href="/">
        <span
          className={`${mont.className} flex items-center space-x-2 text-2xl text-blue-500`}
        >
          <span>
            <Image src={Logo} width="38" alt="N" height="38" className="w-8" />
          </span>
          <span className="text-lg hidden md:inline-block">
            precision health
          </span>
        </span>
      </Link>

      {/* contact  */}
      <div className="gap-3 nav__item mr-2 flex flex items-center ml-0 order-2">
        <div className="mr-3 flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-blue-500 rounded-md md:ml-5"
          >
            {t("contact")}
          </Link>
        </div>
        <LanguageToggle />
        <Menu as="div">
          <MenuButton
            aria-label="Toggle Menu"
            className="px-2 py-1 text-gray-500 rounded-md xl:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none  "
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </MenuButton>

          <MenuItems
            anchor="bottom end"
            className="xl:hidden p-2 bg-white rounded-md shadow-md outline-none"
          >
            <>
              {navigation.map((item, index) => (
                <div key={index}>
                  <MenuItem>
                    <Link
                      href={item.href}
                      className={cn(
                        "block w-full px-4 py-2 text-gray-500 rounded-md data-focus:bg-blue-100 data-focus:text-indigo-500 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none",
                        currentTab === item.value && "text-indigo-500"
                      )}
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                  {item.links && (
                    <div className="ml-4 mb-2">
                      {item.links.map((subItem, subIndex) => (
                        <MenuItem key={subIndex}>
                          <Link
                            href={subItem.href}
                            className={cn(
                              "block w-full px-3 py-1 text-sm text-gray-400 rounded-md data-focus:bg-blue-50 data-focus:text-indigo-400 hover:text-indigo-400 focus:text-indigo-400 focus:bg-blue-50 focus:outline-none",
                              pathname === subItem.href && "text-indigo-400"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          </MenuItems>
        </Menu>
      </div>

      {/* menu  */}
      <div className="hidden text-center xl:flex xl:items-center">
        <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((menu, index) => (
            <li className="mr-3" key={index}>
              {menu.links ? (
                <AppDropdown
                  links={menu.links}
                  label={menu.name}
                  link={menu.href}
                  currentTab={currentTab}
                  value={menu.value}
                  pathname={pathname}
                />
              ) : (
                <Link
                  href={menu.href}
                  className={cn(
                    "inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-blue-500 hover:bg-indigo-100",
                    currentTab === menu.value && "text-blue-500"
                  )}
                >
                  {menu.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
