import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";

interface Link {
  href: string;
  label: string;
}

type ButtonRenderPropArg = {
  open: boolean;
  active: boolean;
  hover: boolean;
  focus: boolean;
  disabled: boolean;
  autofocus: boolean;
};

interface AppDropdownProps {
  links: Link[];
  content: (props: ButtonRenderPropArg) => React.ReactElement;
}

const AppDropdown: React.FC<AppDropdownProps> = ({ links, content }) => {
  return (
    <Menu as="div" className="relative">
      <MenuButton as={Fragment}>
        {({ open, active, hover, focus, disabled, autofocus }) =>
          content({ open, active, hover, focus, disabled, autofocus })
        }
      </MenuButton>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <MenuItems
          anchor="bottom"
          className="absolute right-0 mt-2 w-48 origin-top-right menu-items bg-white shadow-lg rounded-md py-2 border-t border-blue-500 focus:outline-none"
        >
          {links.map((link) => (
            <MenuItem key={link.href} as={Fragment}>
              {({ focus }) => (
                <a
                  className={clsx(
                    "block px-4 py-2 text-sm text-gray-700 transition-colors duration-150",
                    "hover:bg-blue-500 hover:text-white",
                    "focus:bg-blue-500 focus:text-white focus:outline-none",
                    focus && "bg-blue-500 text-white"
                  )}
                  href={link.href}
                >
                  {link.label}
                </a>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default AppDropdown;
