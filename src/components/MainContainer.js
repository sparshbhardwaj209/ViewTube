import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="row-span-2 border-2 border-green-500">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
