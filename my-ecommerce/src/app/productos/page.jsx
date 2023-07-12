"use client";
import React from "react";
import Card from "../componentes/cardProductos";
import style from "./productos.module.css";
import ProductosPagina from "./productosPagina";
import { useState } from "react";

export default function page() {
  const [carrito, setCarrito] = useState([]);
  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <h1 className={style.titulo}>Productos</h1>
      </div>
      <div className={style.flex}>
        <ProductosPagina handleClick={handleClick} />
      </div>
    </>
  );
}
