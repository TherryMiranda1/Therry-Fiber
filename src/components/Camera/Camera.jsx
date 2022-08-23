import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

export const Camera = () => {
  return (
    <PerspectiveCamera makeDefault position={[30,0,0]} aspect={window.innerWidth / (window.innerHeight/2)} target={[0,0,0]} fov={26}/>
  )
}
