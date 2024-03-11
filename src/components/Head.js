import React from "react";
import MenuLogo from "../assets/menuLogo.svg";
import YtLogo from "../assets/ytLogo.png";
import UserLogo from "../assets/userLogo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col px-2 py-3  items-center">
      <div className="flex col-span-1">
        <img
          className="h-6 mx-1  cursor-pointer hover:bg-slate-200 hover:rounded-full"
          src={MenuLogo}
          alt="Hamberger Icon"
          onClick={()=> toggleMenuHandler()}
        />
        <img className="h-6 cursor-pointer" src={YtLogo} alt="Youtube Logo" />
      </div>
      <div className="col-span-10 px-10 text-center">
        <input
          className="border border-gray-400 rounded-l-full p-1  pl-3 w-2/4"
          type="text"
          placeholder="Search"
        />
        <button className="border bg-slate-200 border-gray-400 rounded-r-full px-5 py-1">
          Search
        </button>
        {/* <p>Mic</p> */}
      </div>
      <div className="col-span-1 flex space-x-2 justify-end mr-3">
        <p className="cursor-pointer hover:bg-gray-200 hover:rounded-full">
          <VideoCallIcon />
        </p>
        <p className="cursor-pointer hover:bg-gray-200 hover:rounded-full">
          <NotificationsNoneIcon />
        </p>
        <img className="h-6 cursor-pointer hover:bg-gray-200 hover:rounded-full" src={UserLogo} alt="UserLogo" />
      </div>
    </div>
  );
};

export default Head;
