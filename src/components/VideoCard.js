import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  // console.log(snippet);
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 p-1 m-1">
      <img className=" rounded-xl object-contain" src={thumbnails?.high?.url} alt="thumbnails" />
      <ul>
        <li className="font-medium py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
