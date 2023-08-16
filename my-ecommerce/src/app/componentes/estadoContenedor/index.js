'use client';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({
	items: [],
	addItemToCart: (item) => {},
	getNumberOfItems: () => {},
	removeItemFromCart: (item) => {},
});

export default function EstadoComponente({ children }) {
	const [items, setItems] = useState(
		/* JSON.parse(localStorage.getItem("items")) || */ [] //areglar
	);
	function handleAddItemToCart(item) {
		const temp = [...items];
		/*  console.log(temp); */
		console.log(temp);
		const found = temp.find((i) => i.producto_id === item.producto_id);
		/*  console.log(found); */
		if (found) {
			found.qty++;
		} else {
			item.qty = 1;
			temp.push(item);
		}
		setItems([...temp]);
		localStorage.setItem('items', JSON.stringify(temp));
	}

	function getNumberOfItems() {
		const total = items.reduce((acc, item) => {
			if (item) return (acc += 1);
		}, 0);
		return total;
	}

	function handleRemoveItemFromCart(itemId) {
		const temp = items.filter((item) => item.producto_id !== itemId);
		setItems(temp);
		// Por ejemplo, si estás usando localStorage:
		localStorage.setItem('items', JSON.stringify(temp));
	}

	return (
		<AppContext.Provider
			value={{
				items: items,
				addItemToCart: handleAddItemToCart,
				getNumberOfItems: getNumberOfItems,
				removeItemFromCart: handleRemoveItemFromCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
