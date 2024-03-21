import React from "react";
import Market from "../MobileLayout/Market";
import Discussion from "../MobileLayout/Discussion";

const DesktopLayout = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-red-500 bg-slate-300 w-fit p-1 ms-2">
            DISSCUSSION FOURM
          </h2>
          <Discussion />
        </div>
        <div className="w-1/2">
          <h2 className="text-red-500 bg-slate-300 w-fit p-1 mb-3">
            MARKET STORIES
          </h2>
          <Market />
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
