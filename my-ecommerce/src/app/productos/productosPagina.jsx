'use client';
import React from 'react';
import Card from '../componentes/cardProductos';
import { getProductos } from '../../service/productosServices';

export default async function ProductosPagina() {
	const productos = await getProductos();

	return (
		<>
			{productos.map((prod, index) => (
				<div key={index}>
					<Card item={prod} />
				</div>
			))}
		</>
	);
}
