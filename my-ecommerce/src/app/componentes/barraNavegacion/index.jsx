'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './barraNavegacion.module.css';

export default function BarraNavegacion() {
	const [activo, setActivo] = useState(false);

	const handleButtonClick = () => {
		setActivo(!activo);
	};

	return (
		<header className={style.header}>
			<section className={style.contenedor_superior}>
				<div className={style.logo}>
					<Link href={'/'}>
						<Image
							src="/images/logoNegro.png"
							className={style.logo}
							alt="logo"
							width={180}
							height={150}
						/>
					</Link>
					<button onClick={handleButtonClick} className={style.boton}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 24 24"
						>
							<path
								fill="#86afe6"
								d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
							/>
						</svg>
					</button>
				</div>

				<nav className={`${style.navbar} ${activo ? `${style.activo}` : ''}`}>
					<ul className={style.nav_links}>
						<li>
							<Link href="/">Inicio</Link>
						</li>
						<li>
							<Link href="/sobreNosotros">Sobre Nosotros</Link>
						</li>
						<li>
							<Link href="/productos">Productos</Link>
						</li>
						<li>
							<Link href="/blogPublicaciones">Blog</Link>
						</li>
						<li>
							<Link href="/mayoristas">Mayoristas</Link>
						</li>
						<li>
							<Link href="/contacto">Contacto</Link>
						</li>
					</ul>
				</nav>
			</section>

			<div
				className={style.wave}
				style={{ height: '150px', overflow: 'hidden' }}
			>
				<svg
					viewBox="0 0 500 150"
					preserveAspectRatio="none"
					style={{ height: '100%', width: '100%' }}
				>
					<path
						d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
						style={{ stroke: 'none', fill: '#fff' }}
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
