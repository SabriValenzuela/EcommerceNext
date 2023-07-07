import React from 'react'
import style from './datosEntrega.module.css'


export default function page() {
  return (
    <div>
  <section>
    <div className={style.de_form}>
      <br className={style.de_formulario} />
      <h2>Datos de entrega</h2>
      <br /><br />
      <form action="submeter-formulario.php" method="post">
        <p>
          <label htmlFor="nombre" className={style.de_nombre}>Nombre
            <span className={style.obligatorio}>*</span>
          </label>
          <input  className={style.input}  type="text" name="introducir_nombre" id="de_nombre" required="obligatorio" placeholder="Escribe tu nombre" />
        </p>
        <p>
          <label htmlFor="direccion" className={style.de_direccion}>Dirección
            <span className={style.obligatorio}>*</span>
          </label>
          <input  className={style.input}  type="direccion" name="introducir_direccion" id="de_direccion" required="obligatorio" placeholder="Escribe tu dirección" />
        </p>
        <p>
          <label htmlFor="email" className={style.de_email}>Email
            <span className={style.obligatorio}>*</span>
          </label>
          <input  className={style.input}  type="email" name="introducir_email" id="de_email" required="obligatorio" placeholder="Escribe tu Email" />
        </p>
        <p>
          <label htmlFor="WhatsApp" className={style.de_whatsapp}>whatsapp
            <span className={style.obligatorio}>*</span>
          </label>
          <input  className={style.input}  type="whatsapp" name="introducir_whatsapp" id="de_whatsapp" required="obligatorio" placeholder="Escribe tu WhatsApp, por ejemplo +569 - XXXXXXXX" />
        </p>
        <p>
          <label htmlFor="informacion" className={style.de_informacion}>informacion
          </label>
          <textarea name="introducir_informacion" className={style.de_informacion} id="informacion" placeholder="Deja aquí información adicional que deberíamos tomar en cuenta para tu pedido" defaultValue={""} />
        </p>
        <button type="submit" name="enviar_formulario" id="finalizar"><p>Finalizar</p></button>
      </form></div></section>
  <h3>Recuerde no realizar pagos por adelantados a desconocidos, para evitar ser víctima de estafas. </h3>
</div>

  )
}
