import React from 'react'
import CarrouselComponent from './Carrousel'

function TextScreen({item, value, colors}) {
  return (
    <div className="w-screen h-screen m-5">
        {item === 1 ? (
          <div>
            <h1
              className=""
              style={{
                color: value ? colors.white.font : colors.black.font,
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
              <CarrouselComponent/>
              <p
                className=""
                style={{
                  color: value ? colors.white.font : colors.black.font,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
              <p
                style={{
                  color: value ? colors.white.font : colors.black.font,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
              <p
                style={{
                  color: value ? colors.white.font : colors.black.font,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
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
                Doloremque eveniet eius expedita laudantium quaerat. Sapiente
                qui assumenda veniam illum, cumque dignissimos in quibusdam.
                Libero quae dolor, odio quidem non blanditiis?
              </p>
            </section>
          </div>
        ) : null}
      </div>
  )
}

export default TextScreen