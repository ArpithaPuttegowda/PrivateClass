import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./RealTimeMediaQuery.css";

export const RealTimeMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={isMobile ? "mobile" : "desktop"}>
      {isMobile ? <h1>Mobile Layout</h1> : <h1>Desktop Layout</h1>}
    </div>
  );
};
