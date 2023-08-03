import React from "react";
import { useState } from "react";
import style from "./datosEntrega.module.css";
import { postCliente } from "../../../service/productosServices";
import Resumen from "../../componentes/resumen/index";

export default function DatosEntrega({ props, items }) {
  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    cliente_direccion: "",
    cliente_correo: "",
    cliente_nombre: "",
    cliente_whatsapp: "",
    cliente_informacion: "",
  });
  const [cliente, setCliente] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      cliente_nombre: formData.cliente_nombre,
      cliente_correo: formData.cliente_correo,
      cliente_direccion: formData.cliente_direccion,
      cliente_whatsapp: formData.cliente_whatsapp,
      cliente_informacion: formData.cliente_informacion,
    };
    postCliente(formattedData)
      .then((res) => {
        setCliente(res.cliente);
        console.log("cliente creado");
        setView(true);
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
      });
  };

  return (
    <>
      {view == false ? (
        <div>
          <section>
            <div className={style.de_form}>
              <br className={style.de_formulario} />
              <h2>Datos de entrega</h2>
              <br />
              <br />
              <form
                action="submeter-formulario.php"
                method="post"
                onSubmit={handleSubmit}
              >
                <p>
                  <label htmlFor="nombre" className={style.de_nombre}>
                    Nombre
                    <span className={style.obligatorio}>*</span>
                  </label>
                  <input
                    className={style.input}
                    type="text"
                    name="cliente_nombre"
                    id="cliente_nombre"
                    value={formData.cliente_nombre}
                    required="obligatorio"
                    placeholder="Escribe tu nombre"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="direccion" className={style.de_direccion}>
                    Dirección
                    <span className={style.obligatorio}>*</span>
                  </label>
                  <input
                    className={style.input}
                    type="direccion"
                    name="cliente_direccion"
                    id="cliente_direccion"
                    value={formData.cliente_direccion}
                    required="obligatorio"
                    placeholder="Escribe tu dirección"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="email" className={style.de_email}>
                    Email
                    <span className={style.obligatorio}>*</span>
                  </label>
                  <input
                    className={style.input}
                    type="email"
                    name="cliente_correo"
                    id="cliente_correo"
                    value={formData.cliente_correo}
                    required="obligatorio"
                    placeholder="Escribe tu Email"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="WhatsApp" className={style.de_whatsapp}>
                    whatsapp
                    <span className={style.obligatorio}>*</span>
                  </label>
                  <input
                    className={style.input}
                    type="whatsapp"
                    name="cliente_whatsapp"
                    id="cliente_whatsapp"
                    value={formData.cliente_whatsapp}
                    required="obligatorio"
                    placeholder="Escribe tu WhatsApp, por ejemplo +569 - XXXXXXXX"
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <label htmlFor="informacion" className={style.de_informacion}>
                    informacion
                  </label>
                  <input
                    name="cliente_informacion"
                    className={style.de_informacion}
                    id="cliente_informacion"
                    value={formData.cliente_informacion}
                    placeholder="Deja aquí información adicional que deberíamos tomar en cuenta para tu pedido"
                    onChange={handleChange}
                  />
                </p>
                <button type="submit" name="enviar_formulario" id="finalizar">
                  <p>Finalizar</p>
                </button>
              </form>
            </div>
          </section>
          <h3>
            Recuerde no realizar pagos por adelantados a desconocidos, para
            evitar ser víctima de estafas.{" "}
          </h3>
        </div>
      ) : (
        <Resumen total={props} items={items} cliente={cliente} />
      )}
    </>
  );
}
