import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/index";
import { useContext } from "react";
// import DashboardBtn from "./UI/DashboardBtn";
// import { Button, Menu, MenuItem } from "@mui/material";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [state, setState] = useContext(UserContext);
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  console.log("UserContext state in Header:", state);
  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [window.location.pathname]);
  console.log("Current=", current);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setState(null);
    navigate("/login");
  };
  // console.log("UserContext state in Header after:", state);

  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <NavLink
            to="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
              SBlog
            </h1>
          </NavLink>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <NavLink
                  to="/about"
                  className="inline-flex items-center px-4 py-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:bg-gray-900 hover:text-white"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className="inline-flex items-center px-4 py-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:bg-gray-900 hover:text-white"
                >
                  Contact
                </NavLink>
              </li>
              {state !== null ? (
                <li>
                  {/* <NavLink
                    to={"#"}
                    className="inline-flex items-center px-4 py-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:bg-gray-900 hover:text-white"
                  >
                    <span onClick={logout} className="justify-center">
                      Logout
                    </span>
                  </NavLink> */}
                  <select
                    name="DropDown"
                    id="dropdown"
                    className="inline-flex items-center px-2 py-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 w-[100%] cursor-pointer  hover:text-black"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      if (selectedValue === "1") {
                        navigate("user/profile");
                      } else if (selectedValue === "2") {
                        navigate("/user/dashboard");
                      } else if (selectedValue === "3") {
                        logout(e);
                      }
                    }}
                  >
                    <option style={{ padding: "8px 16px" }} value="1">
                      {state !== null ? state.user.name : ""}
                    </option>
                    <option style={{ padding: "8px 16px" }} value="2">
                      Dashboard
                    </option>
                    <option style={{ padding: "8px 16px" }} value="3">
                      Logout
                    </option>
                  </select>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      className="inline-flex items-center px-4 py-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:bg-gray-900 hover:text-white"
                      to={"/login"}
                    >
                      <span className="justify-center">Login</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="inline-flex items-center px-4 py-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 hover:bg-gray-900 hover:text-white"
                      to={"/register"}
                    >
                      <span className="justify-center">SignUp</span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
