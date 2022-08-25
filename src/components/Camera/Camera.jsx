import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

export const Camera = () => {
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  const fovCamera =
    window.innerWidth < 800 && getDeviceType() === "mobile"
      ? (window.innerWidth * 2) / 15
      : window.innerWidth < 1000
      ? (window.innerWidth ) / 35
      : (window.innerWidth ) / 60;

  return (
    <PerspectiveCamera
      makeDefault
      position={[30, 0, 0]}
      aspect={window.innerWidth / window.innerHeight}
      target={[0, 0, 0]}
      fov={fovCamera}
    />
  );
};