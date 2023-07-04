import React from 'react'
import style from './piePagina.module.css'
import Image from 'next/image';
import Link from 'next/link'



export default function PiePagina() {
  return (
    <>
    <footer className={style.pie_pagina}>
    <div className={style.grupo_1}>
      <div className={style.box}>
        <figure className={style.imageLogo}>
          <Link href="#"> 
            <Image src="/images/logoNegro.png" alt="Logo Escencias del Llaima" width={180} height={200} />
          </Link>
        </figure> 
      </div>
      <div className={style.box}>
        <h2 className={style.SN}>Informaciones</h2>
        <div className={style.vertical_column}>
          <Link href="/sobrenosotros/sobreNosotros.html">Sobre nosotros</Link>       
          <Link href="/mayorista/mayoristas.html">Mayorista</Link> 
          <Link href="/terminosycondiciones/index.html">Términos y condiciones</Link>
          <Link href="/Visitas/index.html">Visitas guiadas</Link>
        
        </div>
      </div> 
      <div className={style.box}>
        <h2>Contactanos</h2>
        <div className={style.contacto}>
       <Link href="mailto:info@ejemplo.com" /* className={fa fa-envelope} *//>
          <Link href="tel:+1234567890" /* className={fa fa-phone} *//>
          <Link href="https://goo.gl/maps/4xGLeVD3BdMSazMi8" target="_blank" rel="noopener noreferrer" /* className={fa fa-map-marker-alt} *//> 
        </div>
        <br /><br />
        <h2>Siguenos</h2>
        <div className={style.red_social}>
        <fontawesomeicon icon="fa-brands fa-facebook" size="2xs"><Link target="_blank" href="https://www.facebook.com/esenciasdelllaima/?locale=es_LA"/> </fontawesomeicon>
          {/* 
           <Link target="_blank" href="https://www.instagram.com/esenciasdelllaima/?hl=es" className={fa fa-instagram}/>
          <Link target="_blank" href="https://www.youtube.com/watch?v=hjWxfyOThd4" className={fa fa-youtube}/>  */}
        </div>
      </div>
    </div>
    <div className={style.grupo_2}>
      <small>© 2023 <b>Escencias del Llaima</b> - Todos los Derechos Reservados.</small>
    </div>
  </footer>
  {/*Iconos*/}
  </>
  )
}
