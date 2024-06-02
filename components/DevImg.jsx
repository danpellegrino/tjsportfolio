"use client";
import React from "react";

import Image from "next/image";
import { useTheme } from "next-themes";

const DevImg = ({ containerStyles, lightImgSrc, darkImgSrc }) => {
  const { theme } = useTheme();
  const background =
    theme === "light" ? "/about/shape-light.svg" : "/about/shape-dark.svg";
  const image = theme === "light" ? darkImgSrc : lightImgSrc;
  return (
    <div className={`${containerStyles}`}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto drop-shadow-3xl dark:drop-shadow-white-xl"
        src={background}
        priority
        alt=""
      />
      <Image
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto absolute top-0 left-0 "
        src={image}
        priority
        alt=""
      />
      <Image
        src="/about/frame.svg"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto absolute top-0 left-0 opacity-80 drop-shadow-blue-3xl"
        priority
        alt=""
      />
    </div>
  );
};

export default DevImg;
