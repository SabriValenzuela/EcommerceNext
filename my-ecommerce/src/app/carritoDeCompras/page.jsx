import React from "react";
//import Image from next/image para importar en el futuro img de prodructos
//import Link from 'next/image'
import style from "./carrito.module.css";
import Link from "next/link";

export default function comprasCarrito() {
  return (
    <main className={style.body}>
      <section className={style.cart_page}>
        <h2 className={style.custom_title}>Carrito de Compras</h2>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.tr}>
              <td>Propoleo en Spray</td>
              <td>$4.000</td>
              <td>2</td>
              <td>$8.000</td>
              <td>
                <button className={style.remove_btn}>Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>Llavero</td>
              <td>$1.500</td>
              <td>1</td>
              <td>$1.500</td>
              <td>
                <button className={style.remove_btn}>Eliminar</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total:</td>
              <td colSpan={2}>$9.500</td>
            </tr>
          </tfoot>
        </table>
        <Link href="#" className={style.checkout_btn}>
          Pagar
        </Link>
      </section>
    </main>
  );
}
