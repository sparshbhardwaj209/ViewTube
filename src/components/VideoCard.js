import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="sm:w-64 md:w-96 lg:w-96 xl:96  w-96 p-1 m-1">
      <img
        className=" rounded-xl object-contain"
        src={thumbnails?.high?.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-medium py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className=" border border-black">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
