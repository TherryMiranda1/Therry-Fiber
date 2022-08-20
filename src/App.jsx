import Images from "./components/Images";
import Places from "./components/Places";
import Example from "./components/Example";
import { useState } from "react";
import  Switch  from "./components/switch/Switch";

const GOLDENRATIO = 1.61803398875;

export default function App({ images }) {
  const [page, setPage] = useState("Images");
  const [day, setDay] = useState(false)
  const [value, setValue] = useState(false);
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
        <Switch
          isOn={value}
          onColor="#f4e04d"
          onOff="#587792"
          handleToggle={() => setValue(!value)}
        />
      </div>
      <div className="width-screen height-screen">
        {page === "Example" ? <Example /> : null}
        {page === "Images" ? <Images images={images} value={value}/> : null}
        {page === "Crystals" ? <Places /> : null}
      </div>
    </div>
  );
}
