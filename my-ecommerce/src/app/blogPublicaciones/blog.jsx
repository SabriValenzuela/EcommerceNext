import React from 'react'
import style from './blogPublicaciones.module.css'

export default function blog() {
    return (
      <main>   
      <section id={style.formulario}>
        <h2>Crear una publicación</h2>
        <form>
          <input type="date" name="fecha" required className={style.campo_fecha} />
          <input type="text" placeholder="Título" required />
          <textarea placeholder="Contenido" required defaultValue={""} />
          <input type="file" id="Archivo" name="archivo" /> 
          <button type="submit">Publicar</button>
        </form>
      </section>
    </main>
    );
};