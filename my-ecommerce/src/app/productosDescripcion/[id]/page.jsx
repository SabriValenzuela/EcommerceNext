"use client";
import React from "react";
import style from "./productosDescripcion.module.css";
import Link from "next/link";
import Image from "next/image";
import { getItemsById } from "../../../service/productosServices";
import { useAppContext } from "../../componentes/estadoContenedor/index";

export default async function ProductoDescripcion({ params }) {
  const cart = useAppContext();
  const id = params.id;
  const data = await getItemsById(id);

  function handleClick() {
    cart.addItemToCart(data);
  }

  return (
    <>
      <div className={style.contenidoProductos}>
        <div className={style.columna1Prod}>
          <ul id="zoom">
            <li>
              <Image
                src="/images/PropoleoSpray_1.jpg"
                id="img.zoom_1"
                alt="imagenproductos"
                width={150}
                height={160}
              />
            </li>
          </ul>
        </div>
        <div className={style.columna2Prod}>
          <h2 className={style.info_title}>{data.producto_nombre}</h2>
          <h4> {data.producto_categoria} </h4>
          <p className={style.propoleo}>{data.producto_descripcion}</p>
          <h2 className={style.info_precio}>{data.producto_precio}</h2>

          <Link href="/carritoDeCompras">
            <button className={style.agregarAlCarro} onClick={handleClick}>
              Agregar al carrito
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
