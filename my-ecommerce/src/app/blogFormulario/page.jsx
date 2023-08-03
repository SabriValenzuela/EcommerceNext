"use client";
import React, { useEffect, useState } from "react";
import style from "./blogFormulario.module.css";
import { postBlog } from "../../service/productosServices";
import { useSession } from "next-auth/react";

export default async function page() {
  /*   const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  } */

  const [formData, setFormData] = useState({
    blog_titulo: "",
    blog_fecha: "",
    blog_contenido: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      blog_titulo: formData.blog_titulo,
      blog_fecha: formData.blog_fecha,
      blog_contenido: formData.blog_contenido,
    };
    postBlog(formattedData)
      .then(() => {
        console.log("Blog creado");
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log(formattedData);
  };

  return (
    <main className={style.body}>
      <section id={style.formulario}>
        <h2>Crear una publicación</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="blog_fecha"
            required
            className={style.campo_fecha}
            value={formData.blog_fecha}
            onChange={handleChange}
          />
          <input
            type="text"
            name="blog_titulo"
            placeholder="Título"
            required
            value={formData.blog_titulo}
            onChange={handleChange}
          />
          <input
            className={style.textarea}
            type="text"
            name="blog_contenido"
            placeholder="Contenido"
            required
            value={formData.blog_contenido}
            onChange={handleChange}
          />
          <input
            className={style.input}
            type="file"
            id="Archivo"
            name="archivo"
            /*   value={}
            onChange={handleChange}  */
          />
          <button className={style.formulario_button} type="submit">
            Publicar
          </button>
        </form>
      </section>
    </main>
  );
}
