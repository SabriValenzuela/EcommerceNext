import React from "react";
import style from "./dashboard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <>
      <h3 className={style.bienvenida}>Panel de administración</h3>

      <div className={style.dashboard}>
        <div className={style.contenedor}>
          <div className={style.item}>
            <Link href="./blogFormulario">
              <Image
                src="/images/blog2.png"
                height={200}
                width={250}
                alt="imagen_blog"
              />
              <p>Blog</p>
            </Link>
          </div>

          <div className={style.item}>
            <Link href="#">
              <Image
                src="/images/productos2.png"
                height={200}
                width={250}
                alt="imagen_producto"
              />
              <p>Productos</p>
            </Link>
          </div>
          <div className={style.item}>
            <Link href="#">
              <Image
                src="/images/orden2.png"
                height={200}
                width={250}
                alt="imagen_orden"
              />
              <p>Orden de compra</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
