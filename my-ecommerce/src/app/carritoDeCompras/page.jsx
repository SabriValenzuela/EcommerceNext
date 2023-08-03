"use client";
import React, { useEffect, useState } from "react";
import style from "./carrito.module.css";
import Link from "next/link";
import { useAppContext } from "../componentes/estadoContenedor";
import DatosEntrega from "../componentes/datosEntrega/page";

export default function comprasCarrito() {
  const cart = useAppContext();
  const [form, setForm] = useState(false);
  const [total, setTotal] = useState();

  useEffect(() => {
    const total = cart.items.reduce((acc, item) => {
      return (acc += item.qty * item.producto_precio);
    }, 0);
    setTotal(total.toLocaleString());
  }, [cart]);

  const handleButton = (e) => {
    e.preventDefault();
    setForm(true);
  };

  function handleRemoveClick(e) {
    cart.removeItemFromCart(Number(e.target.value));
  }

  return (
    <>
      <main className={style.body}>
        {form == false ? (
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
                {cart.items.map((item1, index) => (
                  <tr className={style.tr}>
                    <td>{item1.producto_nombre}</td>
                    <td>{item1.producto_precio}</td>
                    <td>{item1.qty}</td>
                    <td>Subtotal</td>
                    <td>
                      <button
                        className={style.remove_btn}
                        onClick={handleRemoveClick}
                        value={item1.producto_id}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>Total:</td>
                  <td colSpan={2}> ${total}</td>
                </tr>
              </tfoot>
            </table>
            <button onClick={handleButton} className={style.checkout_btn}>
              Continuar compra
            </button>
          </section>
        ) : (
          <DatosEntrega props={total} items={cart.items} />
        )}
      </main>
    </>
  );
}
