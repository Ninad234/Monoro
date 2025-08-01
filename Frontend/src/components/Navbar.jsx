import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "./../context/AuthProvider";
import Logout from "./Logout";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  const [theme, setTheme] = useState(() => {
  if (typeof window !== "undefined") {  // !== kiya!
    return localStorage.getItem("theme") || "light";
  }
  return "light";
});

  const [sticky, setsticky] = useState(false);
  const element = document.documentElement;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = (
    <>
      <li>
        <a href="/" className="text-black font-bold hover:bg-gray-500 hover:text-white">Home</a>
      </li>
      <li>
        <a href="/collection" className="text-black font-bold hover:bg-gray-500 hover:text-white">Collection</a>
      </li>
      <li>
        <a href="/about" className="text-black font-bold hover:bg-gray-500 hover:text-white">About</a>
      </li>
      <li>
        <a href="/contact" className="text-black font-bold hover:bg-gray-500 hover:text-white">Contact us</a>
      </li>
    </>
  );
  return (
    <nav className={`w-full navbar shadow-md sticky top-0 z-50 transition-colors duration-300 mb-8 ${scrolled ? 'bg-gray-100' : 'bg-base-100'}`}>
      <div className="w-full flex items-center justify-between m-0 p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">
              <img src="../assets/logo.png" alt="" /> Monoro
            </a>
          </div>
          {/* Navitems */}
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            {/* Search Bar */}
            <div className="hidden md:block">
              <label className="px-3 py-2 input input-ghost rounded-md">
                <input
                  type="search"
                  className="grow outline-none bg-transparent"
                  placeholder="Search"
                />
                <svg
                  className="h-[1.3em] opacity-50 w-[2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
              </label>
            </div>
            {/* Theme label */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onClick
                type="checkbox"
                className="theme-controller hidden"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <Link to="/cart" className="ml-4 flex items-center hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.66 18h7.59a2.25 2.25 0 002.16-1.59l2.25-7.5A1.125 1.125 0 0020.25 6H6.272m-1.166 0L4.5 4.5m0 0L3.75 3m.75 1.5h16.5" />
              </svg>
            </Link>
            <Link to="/orders" className="ml-4 font-semibold hover:text-primary">Orders</Link>

            {authUser ? (
              <div className="flex items-center space-x-2">
                <span className="hidden sm:block text-sm">
                  Welcome, {authUser.fullname || authUser.email || "User"}
                </span>
                <Logout />
              </div>
            ) : (
              <div>
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 active:bg-slate-500 duration-300 cursor-pointer"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_5");
                    if (modal) {
                      modal.showModal();
                    }
                  }}
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
