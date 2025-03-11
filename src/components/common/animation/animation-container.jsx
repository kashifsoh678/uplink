"use client";
import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";
const AnimationContainer = ({ animation = "", className }) => {
  const animationContainer = createRef();
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current, // Use 'container' instead of 'containerProject'
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: `${animation}`
    //   path: ``,
    });
    return () => anim.destroy();
  }, []);

  return (
    <>
      <div
        className="flex items-center justify-center h-full"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className={className} ref={animationContainer} />
      </div>
    </>
  );
};

export default AnimationContainer;
