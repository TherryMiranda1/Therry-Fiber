import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

export const getDeviceType = () => {
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

export const Camera = () => {
  

  const fovCamera =
    window.innerWidth < 800 && getDeviceType() === "mobile"
      ? (window.innerWidth) / 5
      : window.innerWidth < 1000
      ? (window.innerWidth ) / 15
      : (window.innerWidth ) / 30;

  return (
    <PerspectiveCamera
      makeDefault
      position={[20, 0, 0]}
      aspect={window.innerWidth / window.innerHeight}
      target={[0, 0, 0]}
      fov={fovCamera}
    />
  );
};