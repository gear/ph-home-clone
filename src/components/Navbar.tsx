"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import logo from "@/public/img/precision-health-logo.svg";
import { mont } from "./fonts";

export const Navbar = () => {
  const navigation = [
    { name: "Research", href: "/research" },
    { name: "Members", href: "/members" },
    { name: "Blogs", href: "/blogs" },
    { name: "Data Dashboard", href: "/dashboard" },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className={`${mont.className} flex items-center space-x-2 text-2xl text-blue-500`}>
              <span>
                <Image
                  src={logo}
                  width="38"
                  alt="N"
                  height="38"
                  className="w-8"
                />
              </span>
            <span>precision health</span>
          </span>
        </Link>

        {/* contact  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="px-6 py-2 text-white bg-blue-500 rounded-md md:ml-5">
                Contact
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none  ">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>

                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100  focus:outline-none">
                          {item.name}
                      </Link>
                    ))}
                    <Link href="/contact" className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 rounded-md lg:ml-5">         
                        Contact
                    </Link>
                  </>
                </DisclosurePanel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3" key={index}>
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-blue-500 focus:text-blue-500 focus:bg-indigo-100 focus:outline-none ">
                    {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}

