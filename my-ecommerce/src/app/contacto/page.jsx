import React from "react";
import style from "./contacto.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={style.flexcontainer}>
      <section>
        <div className={style.c_form}>
          <div className={style.c_formulario}>
            <h2>Contáctanos</h2>
            <h3>Escríbenos y tomaremos contacto contigo</h3>
            <form action="submeter-formulario.php" method="post">
              <p>
                <label htmlFor="c_nombre" className={style.c_nombre}>
                  Nombre<span className={style.obligatorio}>*</span>
                </label>
                <input
                  type="text"
                  name="introducir_nombre"
                  id="c_nombre"
                  required
                  placeholder="Escribe tu nombre"
                  className={style.nombre}
                />
              </p>

              <p>
                <label htmlFor="c_email" className={style.c_email}>
                  Email<span className={style.obligatorio}>*</span>
                </label>
                <input
                  type="email"
                  name="introducir_email"
                  id="c_email"
                  required="obligatorio"
                  placeholder="Escribe tu Email"
                  className={style.email}
                />
              </p>
              <p>
                <label htmlFor="c_telefono" className={style.c_telefono}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="introducir_telefono"
                  id="c_telefono"
                  placeholder="Escribe tu teléfono"
                  className={style.telefono}
                />
              </p>
              <p>
                <label htmlFor="mensaje" className={style.c_mensaje}>
                  Mensaje<span className={style.obligatorio}>*</span>
                </label>
                <textarea
                  name="introducir_mensaje"
                  id="mensaje"
                  required="obligatorio"
                  placeholder="Deja aquí tu comentario"
                  defaultValue={""}
                  className={style.mensaje}
                />
              </p>
              <button
                className={style.boton}
                type="submit"
                name="enviar_formulario"
                id="enviar"
              >
                <h4>Enviar</h4>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className={style.image}>
          <a
            className={style.enlace}
            href="https://goo.gl/maps/4xGLeVD3BdMSazMi8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={style.img}
              src="/images/maps.png"
              alt="Imagen"
              width={450}
              height={350}
            />
            <span className={style.overlay}></span>
          </a>
        </div>
      </section>

      <section>
        <div className={style.c_info}>
          <h4>Esencias del Llaima</h4>
          <h5>Faja 2000, Cunco, Araucanía, Chile</h5>
          <br />
          <h5>Hablemos</h5>
          <h5>Correo oscarcunco@gmail.com</h5>
          <h5>WhatsApp +569 93364492</h5>
        </div>
      </section>
    </div>
  );
}
