import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import style from "./carritoCompras.module.css";
import Link from "next/link";

export default function CarritoCompras() {
  return (
    <header>
      <div id="cart" class={style.cart} data-totalitems="0">
        <Link href="./carritoDeCompras">
          <FaShoppingCart className={style.i} />
        </Link>
      </div>
    </header>
  );
}
