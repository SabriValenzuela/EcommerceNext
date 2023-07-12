import React from "react";
import style from "./piePagina.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function PiePagina() {
  return (
    <>
      <footer className={style.pie_pagina}>
        <div className={style.grupo_1}>
          <div className={style.box}>
            <figure className={style.imageLogo}>
              <Link href="#">
                <Image
                  src="/images/logoNegro.png"
                  alt="Logo Escencias del Llaima"
                  width={220}
                  height={200}
                />
              </Link>
            </figure>
          </div>
          <div className={style.box}>
            <h2 className={style.SN}>Informaciones</h2>
            <div className={style.vertical_column}>
              <Link href="./sobreNosotros"> Sobre nosotros</Link>
              <Link href="./mayorista">Mayorista</Link>
              <Link href="./terminosCondiciones">Términos y condiciones</Link>
              <Link href="./sobreNosotros">Visitas guiadas</Link>
            </div>
          </div>
          <div className={style.box}>
            <h2>Contactanos</h2>
            <div className={style.contacto}>
              <Link href="mailto:info@ejemplo.com"></Link>
              <Link href="tel:+1234567890">
                {" "}
                <FaPhoneAlt />{" "}
              </Link>
              <Link
                href="https://goo.gl/maps/4xGLeVD3BdMSazMi8"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
            <br />
            <br />
            <h2>Siguenos</h2>
            <div className={style.red_social}>
              <Link
                target="_blank"
                href="https://www.facebook.com/esenciasdelllaima/?locale=es_LA"
              />

              <Link
                target="_blank"
                href="https://www.instagram.com/esenciasdelllaima/?hl=es"
              />
            </div>
          </div>
        </div>
        <div className={style.grupo_2}>
          <small>
            © 2023 <b>Escencias del Llaima</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </footer>
      {/*Iconos*/}
    </>
  );
}
