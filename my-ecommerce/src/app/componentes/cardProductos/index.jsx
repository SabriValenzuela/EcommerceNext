import React from 'react'
import style from "./card.module.css"
import Link from 'next/link'

export default function card() {
  return (
<div className={style.carta_prod}>
        <h5 className={style.titulo_item}>Miel pura (500gr)</h5>
        <img src="img/Mielabeja200gr_4.jpg" className={style.img_item} />
        <div className={style.capa}>
          <h3>Miel pura</h3>
          <p>
            Producida respetando los ciclos naturales de vida en las abejas y con cuidados ecológicos y amigables con el medio ambiente, favoreciendo así a los polinizadores locales y la flora 
          </p>
          <button>Agregar al carro</button>
        </div>
        <h5 className={style.precio_item}>$4.500</h5>
      </div>
      
      )
    }