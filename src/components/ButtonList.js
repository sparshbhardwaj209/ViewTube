import Button from "./Button";
import React from "react";

const buttons = [
  "All",
  "Gaming",
  "Drones",
  "News",
  "Stocks",
  "Hiking",
  "Flights",
  "Live",
  "History",
];

const ButtonList = () => {
  return (
    <div className="">
      <style>
        {`
      .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scroll-bar::-webkit-scrollbar {
        display: none;
      }`}
      </style>

      {/* sm:max-w-screen-lg md:max-w-screen-md lg:max-w-screen-lg  */}

      <div>
        <div className="flex overflow-x-scroll pb-1 hide-scroll-bar">
          <div className="flex flex-nowrap w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl max-w-full mx-auto space-x-1">
            {buttons.map((button, index) => (
              <Button key={index} name={button} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="flex overflow-x-scroll hide-scroll-bar border-2 border-black">
          <div className="flex flex-nowrap">
            {buttons.map((button) => (
              <Button name={button.name} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ButtonList;
