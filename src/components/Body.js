import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    // <div className='grid grid-flow-col gap-4'>
    //   <div className='col-span-1'>
    //     <Sidebar />
    //   </div>
    //   <div className='col-span-8'>
    //      <Outlet />
    //   </div>
    // </div>
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
