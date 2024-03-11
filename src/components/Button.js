import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-3 py-1 m-2 rounded-lg bg-slate-200 font-medium tracking-tight">{name}</button>
    </div>
  );
};

export default Button;
