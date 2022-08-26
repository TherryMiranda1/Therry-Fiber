import React from "react";
import { sectionMobileTecnologies } from "./utils/Sections";
import "../index.css";

function Slider({ section, value, colors }) {
  const shadow = value ? "white" : "black";
  return (
    <div className={"p-3"}>
      Principal
      <div>
        Container
        <div>
          Columnas
          <div>
            wrapperSlider
            <div
              className="wrapper"
            >
              {section.map((tecnologie) => {
                const img = tecnologie.image;
                return (
                  <div
                    className={` slide ${
                      window.innerWidth > 800 ? " m-5" : "m-5"
                    } shadow-md  rounded-xl h-72 min-w-md w-80 max-h-xs ${
                      value
                        ? "shadow-black-100 bg-white "
                        : "shadow-neutral-500 bg-black"
                    } `}
                    key={tecnologie.id}
                  >
                    <div className="slideContainer" style={{ minWidth: 240 }}>
                      <div className="image rounded-xl absolute h-44 bg-white w-80 ">
                        {img ? (
                          <img
                            src={img}
                            alt={`tecnologie image ${tecnologie.title}`}
                            className="image"
                          />
                        ) : null}
                      </div>
                      <div>
                        <h3>{tecnologie.title}</h3>
                      </div>
                      <div>
                        <h3>{tecnologie.experience}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
