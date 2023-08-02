/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../components/layout/HOC";
import { FaUserFriends, FaUserAlt } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { FcProcess } from "react-icons/fc";
import axios from "axios";

// export const dash = (data) => {
//   return data;
// };

 const Dashboard = () => {
//   const [countSupllier, setCountSupllier] = useState("");
//   const [countBuyer, setCountBuyer] = useState("");
//   const [countTransporter, setCountTransporter] = useState("");

//   const fetchSupplier = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/supplier"
//       );
//       setCountSupllier(data.message.length);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const fetchBuyer = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/buyer"
//       );
//       setCountBuyer(data.total);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const fetchTransporter = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/transpoter"
//       );
//       setCountTransporter(data.message.length);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchSupplier();
//     fetchBuyer();
//     fetchTransporter();
//   }, []);

  const card = [
    // {
    //   progress: "bg-blue-400",
    //   title: "Total Registered Sellers",
    // //   number: countSupllier,
    // number:"5",
    //   icon: <FaUserFriends className="text-2xl text-[#ff5370]" />,
    //   bg: "#ff5370",
    // },
    // {
    //   progress: "bg-green-400",
    //   title: "Total Buyers",
    // //   number: countBuyer ? countBuyer : 0,
    // number:"26",
    //   icon: <FaUserAlt className="text-2xl text-[#4099ff]" />,
    //   bg: "#4099ff",
    // },
    // {
    //   progress: "bg-yellow-400",
    //   title: "Transporter",
    // //   number: countTransporter,
    // number:"45",
    //   icon: <AiFillCar className="text-2xl text-[#2ed8b6]" />,
    //   bg: "#2ed8b6",
    // },
    // {
    //   progress: "bg-yellow-400",
    //   title: "Pending Auction",
    //   number: "150",
    //   icon: <FcProcess className="text-2xl text-[#ffb64d]" />,
    //   bg: "#ffb64d",
    // },
    // {
    //   progress: "bg-yellow-400",
    //   title: " In Process Auction",
    //   number: "150",
    //   icon: <FcProcess className="text-2xl text-[#232b4b]" />,
    //   bg: "#232b4b",
    // },
    // {
    //   progress: "bg-yellow-400",
    //   title: "Completed Auction",
    //   number: "150",
    //   icon: <FcProcess className="text-2xl text-[#5b63d3]" />,
    //   bg: "#5b63d3",
    // },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
     
        {card.map((card , index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              style={{ backgroundColor: `${card.bg}` }}
              key={index}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
