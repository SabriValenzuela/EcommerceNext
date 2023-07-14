import React from "react";
import style from "./blogFormulario.module.css";

export default function page() {
  return (
    <main className={style.body}>
      <section id={style.formulario}>
        <h2>Crear una publicación</h2>
        <form>
          <input
            type="date"
            name="fecha"
            required
            className={style.campo_fecha}
          />
          <input type="text" placeholder="Título" required />
          <textarea
            className={style.textarea}
            placeholder="Contenido"
            required
            defaultValue={""}
          />
          <input
            className={style.input}
            type="file"
            id="Archivo"
            name="archivo"
          />
          <button className={style.formulario_button} type="submit">
            Publicar
          </button>
        </form>
      </section>
    </main>
  );
}
