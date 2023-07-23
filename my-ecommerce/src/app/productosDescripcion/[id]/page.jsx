import React from "react";
import style from "./productosDescripcion.module.css";
import Link from "next/link";
import Image from "next/image";
import { getItemsById } from "../../../service/productosServices";

export default function ProductoDescripcion({ params }) {
  const id = params.id;
  const data = getItemsById({ id });
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
          <h2 className={style.info_title}>
            {/* {item.producto_nombre} */} hola
          </h2>
          <h4>{/* {item.producto_categoria} */} categoria</h4>
          <p className={style.propoleo}>
            {/* {item.producto_descripcion} */} descripcion
          </p>
          <h2 className={style.info_precio}>
            {/* {item.producto_precio} */} precio
          </h2>
          <br />
          <br />
          <Link href="/carritoDeCompras">
            <button className={style.agregarAlCarro}>Agregar al carrito</button>
          </Link>
        </div>
      </div>
    </>
  );
}
