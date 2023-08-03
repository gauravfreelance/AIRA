/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle, BiNews, BiHelpCircle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillImageFill, BsCartCheck } from "react-icons/bs";
import {
  MdDashboardCustomize,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
//import { toast } from "react-toastify";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3" />,
      link: "/dashboard",
      name: "Dashboard",
    },

    {
      icon: <AiOutlineUser className="text-xl mr-3" />,
      link: "/customer",
      name: "Users",
    },
    {
      icon: <BsFillImageFill className="text-xl mr-3" />,
      link: "/cat",
      name: "Banner",
    },
  ];

  // const logOut = async (e) => {
  //   localStorage.removeItem("token");
  //   toast.success("Log-Out SuccessFull");
  //   navigate("/");
  // };

  return (
    <>
      <aside className="p-4" style={{ backgroundColor: "#6755DF" }}>
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
            style={{
              color: "#aac0bb",
            }}
          />
        </div>
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[#fff]"
            style={{ fontSize: "2rem", textAlign: "center" }}
          >
            Admin Panel
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link to={nav.link} key={nav.name} className="">
                <span
                  className="flex my-3 items-center cursor-pointer  tracking-wider p-2 rounded-sm"
                  style={{ color: "#aac0bb" , textDecoration : 'none' }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}

          <span
            // onClick={() => logOut()}
            style={{ color: "#aac0bb" }}
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
          >
            <BiLogOutCircle className="text-xl mr-3" /> Logout
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
