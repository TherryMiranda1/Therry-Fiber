import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import Images from "./components/Images";
import getUuid from "uuid-by-string";
import Places from "./components/Places";

const GOLDENRATIO = 1.61803398875;

export default function App({ images }) {
  const [page, setPage] = useState('Images')
  return (
    <div className=" w-screen h-screen">
      <div>
        <button onClick={()=>setPage('Images')} className="m-1 font-semibold w-20 p-1 bg-slate-900 text-white ">Pictures</button>
        <button onClick={()=>setPage('Crystals')} className="m-1 font-semibold w-20 p-1 bg-slate-900 text-white ">Crystals</button>
      </div>
      <div>
        {page==='Images'?<Images images={images}/>:null}
        {page==='Crystals'?<Places/>:null}
      </div>
    </div>
  );
}
