import React from "react";
import Slider from "./Slider";
import {
  sectionFrontendTecnologies,
  sectionBackendTecnologies,
  sectionMobileTecnologies,
  sectionAnotherTecnologies,
} from "./utils/Sections";

function TextScreen({ item, value, colors }) {
  return (
    <div
      className="w-screen h-full p-5"
      style={{
        background: value ? colors.white.background : colors.black.background,
      }}
    >
      {item === 1 ? (
        <div>
          <h1
            className=""
            style={{
              background: value
                ? colors.white.background
                : colors.black.background,
            }}
          >
            Frontend
          </h1>
          <section>
            <h2
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Tecnologias
            </h2>
            <Slider
              section={sectionFrontendTecnologies}
              value={value}
              colors={colors}
            />
            <p
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
          <section>
            <h2
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Trabajos Realizados
            </h2>
            <p
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
          <section>
            <h2
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Metodologias
            </h2>
            <p
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
        </div>
      ) : null}
      {item === 2 ? (
        <div>
          <h1
            style={{
              color: value ? colors.white.font : colors.black.font,
            }}
          >
            Backend
          </h1>
          <section>
            <h2
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Tecnologias
            </h2>
            <Slider
              section={sectionBackendTecnologies}
              value={value}
              colors={colors}
            />
            <p
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
          <section>
            <h2
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Trabajos Realizados
            </h2>
            <p
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
          <section>
            <h2
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Metodologias
            </h2>
            <p
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
        </div>
      ) : null}
      {item === 3 ? (
        <div>
          <h1
            style={{
              color: value ? colors.white.font : colors.black.font,
            }}
          >
            Mobile
          </h1>
          <section>
            <h2
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Tecnologias
            </h2>
            <Slider
              section={sectionMobileTecnologies}
              value={value}
              colors={colors}
            />
            <p
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
          <section>
            <h2
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Trabajos Realizados
            </h2>
            <p
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
          <section>
            <h2
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Metodologias
            </h2>
            <p
              style={{
                color: value ? colors.white.font : colors.black.font,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eveniet eius expedita laudantium quaerat. Sapiente qui
              assumenda veniam illum, cumque dignissimos in quibusdam. Libero
              quae dolor, odio quidem non blanditiis?
            </p>
          </section>
        </div>
      ) : null}
    </div>
  );
}

export default TextScreen;
