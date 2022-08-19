import Images from "./components/Images";
import Places from "./components/Places";
import Example from "./components/Example";
import { useState } from "react";

const GOLDENRATIO = 1.61803398875;

export default function App({ images }) {
  const [page, setPage] = useState("Images");
  return (
    <div className=" w-screen h-screen">
      <div>
        <button
          onClick={() => setPage("Images")}
          className="m-1 font-semibold w-20 p-1 bg-slate-900 text-white "
        >
          Pictures
        </button>
        <button
          onClick={() => setPage("Crystals")}
          className="m-1 font-semibold w-20 p-1 bg-slate-900 text-white "
        >
          Crystals
        </button>
        <button
          onClick={() => setPage("Example")}
          className="m-1 font-semibold w-20 p-1 bg-slate-900 text-white "
        >
          Example
        </button>
      </div>
      <div className="width-screen height-screen">
        {page === "Example" ? <Example /> : null}
        {page === "Images" ? <Images images={images} /> : null}
        {page === "Crystals" ? <Places /> : null}
      </div>
    </div>
  );
}
