import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./barraNavegacion.module.css";

export default function BarraNavegacion() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.nav_links} id={style.navLinks}>
          <Link href="/">Inicio</Link>
          <Link href="/sobreNosotros">Sobre Nosotros</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/blogPublicaciones">Blog</Link>
          <Link href="/mayoristas">Mayoristas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </nav>
      <section className={style.logo}>
        <Image
          src="/images/logoNegro.png"
          className={style.logo}
          alt="logo"
          width={180}
          height={150}
        />
      </section>

      <div
        className={style.wave}
        style={{ height: "150px", overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          />
        </svg>
      </div>
    </header>

    /*  <div>
    <header className={style.header}>
     
       
        <label htmlFor="menu">
          <Image src="/images/logo sin fondo 3.png" className={style.menu_icono} alt="" width={100} height={100}/>    
        </label>
      
          <div className={style.header_txt}>
            <div className={style.text_box}>
              <h1>Esencias del Llaima</h1>
            </div>
          </div>
      
      </header>
    <section className={style.head_nav}>
      <nav className={style.nav}>
        <div className={style.nav_links} id="navLinks">
          <ul>
            <li><Link href="/Inicio/index.html">Inicio</Link></li>
            <li><Link href="/sobreNosotros/sobreNosotros.html">Sobre Nosotros</Link></li>
            <li><Link href="/productos mala/productos.html">Productos</Link></li>
            <li><Link href="/Blog/Publicaciones_blog.html">Blog</Link></li>
            <li><Link href="/Mayorista/mayoristas.html">Mayoristas</Link></li>
            <li><Link href="/contacto/contacto.html">Contacto</Link></li>
          </ul>
        </div>
      </nav>
    </section>
  </div> */
  );
}
