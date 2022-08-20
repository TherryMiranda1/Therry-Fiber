import Images from "./components/Images";
import Places from "./components/Places";
import Example from "./components/Example";
import { Suspense, useState } from "react";
import Switch from "./components/switch/Switch";

const GOLDENRATIO = 1.61803398875;

export default function App({ images }) {
  const [page, setPage] = useState("Images");
  const [day, setDay] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <div
      className=" w-screen h-screen "
      style={{ backgroundColor: !value ? "#191920" : "#e3dede" }}
    >
      <div>
        <Switch
          isOn={value}
          onColor="#f4e04d"
          onOff="#587792"
          handleToggle={() => setValue(!value)}
        />
      </div>
      <div className="width-screen height-screen">
        <Suspense fallback={null}>
          {page === "Images" ? <Images images={images} value={value} /> : null}
        </Suspense>
      </div>
    </div>
  );
}
