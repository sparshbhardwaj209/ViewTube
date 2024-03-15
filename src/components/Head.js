import React, { useEffect, useState } from "react";
import MenuLogo from "../assets/menuLogo.svg";
import YtLogo from "../assets/ytLogo.png";
import UserLogo from "../assets/userLogo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex px-2 py-3 w-full  items-center justify-between">
      <div className="flex space-x-1">
        <img
          className="h-6 mx-1  cursor-pointer hover:bg-slate-200 hover:rounded-full"
          src={MenuLogo}
          alt="Hamberger Icon"
          onClick={() => toggleMenuHandler()}
        />
        <div className="hidden md:block">
          <img className="h-6 cursor-pointer" src={YtLogo} alt="Youtube Logo" />
        </div>
      </div>

      <div className="sm:px-2 md:px-10 lg:px-16 lg:mx-24 flex text-center md:flex-grow relative">
        <input
          className="md:flex-grow border border-gray-400 rounded-l-full p-1  pl-3 "
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border bg-slate-200 border-gray-400 rounded-r-full sm:text-sm text-base px-1 lg:px-5 py-1">
          Search
        </button>
        {showSuggestions && (
          <div className="absolute inset-y-10 inset-x-auto flex flex-col items-center bg-white">
            <ul className="py-2 shadow-lg rounded-xl px-5 w-fit bg-white border-gray-100">
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 flex hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className=" flex md:space-x-2 justify-end md:mr-3">
        <p className="cursor-pointer hover:bg-gray-200 hover:rounded-full">
          <VideoCallIcon />
        </p>
        <p className="cursor-pointer hover:bg-gray-200 hover:rounded-full">
          <NotificationsNoneIcon />
        </p>
        <img
          className="h-6 cursor-pointer hover:bg-gray-200 hover:rounded-full"
          src={UserLogo}
          alt="UserLogo"
        />
      </div>
    </div>
  );
};

export default Head;
