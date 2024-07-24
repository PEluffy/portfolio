import React, { useState } from "react";
import "./Navbar.css";

export function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav>
      <div className="navbar-container flex items-center">
        <div
          className={`title  text-larger ${
            sidebarOpen ? "basis-4/12" : "basis-3/4"
          } transition-all `}
        >
          Portfolio
        </div>
        <div
          className={`home text-center ${
            sidebarOpen ? "basis-3/12" : "basis-1/6"
          } transition-all `}
        >
          Home
        </div>
        <div
          className={`projects text-center ${
            sidebarOpen ? "basis-3/12" : "basis-1/6"
          } transition-all `}
        >
          Projects
        </div>
        <div
          className={` relative  flex flex-col ${
            sidebarOpen ? "basis-2/12  " : "w-0"
          } transition-all `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={`${sidebarOpen ? "white" : "currentColor"}`}
            className={`size-6 cursor-pointer z-10 ${
              sidebarOpen ? "self-start rotate-90" : "self-end"
            }`}
            onClick={toggleSidebar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
          {sidebarOpen && (
            <div className="items-center justify-center space-y-8  sidebarComponents flex-col flex text-stone-50 absolute right-0 top-0 w-full p-5 rounded-lg bg-slate-900">
              <div>
                <button className="border border-solid p-2 rounded-lg bg-own">
                  Connect!
                </button>
              </div>
              <div className="flex justify-between">
                <img className="icon" src="./img/facebook.svg" alt="fb"></img>{" "}
              </div>
              <div className="flex">
                <img
                  className="icon "
                  src="./img/linkedin.svg"
                  alt="linkedin"
                ></img>
              </div>
              <div className="flex space-x-4">
                <img className="icon" src="./img/github.svg" alt="mail"></img>
              </div>
              <div className="buttombar text-sm border-t border-gray-600 pt-4 mt-4 w-full flex items-center space-x-3 justify-center">
                <div className="shortform border p-1 rounded-lg bg-own">PK</div>
                <div className=""></div>
                {/* <div>
                  <div className="name">Prashanna</div>
                  <span>kafleprakrit</span>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
