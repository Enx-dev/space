import { useState, useEffect } from "react";

const useImage = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: document.documentElement.clientWidth,
    winHeight: document.documentElement.clientHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: document.documentElement.clientWidth,
      winHeight: document.documentElement.clientHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  return windowDimenion;
};

export default useImage;
