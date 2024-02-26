import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";



import { useState } from "react";


const Navbar = () => {
  const { data: session } = useSession();
  const items = [
    {
      key: "1",
      label: <Link href="/cpu">Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/ram">Ram</Link>,
    },
    {
      key: "4",
      label: <Link href="/psu">Power Supply</Link>,
    },
    {
      key: "5",
      label: <Link href="/storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="/others">Others</Link>,
    },
  ];
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black bg-[#200E3A]  font-sans">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-white font-bold text-xl uppercase italic">
                Tec-Mate
              </h1>
            </Link>
          </div>
          <div className="hidden md:block ">
            <ul className="
            flex items-center justify-around gap-3 text-white">
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()} >
                  <Space>
                   <span className="text-white">Categories</span>
                    <FaAngleDown />
                  </Space>
                </a>
              </Dropdown>
              <li >
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="ml-3 text-white  px-2 rounded shadow-md font-serif">
              {session?.user ? (
                <button
                  onClick={() => signOut()}
                  className=" cursor-pointer transition-all duration-200"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => router.push("/login")}
                  className="border-1  p-2 cursor-pointer transition-all duration-200"
                >
                  Login
                </button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "" : "hidden"} md:hidden`}>
        <ul className="flex flex-col mt-4">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Component
                <FaAngleDown />
              </Space>
            </a>
          </Dropdown>
        </ul>
        <div></div>

        <div className="navbar-end">
          <div className="ml-3 text-white  px-2 rounded shadow-md font-serif">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className=" cursor-pointer transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className=" cursor-pointer transition-all duration-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;