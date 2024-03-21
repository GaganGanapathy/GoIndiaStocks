"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DesktopLayout from "./DesktopLayout/DesktopLayout";
import MobileLayout from "./MobileLayout/MobileLayout";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMediaQuery = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);
  });
  return (
    <main className=" lg:flex">
      <Sidebar />
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </main>
  );
}
