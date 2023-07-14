import React from "react";
import style from "./blogPublicaciones.module.css";
import Image from "next/image";
import { getBlog } from "@/service/productosServices";

export default async function page() {
  const blogs = await getBlog();

  return (
    <main>
      <section id="publicaciones_container" className={style.contenedores}>
        <h2>Blog</h2>
        <br />
        <div className={style.publicacion}>
          {blogs.map((blog, index) => (
            <>
              <div className={style.post_date}>{blog.blog_fecha}</div>
              <h3>{blog.blog_titulo}</h3>
              <Image
                className={style.img}
                src="/images/inmuno.jpg"
                alt="Imagen de la publicación"
                width={500}
                height={400}
              />
              <p>{blog.blog_contenido}</p>
            </>
          ))}{" "}
        </div>
      </section>
      <div className={style.container}>
        <button className={style.boton_ver_todas}>
          Ver todas las publicaciones
        </button>
        <button className={style.boton_ordenar_fecha}>Ordenar por fecha</button>
      </div>
    </main>
  );
}
