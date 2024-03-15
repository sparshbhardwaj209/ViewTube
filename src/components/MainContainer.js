import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col ">
      <div className="hidden lg:block">
        <ButtonList />
      </div>
      <div className="">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
