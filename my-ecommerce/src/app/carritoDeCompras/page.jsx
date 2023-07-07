import React from 'react'
//import Image from next/image para importar en el futuro img de prodructos
//import Link from 'next/image'
import style from './carrito.module.css'

export default function page() {
  return (
    <main>
  <section className={style.cart_page}>
    <h2 className={style.custom_title}>Carrito de Compras</h2>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody> 
        <tr>
          <td>Propoleo en Spray</td>
          <td>$4.000</td>
          <td>2</td>
          <td>$8.000</td>
          <td><button className={style.remove_btn}>Eliminar</button></td>
        </tr>
        <tr>
          <td>Llavero</td>
          <td>$1.500</td>
          <td>1</td>
          <td>$1.500</td>
          <td><button className={style.remove_btn}>Eliminar</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Total:</td>
          <td colSpan={2}>$9.500</td>
        </tr>
      </tfoot>
    </table>
    <a href="#" className={style.checkout_btn}>Pagar</a>
  </section>
</main>
  )
}