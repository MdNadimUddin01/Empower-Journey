import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdLogin, MdDarkMode, MdKeyboardArrowDown } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { FaHome } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi"; // New icon for user placeholder
import logo from "../images/Logo.webp";
import { FaBookOpenReader, FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import UserMenu from "./home/UserMenu";
import { SquareUser } from "lucide-react";

const Navbar = () => {
  const { token } = useSelector((state) => {
    return state.auth;
  });
  const { user } = useSelector((state) => {
    return state.profile;
  });

  const { totalItems } = useSelector((state) => {
    return state.cart;
  });

  const [sublinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      // const result = await apiConnector("GET" , categories.CATEGORIES_API)
      const result = await axios.get(
        "http://localhost:4000/api/v1/getAllTags",
        {}
      );
      // console.log("Sublinks : ", result.data)
      setSubLinks(result.data.allTags);
      // console.log(sublinks);
    } catch (error) {
      toast.error("Could fetch the category");
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const handleLogout = () => {};

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState("dark");
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Access isAuthenticated, user, and handleLogout from UserContext
  // const { isAuthenticated, user, handleLogout } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleToggleMode = () => {
    setDark(dark === "light" ? "dark" : "light");
  };

  // Scroll event listener
  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolled down
        setNavbarVisible(false);
      } else {
        // If scrolled up
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <nav
      className={`${
        dark === "dark"
          ? "bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 text-gray-100"
          : "bg-[linear-gradient(90deg,_#a1c4fd_0%,_#c2e9fb_100%)] text-black"
      } top-0 fixed z-[100] py-4 md:py-2 flex justify-between border-b border-gray-900 items-center w-full px-5 lg:py-2 lg:px-28 md:px-10 transition-transform duration-300 ease-in-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavLink to="/">
        <img
          className="h-10 sm:pl-2 md:h-14"
          alt="logo"
          src={logo}
          onClick={() => setMobileMenuOpen(false)}
        />
      </NavLink>

      <div className="md:hidden block absolute z-[101] right-3 md:right-8 text-3xl md:text-4xl">
        {isMobileMenuOpen ? (
          <IoClose onClick={toggleMobileMenu} />
        ) : (
          <IoMenu onClick={toggleMobileMenu} />
        )}
      </div>

      {isMobileMenuOpen && (
        <div
          className={`${
            dark === "dark"
              ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100"
              : "bg-[linear-gradient(90deg,_#a1c4fd_0%,_#c2e9fb_100%)] text-black"
          } md:hidden absolute z-[100] flex text-xl md:text-2xl flex-col items-start pl-8 md:pl-12 gap-5 md:gap-7 top-16 md:top-[72px] w-full left-0 py-7 md:py-9 h-fit`}
        >
          <button
            onClick={handleToggleMode}
            className={`p-2 rounded-full transition-all duration-300 ${
              dark === "light"
                ? "bg-blue-200 text-blue-600 hover:bg-blue-300"
                : "bg-gray-800 text-gray-200 hover:bg-gray-700"
            }`}
          >
            {dark === "light" ? <WiDaySunny /> : <MdDarkMode />}
          </button>

          {/* Navbar Links */}
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b border-white " : ""
              } flex gap-2 items-baseline`
            }
            to="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaHome />
            <p className="hover:brightness-50 hover:font-semibold">Home</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b border-white " : ""
              } flex gap-2 items-baseline`
            }
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            <AiOutlineInfoCircle />
            <p className="hover:brightness-50 hover:font-semibold">About</p>
          </NavLink>

          {/* Conditional Links */}
          {!isAuthenticated && (
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b border-white " : ""
                } flex gap-2 items-baseline`
              }
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaBookOpenReader />
              <p className="hover:brightness-50 hover:font-semibold">Courses</p>
            </NavLink>
          )}

          {/* Show Lab Tests and Hospitals Around for regular user */}

          {/* Show only Hospitals Around for hospital */}

          {isAuthenticated ? (
            <>
              {/* Profile Avatar with Name */}
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "border-b border-white " : ""
                  } flex gap-2 items-baseline`
                }
                to="/profile"
                onClick={() => setMobileMenuOpen(false)}
              >
                {" "}
                <FiUser className="text-xl" />
                <p className="hover:brightness-50 hover:font-semibold">
                  {/* {user?.name || user?.hospitalName} */}
                  HELLO
                </p>
              </NavLink>

              <button
                className="bg-white px-5 py-1 rounded-lg text-black font-bold hover:brightness-75"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex gap-2 flex-col xs:flex-row w-full xs:w-auto pr-4 xs:pr-0">
              <NavLink
                className="bg-white flex gap-2 w-full xs:w-auto items-center px-3 xs:px-4 py-1 rounded-lg text-black font-bold hover:brightness-75 login-btn"
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MdLogin />
                Login
              </NavLink>
              <NavLink
                className="bg-white flex gap-2 w-full xs:w-auto items-center px-3 xs:px-4 py-1 rounded-lg text-black font-bold hover:brightness-75"
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUserPlus />
                Register
              </NavLink>
            </div>
          )}
        </div>
      )}

      {/* Courses , About , Home */}
      <div className="hidden md:flex items-center gap-14">
        <div className="flex items-center gap-6 text-lg font-medium">
          <button
            onClick={handleToggleMode}
            className={`p-2 rounded-full transition-all duration-300 ${
              dark === "light"
                ? "bg-blue-200 text-blue-600 hover:bg-blue-300"
                : "bg-gray-800 text-gray-200 hover:bg-gray-700"
            }`}
          >
            {dark === "light" ? <WiDaySunny /> : <MdDarkMode />}
          </button>
          <NavLink
            to="/home"
            className="flex justify-center items-center gap-2"
          >
            <FaHome />
            <p className="font-bold text-lg hover:brightness-50">Home</p>
          </NavLink>

          <NavLink
            to="/about"
            className="flex justify-center items-center gap-2"
          >
            <AiOutlineInfoCircle />
            <p className="font-bold text-lg hover:brightness-50">About</p>
          </NavLink>

          <div className="flex cursor-pointer group gap-2 items-center relative">
            <FaBookOpenReader />
            <p className="font-bold text-lg ">Courses</p>
            <MdKeyboardArrowDown className="-ml-1" />
            <div className="flex flex-col gap-2 p-3 rounded-lg text-white w-48 invisible absolute bg-gray-800 group-hover:visible -translate-x-[20%] top-[110%]">
              {/* <div className=""></div> */}
              {sublinks.map((item, index) => {
                return (
                  <Link
                    to={item.tagName}
                    className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded-md "
                  >
                    <span className="font-medium">{item.tagName}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <NavLink
            to="/contactUs"
            className="flex justify-center items-center gap-2"
          >
            <SquareUser />
            <p className="font-bold text-lg hover:brightness-50">Contact</p>
          </NavLink>
        </div>
      </div>

      {/* User , Login , Register */}
      <div className="md:flex hidden items-center gap-10">
        {user && user.accountType !== "Instructor" && (
          <Link to="/dashboard/cart" className="relative">
            <FaCartShopping />
            {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        )}

        {user ? (
          <>
            {/* Profile Avatar with Name */}
            <div
              className={"cursor-pointer group relative"}
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* {" "} */}
              <p className="font-bold text-lg text-red flex items-center gap-3">
                <FiUser className="text-xl" />

                {user.firstName}
              </p>
              <div className="invisible absolute group-hover:visible -translate-x-[50%] top-[110%]">
                <UserMenu
                  userName={user.firstName + " " + user.lastName}
                ></UserMenu>
              </div>
            </div>

            {/* <button
                className={`${
                  dark === "dark"
                    ? "bg-gray-900 text-gray-100"
                    : "bg-white text-black"
                } flex gap-2 items-center px-5 py-1 rounded-lg font-bold hover:brightness-75`}
                onClick={handleLogout}
              >
                Log Out
              </button> */}
          </>
        ) : (
          <div className="flex gap-5">
            <NavLink
              style={{
                backgroundColor: dark === "dark" ? "#1a1a1a" : "#ffffff",
                color: dark === "dark" ? "#f1f1f1" : "#000000",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: "scale(1)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                animation: "slideIn 0.5s ease forwards",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              className="flex gap-2 items-center px-5 py-1 rounded-lg font-bold"
              to="/signin"
            >
              <MdLogin
                style={{
                  transition:
                    "transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "rotate(360deg) scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "rotate(0deg) scale(1)")
                }
              />{" "}
              Login
            </NavLink>

            <NavLink
              style={{
                backgroundColor: dark === "dark" ? "#1a1a1a" : "#ffffff",
                color: dark === "dark" ? "#f1f1f1" : "#000000",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: "scale(1)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                animation: "slideIn 0.5s ease forwards",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0px 8px 16px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              className="flex gap-2 items-center px-5 py-1 rounded-lg font-bold"
              to="/signup"
            >
              <FaUserPlus
                style={{
                  transition:
                    "transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "rotate(-360deg) scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "rotate(0deg) scale(1)")
                }
              />{" "}
              Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
