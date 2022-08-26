import Images from "./components/Images";
import Places from "./components/Places";
import Example2 from "./components/Example2";
import { Suspense, useState } from "react";
import Switch from "./components/switch/Switch";

const GOLDENRATIO = 1.61803398875;

const colors = {
  black: {
    background: "black",
    fog: "#191920",
    reflector: "#101010",
    font: "white",
  },
  white: {
    background: "#e3dede",
    fog: "#e3dede",
    reflector: "#8c8888",
    font: "black",
  },
};

export default function App({ images }) {
  const [page, setPage] = useState("Example2");
  const [day, setDay] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <div
      className=" w-screen h-screen "
      style={{ backgroundColor: !value ? "black" : "#e3dede" }}
    >
      {/* <button onClick={()=>setPage("Example2")}>Ejemplo2</button> */}
      <div className="absolute"><Switch
          isOn={value}
          onColor="#f4e04d"
          onOff="#587792"
          handleToggle={() => setValue(!value)}
        /></div>
        

      <div className="w-screen h-screen "
      style={{
        background: value ? colors.white.background : colors.black.background,
      }}>
        <Suspense fallback={null}>
          {page === "Images" ? (
            <Images images={images} colors={colors} value={value} />
          ) : null}
          {page === "Example2" ? (
            <Example2 colors={colors} value={value} />
          ) : null}
        </Suspense>
      </div>
      
    </div>
  );
}
