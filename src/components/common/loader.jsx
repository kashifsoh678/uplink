"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 3000); // Animation runs for 1s
    return () => clearTimeout(timer);
  }, []);

  return <span className={`loader ${animate ? "animate" : ""}`}></span>;
};

export default Loader;
