import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { cn } from "@/libs/utils";

interface Link {
  href: string;
  label: string;
}

interface AppDropdownProps {
  links: Link[];
  label: string;
  link: string;
  currentTab: string;
  value: string;
  pathname: string;
}

const AppDropdown: React.FC<AppDropdownProps> = ({ links, label, link, currentTab, value, pathname }) => {
  let timeout: string | number | NodeJS.Timeout | undefined; // NodeJS.Timeout
  const timeoutDuration = 0;

  const buttonRef = useRef<HTMLButtonElement>(null); // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open: boolean) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click(); // eslint-disable-line
  };

  const onHover = (open: boolean, action: string) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout);
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
    // else: don't click! 😁
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as unknown as Node)
    ) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Popover className="relative">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
          className="flex flex-col"
        >
          <PopoverButton
            ref={buttonRef}
            className={cn(
              "inline-block text-lg font-normal text-gray-800 no-underline rounded-md hover:text-blue-500 hover:bg-indigo-100",
              currentTab === value && "text-blue-500"
            )}
          >
            <Link href={link} className="px-4 py-2 inline-block">
              {label}
            </Link>
          </PopoverButton>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom"
              className="divide-y border bg-white divide-white/5 rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 py-2 z-20"
              transition
            >
              {links.map(({ href, label }) => (
                <div className="px-2" key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-lg px-3 py-2 transition hover:bg-gray-100",
                      pathname === href && "bg-blue-50 text-blue-600"
                    )}
                  >
                    <p className={cn(
                      "font-semibold",
                      pathname === href && "text-blue-600"
                    )}>{label}</p>
                  </Link>
                </div>
              ))}
            </PopoverPanel>
          </Transition>
        </div>
      )}
    </Popover>
  );
};

export default AppDropdown;
