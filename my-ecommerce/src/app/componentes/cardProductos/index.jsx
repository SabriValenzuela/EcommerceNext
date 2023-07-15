"use client";
import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import productos from "@/app/productos/productosPagina";
import { useAppContext } from "../estadoContenedor";

export default function Card({ item }) {
  const cart = useAppContext();
  function handleClick() {
    console.log(item);
    cart.addItemToCart(item);
  }
  return (
    <>
      <div className={style.container_prod}>
        <div className={style.carta_prod}>
          <h5 className={style.titulo_item}>{item.producto_nombre}</h5>
          <Image
            src="/images/PropoleoSpray_1.jpg"
            className={style.img_item}
            alt={`imagen${item.id}`}
            width={190}
            height={240}
          />

          <div className={style.capa}>
            <h3>{item.producto_nombre}</h3>
            <p>{item.producto_descripcion}</p>
            <button onClick={handleClick}>Agregar al carro</button>
          </div>
          <h5 className={style.precio_item}>${item.producto_precio}</h5>
        </div>
      </div>
    </>
  );
}
