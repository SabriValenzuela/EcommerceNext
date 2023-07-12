"use client";
import React from "react";
import Card from "../componentes/cardProductos";

export default function ProductosPagina({ handleClick }) {
  const productos = [
    {
      id: 1,
      nombre: "Inmunapis",
      precio: 6990,
      descripcion:
        "Formulado científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales como resfrío común, influenza, faringitis, bronquitis, entre otros",
    },
    {
      id: 2,
      nombre: "Apicolon",
      precio: 6990,
      descripcion:
        "Hecho científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales como resfrío común, influenza, faringitis, bronquitis, entre otros",
    },
    {
      id: 3,
      nombre: "Propoleo en espray",
      precio: 4000,
      descripcion:
        "Hecho científicamente para fortalecer tus defensas de manera natural, evitando y aliviando las enfermedades provocados por virus estacionales como resfrío común, influenza, faringitis, bronquitis, entre otros",
    },
    {
      id: 4,
      nombre: "Propóleo en tintura",
      precio: 3500,
      descripcion:
        "Propoleo en estado puro disuelto en alcohol, sirve para hacer gárgaras ante infecciones bucales, faringeas, laringeas (amigdalitis)",
    },

    {
      id: 5,
      nombre: "Polen granulado",
      precio: 3500,
      descripcion:
        "polen granulado de flores del territorio Araucanía Andina recolectado por abejas",
    },
  ];

  return (
    <>
      {productos.map((prod, index) => (
        <div key={index}>
          <Card item={prod} handleClick={handleClick} />
        </div>
      ))}
    </>
  );
}
