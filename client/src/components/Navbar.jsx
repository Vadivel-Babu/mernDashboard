import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdHome, MdCreateNewFolder } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="h-screen w-max bg-primarycolor text-white">
      <h1 className="p-2 text-3xl font-bold text-center">CRM</h1>
      <div className=" flex flex-col gap-4 mt-10">
        <Link
          to="/"
          className={`py-2 px-5 flex gap-2 items-center transition-all hover:bg-[#ff78fa] hover:text-violet-700 ${
            pathname === "/" ? "bg-[#ff78fa] text-violet-700" : ""
          } `}
        >
          <MdHome className="text-xl" /> Home
        </Link>
        <Link
          to="/student"
          className={`py-2 px-5 font-semibold flex gap-2 items-center  transition-all hover:bg-[#ff78fa] hover:text-violet-700 ${
            pathname.includes("/student") ? "bg-[#ff78fa] text-violet-700" : ""
          } `}
        >
          <PiStudent className="text-xl" /> Students
        </Link>
        <Link
          to="/teacher"
          className={`py-2 px-5 flex gap-2 items-center  transition-all hover:bg-[#ff78fa] hover:text-violet-700 ${
            pathname.includes("/teacher") ? "bg-[#ff78fa] text-violet-700" : ""
          }`}
        >
          <GiTeacher className="text-xl" /> Teachers
        </Link>
        <Link
          to="/class"
          className={`py-2 px-5 flex gap-2 items-center transition-all hover:bg-[#ff78fa] hover:text-violet-700 ${
            pathname.includes("/class") ? "bg-[#ff78fa] text-violet-700" : ""
          }`}
        >
          <SiGoogleclassroom className="text-xl" /> Classes
        </Link>
        <Link
          to="form/create"
          className={`py-2 px-5 flex gap-2 items-center transition-all hover:bg-[#ff78fa] hover:text-violet-700 ${
            pathname.includes("/form") ? "bg-[#ff78fa] text-violet-700" : ""
          }`}
        >
          <MdCreateNewFolder className="text-xl" /> Create
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
