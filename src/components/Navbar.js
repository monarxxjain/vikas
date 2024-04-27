import { image, navName, pages } from "@/consts/data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const path = usePathname();

  return (
    <div>
      <nav
        className="w-full fixed top-0 left-0 right-0 z-10"
        style={{ backgroundColor: "#D1D7B1" }}
      >
        <div className="justify-between px-4 mx-auto   flex ">
          <div>
            <div className="flex items-center py-3 md:py-5 ">
              {/* hamberger */}
              <div className="md:hidden z-30">
                <button
                  className={`hamburger hamburger--vortex ${
                    navbar && "is-active"
                  } `}
                  type="button"
                  onClick={() => {
                    setNavbar((val) => !val);
                  }}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
              {/* LOGO  */}

              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image src={"/soumendu.jpg"} width={40} height={100} className="h-8" alt="face" />
                <span
                  className="self-center text-2xl font-semibold whitespace-nowrap "
                  style={{ fontFamily: "Playfair Display", fontWeight: "400" }}
                >
                  {navName}
                </span>
              </a>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 
                hidden
              `}
            >
              <ul className=" md:h-auto ml-32 items-center justify-center md:flex ">
                {pages.map((page, i) => {
                  return (
                    <Link
                      key={i}
                      href={page.path}
                      className={`pb-6 pt-6 text-xl text-black py-2 md:px-3 text-center 
                      ${path == page.path ? "navlink" : "hover:text-gray-600"} 
                      ${navbar && "hidden"}`}
                      onClick={() => {
                        setActiveIndex(i);
                      }}
                    >
                      <p>{page.name}</p>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setNavbar((val) => !val);
            }}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {navbar && (
          <div
            className={`absolute top-0 right-0 z-10  ${"bg-black opacity-75"} `}
            style={{ transition: "500ms", width: "100vw", height: "100vh" }}
          ></div>
        )}
        <div
          className={` absolute top-0 left-0 z-10 pt-20 ${
            navbar && "toggleInn"
          } ${navbar ? " " : "hidden"}`}
          style={{ backgroundColor: "#D1D7B1", height: "100vh" }}
        >
          {pages.map((page, i) => {
            return (
              <div
                // initial={{x:"-20px"}}
                // initial={{ opacity: 0.5}}
                // animate={{opacity: 1}}
                // transition={{ type: "spring", stiffness: 100 }}
                key={i}
                className={`flex ${navbar && "toggleIn"} `}

                // style={{animationDelay:`${i*50}ms`}}
                // style={{ transition: "500ms",transitionDelay:"500ms"}}
              >
                <svg
                  className={`${!(i == activeIndex) && "invisible"}  `}
                  style={{}}
                  width="8"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="50"
                    height="100"
                    x="0"
                    y="10"
                    rx="0"
                    ry="0"
                    fill="black"
                  />
                  Sorry, your browser does not support inline SVG.
                </svg>

                <Link
                  href={`${page.path}`}
                  className={`p-1.5  ${i == activeIndex && "font-bold"}`}
                  style={{
                    paddingLeft: "40px",
                    marginBottom: "10px",
                    marginRight: "30px",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    setActiveIndex(i);
                  }}
                >
                  {page.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
