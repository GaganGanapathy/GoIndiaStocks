"use client";

import React, { useState } from "react";
import Discussion from "./Discussion";
import Market from "./Market";

const MobileLayout = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex  w-full  items-center mb-1">
        <button
          className={`w-1/2 py-1 ${
            show ? "bg-blue-600" : "bg-blue-950"
          }  text-white text-center`}
          onClick={handleClick}
        >
          Disscussion Fourm
        </button>
        <button
          className={`w-1/2 py-1 ${
            show ? "bg-blue-950" : "bg-blue-600"
          }  text-white text-center`}
          onClick={handleClick}
        >
          Market stories
        </button>
      </div>
      {show ? <Market /> : <Discussion />}
    </>
  );
};

export default MobileLayout;
