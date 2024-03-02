import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing Font Awesome Icons
import { Link } from "react-router-dom";

const initialNavigation = [
  { name: "Home", href: "/", current: true },
  { name: "Artist", href: "/artist", current: false },
  { name: "Chat", href: "/chatbot", current: false },
  { name: "DEX", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleNavigationClick = (clickedIndex) => {
    const updatedNavigation = navigation.map((item, index) => ({
      ...item,
      current: index === clickedIndex,
    }));
    setNavigation(updatedNavigation);
  };

  return (
    <Disclosure as="nav" className="fixed w-full z-10" style={{ backgroundColor: "#0A173E" }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
              <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                <span className="text-white text-2xl ml-2">BITWIT</span>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-100 text-medium hover:bg-blue-700 hover:text-white",
                        "rounded-md px-3 py-2"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => handleNavigationClick(index)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="text-white p-2 focus:outline-none focus:ring">
                  {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleNavigationClick(index)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
