import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import style from './carritoCompras.module.css';
import Link from 'next/link';

export default function CarritoCompras() {
	return (
		<div id="cart" className={style.cart} data-totalitems="0">
			<Link href="/carritoDeCompras" replace>
				<FaShoppingCart className={style.i} />
			</Link>
		</div>
	);
}
