import React from "react";
import UserLogo from "../assets/userLogo.svg";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2 shadow-sm space-x-2 text-sm">
      <div className="flex space-x-1">
        <img
          className="h-5 cursor-pointer rounded-full bg-gray-200 "
          src={UserLogo}
          alt="UserLogo"
        />
      </div>
      <div className="">
        <span className="font-light px-1">{name}</span>
        <span className="items-baseline">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
