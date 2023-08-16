'use client';
import React from 'react';
import style from './productos.module.css';
import ProductosPagina from './productosPagina';

export default function page() {
	const handleClick = (item) => {
		setCarrito(item);
	};
	return (
		<>
			<div>
				<h1 className={style.titulo}>Productos</h1>
			</div>
			<div className={style.flex}>
				<ProductosPagina handleClick={handleClick} />
			</div>
		</>
	);
}
