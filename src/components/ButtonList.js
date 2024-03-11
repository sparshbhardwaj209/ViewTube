import Button from "./Button";
import React from "react";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Drones" />
      <Button name="News" />
      <Button name="Stocks" />
      <Button name="Hiking" />
      <Button name="Flights" />
      <Button name="Live" />
      <Button name="History" />
    </div>
  );
};

export default ButtonList;
