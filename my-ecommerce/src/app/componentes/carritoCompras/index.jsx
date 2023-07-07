import React from 'react'
import style from './carritoCompras.module.css'
import { headers } from 'next/dist/client/components/headers'

export default function CarritoCompras() {
  return (
    
    <header> 
    <div className={style.container_icon}> 
    <div className={style.container_cart_icon}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={style.icon_cart}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <div className={style.count_products}>
        <span id={style.contador_productos}>0</span>
      </div>
    </div>
    <div className={`${style.container_cart_products} ${style.hidden_cart}`}>
      <div className={`${style.row_product} ${style.hidden}`}>
        <div className={style.cart_product}>
          <div className={style.info_cart_product}>
            <span className={style.cantidad_producto_carrito}>1</span>
            <p className={style.titulo_producto_carrito}>Zapatos Nike</p>
            <span className={style.precio_producto_carrito}>$80</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={style.icon_close}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className={`${style.cart_total} ${style.hidden}`}>
        <h3>Total:</h3>
        <span className={style.total_pagar}>$200</span>
      </div>
      <p className={style.cart_empty}>El carrito está vacío</p>
    </div>
  </div>
  
  </header>

  )
}
