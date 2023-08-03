import React from "react";
import { Style } from "./resumen.module.css";

export default function Resumen({ total, items, cliente }) {
  return (
    <div>
      <h3>{cliente.cliente_nombre}</h3>
      <h3>{cliente.cliente_correo}</h3>
      {items.map((item, index) => (
        <>
          <div key={index}>
            <h3>{item.producto_nombre} </h3>
            <h3>{item.qty} </h3>
            <h3>{item.producto_precio} </h3>
          </div>
        </>
      ))}
      <h3>{total}</h3>
    </div>
  );
}
