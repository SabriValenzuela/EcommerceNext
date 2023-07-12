"use client";
import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import productos from "@/app/productos/productosPagina";

export default function Card({ item, handleClick }) {
  /* console.log(props);
  const handleClick = () => {
    console.log(props);
  }; */

  return (
    <>
      <div className={style.container_prod}>
        <div className={style.carta_prod}>
          <h5 className={style.titulo_item}>{item.nombre}</h5>
          <Image
            src="/images/PropoleoSpray_1.jpg"
            className={style.img_item}
            alt={`imagen${item.id}`}
            width={190}
            height={240}
          />

          <div className={style.capa}>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <button onClick={(_) => handleClick(item)}>Agregar al carro</button>
          </div>
          <h5 className={style.precio_item}>${item.precio}</h5>
        </div>
      </div>
    </>
  );
}
