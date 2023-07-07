import React from 'react'
import style from './mayoristas.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function page() {
      return (
    <div className={style.ventas_mayoristas}>
    <h2 className={style.custom_title}>Ventas Mayoristas</h2>
    <br /><br />
    <p>Nos enorgullece ofrecer un servicio especializado de ventas mayoristas para satisfacer las necesidades de
      nuestros clientes. Entendemos que muchos negocios, como <span className={style.highlight}>farmacias y tiendas
        naturistas</span>, requieren una cantidad considerable de productos para abastecer su demanda.</p>
    <br />
    <p>¡No importa el tamaño de tu negocio, estamos aquí para ayudarte a satisfacer la demanda de productos de
      tus clientes!, todos los productos de Esencias del Llaima tienen un valor mayorista, solo debe <span className={style.highlight}>preguntar por el stock disponible de ellos</span>.</p>
    <p>Tenemos relaciones comerciales sólidas y confiables en la industria farmacéutica. Nuestros clientes
      confían en la calidad y pureza de nuestros productos estrellas <span className={style.highlight}>APICOLON e
        INMUNAPIS</span>, respaldados por rigurosos estándares de producción y procesos de selección.</p>
    <br /><br />
    <h3>Información venta Mayorista:</h3>
    <Image src="/images/productosBonitos.png" className={style.info_imagen} alt="Imagen de caja de venta" width={250} height={250}/>
    <ul>
      <li>Compra mínima requerida: 20 unidades</li>
      <li>Método de pago: Transferencia a la cuenta de Esencias del Laima, el comprobante debe ser enviado al
        correo "oscarcunco@gmail.com".</li>
      <li>Se reciben pedidos hasta el miércoles al mediodía.</li>
      <li>Los pagos correspondientes deben realizarse antes de las 18:00 horas.</li>
      <li>Los despachos se realizan luego de recibir el comprobante de pago al correo electrónico
        correspondiente.</li>
      <li>El despacho a destino se hace los días jueves por las empresas presentes en Cunco: Starken, Correos
        de Chile, Chilexpress y Cacem Express.</li>
      <li>El envío es por pagar a la dirección que más le convenga al cliente.</li>
      <li>El tiempo estimado de llegada a cualquier lugar de Chile es máximo 5 días hábiles después del jueves
        en que se realizó el despacho.</li>
    </ul> <br /> <br />
    <p>Entendemos la importancia de brindar un servicio cercano y personalizado. Es por eso que también
      realizamos <span className={style.highlight}> entregas presenciales</span> en Cunco, Melipeuco, Temuco o Padre las
      Casas, puedes contar con nuestra atención directa, nuestro equipo se encargará de llevar los productos
      hasta tu ubicación</p>
    <br />
    <p id={style.compra_mayorista}>Para proceder con tu compra mayorista comunicate mediante nosotros a través de la
      pestaña de <Link href="contacto.html" target="_blank">contacto</Link> o presionando el icono de whatsapp.</p>
  </div>
   
  )
}
